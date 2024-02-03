import { StyleInput } from "jsx-dom";

const ANIMATION: HTMLElement =
    <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes popup-open {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        @keyframes popup-close {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
    `
    }}/> as HTMLElement;

const BACKGROUND =
    <div className="popup-background"
         style={{
             position: "fixed",
             top: 0,
             left: 0,
             right: 0,
             bottom: 0,
             backgroundColor: "#000",
             opacity: 0.3,
             zIndex: 1
         }}/>

const POPUP_STYLES: StyleInput = {
    zIndex: 3,
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};




enum VisibilityState {
    CLOSED = "closed",
    OPENING = "opening",
    OPENED = "opened",
    CLOSING = "closing"
}

type BaseState = { visibility: VisibilityState };

type Visibility<VS extends VisibilityState> = { visibility: VS };

const change_visibility = <T extends BaseState, VS extends VisibilityState>( data: T, visibility: VS ): T & Visibility<VS> =>
    ( { ... data, visibility } );

const is = <T extends BaseState, VS extends VisibilityState>( data: T, visibility: VS ): data is T & Visibility<VS> =>
    data.visibility === visibility;





type HasContent = { content: HTMLElement[] };
type NoContent = { content?: undefined };

const has_content = <T extends BaseState>( data: T ): data is T & HasContent =>
    "content" in data && Array.isArray( data.content );

const set_content = <T extends BaseState>( data: T, content: HTMLElement[] ): T & HasContent =>
    ( { ... data, content } );



type ContentState = HasContent | NoContent;

type State = BaseState & ContentState;




const opened = <T extends BaseState>( data: T & Visibility<VisibilityState.OPENING> ): T & Visibility<VisibilityState.OPENED> =>
    ( { ... data, visibility: VisibilityState.OPENED } );

const closed = <T extends BaseState>( data: T & Visibility<VisibilityState.CLOSING> ): T & Visibility<VisibilityState.CLOSED> =>
    ( { ... data, visibility: VisibilityState.CLOSED } );

const open = <T extends BaseState>( data: T & Visibility<VisibilityState.CLOSED> ): T & Visibility<VisibilityState.OPENING> =>
    ( { ... data, visibility: VisibilityState.OPENING } );

const close = <T extends BaseState>( data: T & Visibility<VisibilityState.OPENED> ): T & Visibility<VisibilityState.CLOSING> =>
    ( { ... data, visibility: VisibilityState.CLOSING } );




const Popup = ( props: {
    children: HTMLElement[]
} ): HTMLElement =>
    <div className="popup"
         style={ POPUP_STYLES }>{ props.children }</div> as HTMLElement;

const animation = ( state: State ): string =>
    is( state, VisibilityState.OPENING )
        ? "popup-open 0.6s"
    : is( state, VisibilityState.CLOSING )
        ? "popup-close 0.6s"
    : "";

const render = ( state: State ): HTMLElement => (
    !is( state, VisibilityState.CLOSED ) && has_content( state ) ?
        <div>
            { ANIMATION }
            <div className="popup-wrapper"
                 style={ {
                     zIndex: 9999,
                     animation: animation( state )
                 } }>
                { BACKGROUND }
                <Popup>{ state.content }</Popup>
            </div>
        </div>
    : <span />
) as HTMLElement;





const animationFinished = ( state: State, event: Event ): State =>
    is( state, VisibilityState.OPENING )
        ? opened( state )
    : is( state, VisibilityState.CLOSING )
        ? closed( state )
    : state;




const maybeChangeVisibility = <S extends BaseState>( state: S, elem: HTMLElement ): S =>
    elem.hasAttribute( "opened" )
        ? ( is( state, VisibilityState.CLOSED )
            ? open( state )
            : state
        )
        : ( is( state, VisibilityState.OPENED )
            ? close( state )
            : state
        );

const cloneChildren = ( elem: HTMLElement ): HTMLElement[] =>
    Array.from( elem.children )
        .filter( child => child instanceof HTMLElement )
        .map( child => child.cloneNode( true ) ) as HTMLElement[];

const changeContent = <S extends BaseState>( state: S, elem: HTMLElement ): S =>
    set_content( state, cloneChildren( elem ) )

const domchanged = ( state: State, elem: HTMLElement ): State =>
    changeContent(
        maybeChangeVisibility( state, elem ),
        elem );



const INITIAL_STATE: State = {
    visibility: VisibilityState.CLOSED
}

const popup = {
    initialState: INITIAL_STATE,
    render,
    domchange: domchanged,
    events: {
        animationend: animationFinished
    },
    debug: true
}

export { popup, State };
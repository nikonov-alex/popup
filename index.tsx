import { ReactElement, StyleInput } from "jsx-dom";

const ANIMATION: HTMLElement =
    <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes popup-opening {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        @keyframes popup-closing {
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




enum State {
    OPENING = "opening",
    OPENED = "opened",
    CLOSING = "closing"
}



type Child = HTMLElement | ReactElement;
type Children = Child | Child[];

const Window = ( props: {
    children: Children
} ): HTMLElement =>
    <div className="popup"
         style={ POPUP_STYLES }>{ props.children }</div> as HTMLElement;

const animation = ( state: State ): string =>
    State.OPENED === state
        ? ""
    : `popup-${state} 0.6s forwards`;

const Wrapper = ( props: {
    state: State,
    children: Children
} ): HTMLElement =>
    <div style={ {
             zIndex: 9999,
             position: "fixed",
             animation: animation( props.state )
         } }>
        { BACKGROUND.cloneNode( true ) as HTMLElement }
        <Window>{ props.children }</ Window>
    </div> as HTMLElement;

const Popup = ( props: {
    state: State,
    children: Children,
    className?: string
} ): HTMLElement => (
    <div className={ "popup-wrapper " + (props.className ?? "") }>
        { ANIMATION.cloneNode( true ) as HTMLElement }
        <Wrapper state={ props.state }>{ props.children }</Wrapper>
    </div>
) as HTMLElement;



export { State, Popup };
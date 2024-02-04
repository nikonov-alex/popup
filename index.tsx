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




enum State {
    OPENING = "opening",
    OPENED = "opened",
    CLOSING = "closing"
}




const Window = ( props: {
    children: HTMLElement
} ): HTMLElement =>
    <div className="popup"
         style={ POPUP_STYLES }>{ props.children }</div> as HTMLElement;

const animation = ( state: State ): string =>
    State.OPENING === state
        ? "popup-open 0.6s"
    : State.CLOSING === state
        ? "popup-close 0.6s"
    : "";

const Wrapper = ( props: {
    state: State,
    children: HTMLElement
} ): HTMLElement =>
    <div className="popup-wrapper"
         style={ {
             zIndex: 9999,
             animationFillMode: "forwards",
             animation: animation( props.state )
         } }>
        { BACKGROUND }
        <Window>{ props.children }</ Window>
    </div> as HTMLElement;

const Popup = ( props: {
    state: State,
    children: HTMLElement
} ): HTMLElement => (
    <div>
        { ANIMATION }
        <Wrapper state={ props.state }>{ props.children }</Wrapper>
    </div>
) as HTMLElement;



export { State, Popup };
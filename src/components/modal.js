import React from "react";
import ReactDOM from "react-dom";
import ChronoButton from "./chrono-button";

export default function Modal(props) {
    return ReactDOM.createPortal(
        <div style={props.style} className={"modal"}>
            <h1>{"Timer ended !"}</h1>
            <div>
                <ChronoButton
                    value={"Good Bye !"}
                    class={"exit"}
                    onClick={props.handleExitFunc}
                />
                <ChronoButton
                    value={"Start Again !"}
                    class={"restart"}
                    onClick={props.handleRestartFunc}
                />
            </div>
        </div>,
        document.body,
    );
}

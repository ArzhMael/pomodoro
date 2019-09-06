import React from "react";

function ChronoButton(props) {
    return (
        <button
            className={props.class}
            type={"button"}
            disabled={props.isDisabled}
            onClick={props.handleFunc}
            style={props.style}>
            {props.value}
        </button>
    );
}

export default ChronoButton;

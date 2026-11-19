import React from "react";
import FancyBorder from "../ContainmentTest";

function Dialog(props) {
    return (
        <div className={"Dialog-container"}>
            <FancyBorder color={'blue'}>
                <h1 className={"Dialog-title"}>
                    {props.title}
                </h1>
                <p className={"Dialog-message"}>
                    {props.message}
                </p>
            </FancyBorder>
        </div>
    );
}

export default Dialog;
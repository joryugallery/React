import React from "react";
import Welcome from "./Welcome";


function WelcomeList() {
    return(
        <div>
            <Welcome name={"김두겸"}></Welcome><br/>
            <Welcome name={"조동주"}></Welcome><br/>
            <Welcome name={"김태경"}></Welcome><br/>
        </div>
    )
}

export default WelcomeList;
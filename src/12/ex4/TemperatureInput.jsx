import React, {useState} from "react";

const scaleNames = {
    c: '섭씨', f: '화씨'
}

function TemperatureInput(props) {

    const hadleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    }

    return(
        <fieldset>
            <legend>온도를 입력해 주세요(단위:{scaleNames[props.scale]})</legend>
            <input type="text" value={props.temperature} onChange={hadleChange}/>
        </fieldset>
    );
}

export default TemperatureInput;
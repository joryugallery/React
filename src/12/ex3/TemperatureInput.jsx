import React, {useState} from "react";

const scaleNames = {
    c: '섭씨', f:'화씨'
}

function TemperatureInput(props) {
    const [tempertature, setTemperature] = useState('');

    const handleChange = (event) => {
        setTemperature(event.target.value);
    }
    return(
        <fieldset>
            <legend>온도를 입력해 주세요(단위:{props.scale}</legend>
            <input type="text" value={tempertature} onChange={handleChange}/>
        </fieldset>
        )
}

export default TemperatureInput
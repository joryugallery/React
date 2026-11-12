import { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import "./Calculator.css";

function Calculator(props) {
    const [temperature, setTemperature] = useState('');

    const handleChange = (event) => {
        setTemperature(event.target.value);
    };

    const celsius = parseFloat(temperature);
    const isBoiling = celsius >= 100;

    return (
        <div className={`calc-wrap ${isBoiling ? "hot" : "cold"}`}>
            <fieldset className="calc-card">
                <legend className="calc-legend">🌡️ 섭씨 온도를 입력하세요</legend>

                <div className="calc-input-box">
                    <input
                        className="calc-input"
                        type="number"
                        placeholder="0"
                        value={temperature}
                        onChange={handleChange}
                    />
                    <span className="calc-unit">°C</span>
                </div>

                <div className="calc-gauge">
                    <div
                        className="calc-gauge-fill"
                        style={{ width: `${Math.min(Math.max(celsius || 0, 0), 100)}%` }}
                    />
                </div>

                <BoilingVerdict celsius={celsius} />
            </fieldset>
        </div>
    );
}

export default Calculator;
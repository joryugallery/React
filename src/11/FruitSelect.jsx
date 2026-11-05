import React, { useState } from "react";
import "./FruitSelect.css";

const fruits = [
    { value: "apple", label: "사과", emoji: "🍎" },
    { value: "banana", label: "바나나", emoji: "🍌" },
    { value: "strawberry", label: "딸기", emoji: "🍓" },
    { value: "mango", label: "망고", emoji: "🥭" },
];

function FruitSelect() {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) {
            alert("과일을 먼저 선택하세요!");
            return;
        }
        const fruit = fruits.find((f) => f.value === value);
        alert("선택한 과일 : " + fruit.label);
    };

    const selected = fruits.find((f) => f.value === value);

    return (
        <div className="fruit-page">
            <form className="fruit-card" onSubmit={handleSubmit}>
                <div className="fruit-emoji" key={value}>
                    {selected ? selected.emoji : "🧺"}
                </div>

                <h2 className="fruit-title">오늘의 과일</h2>

                <label className="fruit-label">
                    과일을 선택하세요
                    <select
                        className="fruit-select"
                        value={value}
                        onChange={handleChange}
                    >
                        <option value="" disabled>
                            -- 골라주세요 --
                        </option>
                        {fruits.map((f) => (
                            <option key={f.value} value={f.value}>
                                {f.emoji} {f.label}
                            </option>
                        ))}
                    </select>
                </label>

                <button className="fruit-button" type="submit">
                    선택 완료
                </button>
            </form>
        </div>
    );
}

export default FruitSelect;
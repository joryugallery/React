import React, {useState} from "react";
import "./ConfirmButton.css";

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <div className="cb-stage">
            <button className="cb-button" onClick={handleConfirm} disabled = {isConfirmed}>
                <span className="cb-label">{isConfirmed ? "확인됨" : "확인하기"}</span>
            </button>
        </div>
    )
}

export default ConfirmButton;

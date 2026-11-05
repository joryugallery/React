import React, {useState} from "react";
import "./MessageSender.css";

function MessageSender() {
    const [message, setMessage] = useState("");

    function handleChange(e) {

            setMessage(e.target.value);

    }

    function handleClick() {

            alert(message);
            setMessage("");

    }

    return(
        <div className="duck-pond">
            <div className="duck-card">
                <h1>메세지 전송 프로그램</h1>
                <input type={"text"} placeholder={"전송할 메시지 입력"} value={message} onChange={handleChange}/>
                <button onClick={handleClick}>메시지전송</button>
                <p>미리보기: {message}</p>
            </div>
            <div className="duck-parade" aria-hidden="true">
                <span>🦆</span><span>🐤</span><span>🐤</span><span>🦆</span><span>🐥</span><span>🐤</span><span>🦆</span>
            </div>
            <div className="duck-parade reverse" aria-hidden="true">
                <span>🦆</span><span>🐣</span><span>🦆</span><span>🐤</span><span>🦆</span>
            </div>
        </div>
    )
}

export default MessageSender;

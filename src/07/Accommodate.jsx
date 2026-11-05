import React, {useEffect, useState} from "react";
import useCounter from "./useCounter";
import "./Accommodate.css";

const MAX_CAPACITY = 20;

function Accommodate() {
    const [count, increaseCount, decreaseCount] = useCounter(0)
    const [isFull, setIsFull] = useState(false);

    useEffect(() => {
        console.log("useEffect 확인용");
        console.log("useEffect 실행됨: 컴포넌트가 마운트될때, 업데이트될때")
        console.log(`isFull : ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return(
        <div className="agora">
            <div className={`temple ${isFull ? "temple--full" : ""}`}>
                <div className="pediment">
                    <span className="pediment__sun">☀</span>
                </div>
                <div className="meander" />

                <header className="temple__header">
                    <h1 className="temple__title">ΟΔΥΣΣΕΙΑ</h1>
                    <p className="temple__subtitle">이타카의 연회장 · 정원 {MAX_CAPACITY}명</p>
                </header>

                <div className="colonnade">
                    <div className="column" />
                    <div className="sanctum">
                        <p className="count">
                            현재 총 <span className="count__number">{count}</span>명 수용중입니다.
                        </p>

                        <ul className="shields">
                            {Array.from({length: MAX_CAPACITY}, (_, i) => (
                                <li key={i} className={`shield ${i < count ? "shield--on" : ""}`} />
                            ))}
                        </ul>

                        <div className="actions">
                            <button className="btn btn--enter" onClick={increaseCount}>수용시설에 입장</button>
                            <button className="btn btn--leave" onClick={decreaseCount}>수용시설에서 퇴장</button>
                        </div>

                        {isFull && <p className="oracle">수용시설에 정원이 가득 찼습니다.</p>}
                    </div>
                    <div className="column" />
                </div>

                <div className="meander" />
                <div className="stylobate" />
            </div>
        </div>
    )
}

export default Accommodate;

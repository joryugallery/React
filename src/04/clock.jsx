import React, { useState, useEffect } from "react";
import "./clock.css";

function Clock() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const time = now.toLocaleTimeString("ko-KR", {hour12: false});
    const dateStr = now.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
    });

    return (
        <div className="clock-page">
            <div className="clock-card">
                <div className="clock-grid" aria-hidden="true"/>

                <h1 className="clock-dept">인공지능소프트웨어과</h1>

                <div className="clock-time">
                    {time.split("").map((ch, i) => (
                        <span key={i} className={ch === ":" ? "colon" : "digit"}>
              {ch}
            </span>
                    ))}
                </div>

                <h2 className="clock-date">{dateStr}</h2>

                <div className="clock-tag">SYSTEM CLOCK · REAL-TIME</div>
            </div>
        </div>
    )
}

export default Clock;
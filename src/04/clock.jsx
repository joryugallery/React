import React, { useState, useEffect, useRef } from "react";
import "./clock.css";

const BURST_EMOJIS = ["💥", "🎆", "🥳", "⚡", "🌀", "🍾", "🚨", "🌈", "👑", "🎇"];

function makeBurst() {
    return Array.from({ length: 18 }).map((_, i) => ({
        id: `${Date.now()}-${i}`,
        emoji: BURST_EMOJIS[Math.floor(Math.random() * BURST_EMOJIS.length)],
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 0.6,
        size: 26 + Math.random() * 34,
    }));
}

// 10초마다 터지는 폭죽: 한 번에 여러 발을 서로 다른 위치/색으로 쏘아 올린다
function makeFireworks() {
    const shellCount = 4 + Math.floor(Math.random() * 2); // 4~5발

    return Array.from({ length: shellCount }).map((_, s) => {
        const hue = Math.floor(Math.random() * 360);
        const particleCount = 34 + Math.floor(Math.random() * 14);
        const radius = 150 + Math.random() * 110;

        return {
            id: `fw-${Date.now()}-${s}`,
            left: 15 + Math.random() * 70,      // vw %
            top: 12 + Math.random() * 38,       // vh % (터지는 높이)
            launchDelay: s * 0.18 + Math.random() * 0.15,
            particles: Array.from({ length: particleCount }).map((_, p) => {
                const angle = (p / particleCount) * Math.PI * 2 + Math.random() * 0.15;
                const dist = radius * (0.65 + Math.random() * 0.35);
                return {
                    id: p,
                    dx: Math.cos(angle) * dist,
                    dy: Math.sin(angle) * dist,
                    hue: (hue + Math.random() * 50) % 360,
                    size: 7 + Math.random() * 7,
                    delay: Math.random() * 0.08,
                };
            }),
        };
    });
}

const FIREWORK_LIFETIME = 2600; // 발사 + 폭발 애니메이션이 끝나는 시간(ms)

function Clock() {
    const [now, setNow] = useState(new Date());
    const [burstItems, setBurstItems] = useState([]);
    const [fireworks, setFireworks] = useState([]);
    const lastMinuteRef = useRef(new Date().getMinutes());
    const lastTickRef = useRef(-1);

    useEffect(() => {
        const timer = setInterval(() => {
            const current = new Date();
            setNow(current);

            if (current.getMinutes() !== lastMinuteRef.current) {
                lastMinuteRef.current = current.getMinutes();
                setBurstItems(makeBurst());
                setTimeout(() => setBurstItems([]), 2600);
            }

            // 0, 10, 20, 30, 40, 50초마다 폭죽 발사
            const sec = current.getSeconds();
            const bucket = Math.floor(sec / 10);
            if (sec % 10 === 0 && bucket !== lastTickRef.current) {
                lastTickRef.current = bucket;
                const shells = makeFireworks();
                setFireworks((prev) => [...prev, ...shells]);

                const ids = new Set(shells.map((s) => s.id));
                setTimeout(() => {
                    setFireworks((prev) => prev.filter((s) => !ids.has(s.id)));
                }, FIREWORK_LIFETIME);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const time = now.toLocaleTimeString("ko-KR", { hour12: false });
    const dateStr = now.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
    });

    const isBursting = burstItems.length > 0;

    return (
        <div className={`clock-page${isBursting ? " mega-chaos" : ""}`}>
            <div className={`clock-card${isBursting ? " mega-chaos-card" : ""}`}>
                <div className="clock-grid" aria-hidden="true" />

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

            {isBursting && (
                <div className="burst-overlay" aria-hidden="true">
                    {burstItems.map((item) => (
                        <span
                            key={item.id}
                            className="burst-emoji"
                            style={{
                                left: `${item.left}%`,
                                top: `${item.top}%`,
                                fontSize: `${item.size}px`,
                                animationDelay: `${item.delay}s`,
                            }}
                        >
              {item.emoji}
            </span>
                    ))}
                </div>
            )}

            {fireworks.length > 0 && (
                <div className="firework-layer" aria-hidden="true">
                    {fireworks.map((shell) => (
                        <div
                            key={shell.id}
                            className="firework-shell"
                            style={{
                                left: `${shell.left}%`,
                                top: `${shell.top}%`,
                                animationDelay: `${shell.launchDelay}s`,
                            }}
                        >
                            <span
                                className="firework-rocket"
                                style={{ animationDelay: `${shell.launchDelay}s` }}
                            />
                            {shell.particles.map((p) => (
                                <span
                                    key={p.id}
                                    className="firework-spark"
                                    style={{
                                        "--dx": `${p.dx}px`,
                                        "--dy": `${p.dy}px`,
                                        width: `${p.size}px`,
                                        height: `${p.size}px`,
                                        background: `hsl(${p.hue}, 100%, 65%)`,
                                        boxShadow: `0 0 6px 2px #fff, 0 0 20px 6px hsl(${p.hue}, 100%, 60%)`,
                                        animationDelay: `${shell.launchDelay + 0.65 + p.delay}s`,
                                    }}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Clock;

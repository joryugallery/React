function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return (
            <div className="verdict boiling">
                <span className="bubble b1" />
                <span className="bubble b2" />
                <span className="bubble b3" />
                <span className="bubble b4" />
                <p>🔥 물이 끓습니다!</p>
            </div>
        );
    }
    return (
        <div className="verdict calm">
            <p>❄️ 물이 끓지 않습니다.</p>
        </div>
    );
}

export default BoilingVerdict;
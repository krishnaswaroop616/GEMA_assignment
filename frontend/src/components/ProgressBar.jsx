const ProgressBar = ({ value }) => {
    const percentage = (value / 9) * 100;
    const getColor = () => {
        if (value >= 8) return "#4CAF50";
        if (value >= 6) return "#FFC107";
        return "#F44336";
    };
    return (
        <div style={{ background: "#eee", height: "10px", borderRadius: "6px" }}>
            <div style={{
                width: `${percentage}%`,
                height: "100%",
                background: getColor(),
                borderRadius: "6px"
            }}></div>
        </div>
    );
}

export default ProgressBar;
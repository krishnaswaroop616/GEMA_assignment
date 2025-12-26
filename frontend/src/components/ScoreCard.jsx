import ProgressBar from "./ProgressBar";
import getFeedback from "../utils/FeedbackLogic";

const ScoreCard=({label,score})=>{
    return(
        <div style={{ marginBottom: "20px" }}>
            <h4>{label}: {score} / 9</h4>
            <ProgressBar value={score}/>
            <p  style={{ fontSize: "14px", color: "#555" }}>{getFeedback(score)}</p>
        </div>
    );
}

export default ScoreCard;
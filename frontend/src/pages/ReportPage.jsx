import { useEffect, useState } from "react";
import axios from "axios";
import getFeedback from "../utils/FeedbackLogic";

const ReportPage = () => {
  const [report, setReport] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      const res = await axios.get("http://localhost:8080/report");
      setReport(res.data);
    };
    fetchReport();
  }, []);

  if (!report) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container py-3" style={{ maxWidth: "1000px" }}>
      <div className="row mb-5 align-items-center">
        <div className="col-md-8">
          <h1 className="fs-1 fw-bold">Jeevan Chopra</h1>
          <p className="fs-5 text-muted"> Speaking Test Report &nbsp;( {report.testDate} )</p>
        </div>
        <div className="col-md-4 text-md-end">
          <div className="d-inline-block p-4 bg-primary text-white rounded-3 shadow">
            <small className="d-block text-uppercase fw-bold opacity-75">Overall Score</small>
            <h1 className=" fw-bold mb-0">{report.overall.toFixed(1)}</h1>
          </div>
        </div>
      </div>

      <div className="row g-5">
        <div className="col-lg-6">
          <h3 className="fw-bold mb-4">Summary of Scores</h3>
          
          {report.scores.map((item, index) => (
            <div key={index} className="mb-5">
              <div className="d-flex justify-content-between align-items-end mb-2">
                <div>
                  <h5 className="fw-bold mb-0">{item.label}</h5>
                  <small className="text-muted">{item.desc}</small>
                </div>
                <h4 className="fw-bold text-primary mb-0">{item.score}</h4>
              </div>
              <div className="progress" style={{ height: "10px", borderRadius: "10px" }}>
                <div className="progress-bar bg-primary"  style={{ width: `${(item.score / 9) * 100}%`, borderRadius: "10px" }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-lg-6">
          <div className="p-3 py-4 bg-light rounded-4 border-start border-5 border-primary">
            <h3 className="fw-bold mb-4">Descriptive Feedback</h3>
            
            <p className="fs-5 mb-2" >
              <strong>Overall Analysis:</strong><br/>
              <p className="fs-6">Has reasonably good pronunciation with some accent. Demonstrates generally good fluency and coherence while speaking but may take occasional pauses. Is proficient in using sophisticated vocabulary and idiomatic structures.</p>
            </p>

            <hr />

            <div className="mt-4">
              <h6 className="fw-bold text-uppercase text-primary ">Scoring Guide Note</h6>
              <p className="small ">This report maps Speechace scores to CEFR and IELTS standards. A score of 7.0 indicates a <strong>Good User</strong> who generally handles complex language well and understands detailed reasoning.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
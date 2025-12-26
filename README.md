# Student Speaking Assessment Report

A full-stack functional prototype of a student assessment dashboard. This project replicates the professional "Top Part" of a language proficiency report (IELTS/Speechace style) for student **Jeevan Chopra**.

##  1. How to Run the Project

### **Prerequisites**
- [Node.js](https://nodejs.org/) installed on your machine.
- npm (Node Package Manager).

### **Installation Steps**

1. **Backend Setup**
   - Open your terminal and navigate to the backend folder:
     ```bash
     cd backend
     npm install
     node index.js
     ```
   - The server will start on `http://localhost:8080`.

2. **Frontend Setup**
   - Open a new terminal window and navigate to the frontend folder:
     ```bash
     cd frontend
     npm install
     npm start
     ```
   - The application will automatically open in your browser at `http://localhost:3000`.

---

## 2. Where the scores are stored

As per the assignment requirements (**Option 1**), the data is handled via a simple, centralized backend source.

- **Data File:** `backend/data.js`
- **Storage Type:** In-memory JSON object.
- **Access:** The data is served via a REST API endpoint (`GET /report`) created using Express.js.
- **Data Content:** - **Overall Band:** 7.0
  - **Pronunciation:** 8.3
  - **Fluency:** 9.0
  - **Vocabulary:** 6.2
  - **Grammar:** 6.2

By using a backend API, the frontend remains "decoupled," meaning the UI updates dynamically whenever the data in `backend/data.js` is changed.

---

## 3. How feedback logic works

The report features an automated **Descriptive Feedback Engine** that translates numerical scores into professional assessment text.

- **Location:** `frontend/src/utils/FeedbackLogic.js`
- **Mechanism:** The logic is based on a conditional function that maps the `overall` score range to specific performance descriptions.
- **Logic Rules:**
    - **Score ≥ 8:** Returns *"Excellent performance with strong control."*
    - **Score 6 - 7:** Returns *"Good performance with minor inaccuracies."*
    - **Score < 6:** Returns *"Needs improvement."*

**Dynamic Behavior:** The logic is integrated directly into the React component lifecycle. When the application fetches the score from the backend, the `getFeedback()` function is called. If you modify the score in the backend, the text on the dashboard updates instantly without needing code changes in the UI.

---

## Tech Stack
- **Frontend:** React.js
- **Styling:** Bootstrap 5 (for professional grid and layout)
- **Backend:** Node.js & Express
- **HTTP Client:** Axios

---

### **Evaluation Criteria Coverage**
- **UI Clarity:** Modern, spacious dashboard design.
- **Charts:** Large graphical progress bars with score-based color coding.
- **Documentation:** Detailed instructions for local setup and logic explanation.

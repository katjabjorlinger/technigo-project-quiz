import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "Which album did Taylor Swift release in 2014?",
    type: "radio",
    options: ["Red", "1989", "Reputation", "Fearless"],
    correctAnswer: "1989",
  },
  {
    id: 2,
    question: "Where was Taylor Swift born?",
    type: "select",
    options: [
      "New York",
      "Nashville",
      "Reading, Pennsylvania",
      "Los Angeles",
    ],
    correctAnswer: "Reading, Pennsylvania",
  },
  {
    id: 3,
    question:
      "Which song includes the lyric: 'It's me, hi, I'm the problem, it's me'?",
    type: "radio",
    options: ["Anti-Hero", "Blank Space", "Style", "Cardigan"],
    correctAnswer: "Anti-Hero",
  },
];

export const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const score = questions.reduce((total, q) => {
    return answers[q.id] === q.correctAnswer ? total + 1 : total;
  }, 0);

  /* ================= RESULT VIEW ================= */
  if (submitted) {
    return (
      <div className="quiz-page">
        <div className="quiz-card quiz-result">
          <h1>Quiz Result</h1>

          <p className="quiz-score">
            {score} / {questions.length}
          </p>

          <p className="quiz-feedback">
            {score === questions.length
              ? "Perfect score! True Swiftie 💖"
              : "Nice job! Want to try again?"}
          </p>

          <button
            className="quiz-button"
            onClick={() => {
              setAnswers({});
              setSubmitted(false);
            }}
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  /* ================= QUIZ FORM ================= */
  return (
    <div className="quiz-page">
      <form className="quiz-card" onSubmit={handleSubmit}>
        <div className="quiz-header">
          <h1>Taylor Swift Quiz</h1>
          <p>Test how well you know Taylor Swift</p>
        </div>

        {questions.map((q) => (
          <div key={q.id} className="quiz-question">
            <p>{q.question}</p>

            {q.type === "radio" && (
              <div>
                {q.options.map((option) => (
                  <label key={option} className="quiz-option">
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value={option}
                      checked={answers[q.id] === option}
                      onChange={() => handleChange(q.id, option)}
                      required
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}

            {q.type === "select" && (
              <select
                className="quiz-select"
                value={answers[q.id] || ""}
                onChange={(e) => handleChange(q.id, e.target.value)}
                required
              >
                <option value="">-- Select answer --</option>
                {q.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}

        <button type="submit" className="quiz-button">
          Submit quiz
        </button>
      </form>
    </div>
  );
};

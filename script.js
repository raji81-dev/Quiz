
  // Questions for the quiz
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: "Paris"
    },
    {
      question: "Which programming language is used for web development?",
      options: ["Python", "JavaScript", "C++", "Java"],
      correct: "JavaScript"
    },
    {
      question: "What is 5 + 2?",
      options: ["3", "4", "5", "7"],
      correct: "7"
    }
  ];

  // Render the quiz
  const quizContainer = document.getElementById("quiz");
  let userAnswers = [];

  function renderQuiz() {
    quizContainer.innerHTML = "";
    questions.forEach((q, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.innerHTML = `
        <div class="question">${index + 1}. ${q.question}</div>
        <ul class="options">
          ${q.options
            .map(
              (option, i) => `
              <li>
                <label>
                  <input type="radio" name="q${index}" value="${option}" onchange="saveAnswer(${index}, '${option}')">
                  ${option}
                </label>
              </li>
            `
            )
            .join("")}
        </ul>
      `;
      quizContainer.appendChild(questionDiv);
    });
  }

  // Save the user's answer
  function saveAnswer(questionIndex, selectedOption) {
    userAnswers[questionIndex] = selectedOption;
  }

  // Submit the quiz and calculate the score
  function submitQuiz() {
    let score = 0;
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.correct) {
        score++;
      }
    });

    const scoreElement = document.getElementById("score");
    scoreElement.innerText = `Your score: ${score} out of ${questions.length}`;
  }

  // Initialize the quiz
  renderQuiz();
function getRandomTerm() {
    const index = Math.floor(Math.random() * techTerms.length);
    return techTerms[index];
  }
  
  function loadTerm() {
    const termData = getRandomTerm();
  
    document.getElementById("term").textContent = termData.term;
    document.getElementById("definition").textContent = termData.definition;
  
    // Quiz
    document.getElementById("question").textContent = termData.quiz.question;
    const answersList = document.getElementById("answers");
    answersList.innerHTML = "";
  
    termData.quiz.answers.forEach(answer => {
      const li = document.createElement("li");
      li.textContent = answer.text;
      li.addEventListener("click", () => {
        if (answer.correct) {
          li.style.backgroundColor = "#16a34a"; // green
        } else {
          li.style.backgroundColor = "#dc2626"; // red
        }
      });
      answersList.appendChild(li);
    });
  
    // Resource
    const link = document.getElementById("resource");
    link.href = termData.resource;
  }
  
  document.addEventListener("DOMContentLoaded", loadTerm);
  
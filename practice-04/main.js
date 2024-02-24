"use strict";

{
  function render(quiz) {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    h2.textContent = quiz[0];

    const ul = document.createElement("ul");

    section.appendChild(h2);
    section.appendChild(ul);

    for (let i = 0; i < 3; i++) {
      const li = document.createElement("li");
      li.textContent = quiz[i + 1];
      li.addEventListener("click", () => {
        if (quiz[4] === i) {
          li.classList.add("correct");
        } else {
          li.classList.add("wrong");
        }
      });
      ul.appendChild(li);
    }
    main.appendChild(section);
  }

  const quizzes = [
    ["01. Which is the answer?", "Option A", "Option B", "Option C", 0],
    ["02. Which is the answer?", "Option A", "Option B", "Option C", 1],
    ["03. Which is the answer?", "Option A", "Option B", "Option C", 2],
  ];

  quizzes.forEach((quiz) => {
    render(quiz);
  });
}

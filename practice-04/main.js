"use strict";

{
  function render(quiz) {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    h2.textContent = quiz[0];

    const ul = document.createElement("ul");

    const li0 = document.createElement('li');
    li0.textContent = quiz[1];
    li0.addEventListener('click', () => {
      if (quiz[4] === 0) {
        li0.classList.add('correct');
      } else {
        li0.classList.add('wrong');
      }
    });

    const li1 = document.createElement('li');
    li1.textContent = quiz[2];
    li1.addEventListener('click', () => {
      if (quiz[4] === 1) {
        li1.classList.add('correct');
      } else {
        li1.classList.add('wrong');
      }
    });

    const li2 = document.createElement('li');
    li2.textContent = quiz[3];
    li2.addEventListener('click', () => {
      if (quiz[4] === 2) {
        li2.classList.add('correct');
      } else {
        li2.classList.add('wrong');
      }
    });

    section.appendChild(h2);
    section.appendChild(ul);
    ul.appendChild(li0);
    ul.appendChild(li1);
    ul.appendChild(li2);
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

'use strict';

{
  const textArea = document.getElementById('text-area');
  const btnSave = document.getElementById('btn-save');
  const message = document.getElementById('message');
  const btnDelete = document.getElementById('btn-delete');
  let words = document.getElementById('words');

  if (localStorage.getItem('memo') === null) {
    textArea.value = '';
  } else {
    textArea.value = localStorage.getItem('memo');
  }

  words.textContent = `${textArea.value.length} words`;

  textArea.addEventListener('input', () => {
    words.textContent = `${textArea.value.length} words`;
  });

  btnSave.addEventListener('click', () => {
    message.classList.add('appear');

    setTimeout(() => {
      message.classList.remove('appear');
    }, 1000);

    localStorage.setItem('memo', textArea.value);
  });

  btnDelete.addEventListener('click', () => {
    if (confirm('Really?') === true) {
      textArea.value = '';
      localStorage.removeItem('memo');
      words.textContent = '0 words';
    }
  });
}
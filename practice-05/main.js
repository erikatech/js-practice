'use strict';

{
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImg = document.getElementById('main-img');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  let activeIndex = 0;

  thumbnails[0].addEventListener('click', () => {
    activeIndex = 0;
    mainImg.src = thumbnails[0].src;
    thumbnails[0].classList.add('active');
    thumbnails[1].classList.remove('active');
    thumbnails[2].classList.remove('active');
  });

  thumbnails[1].addEventListener('click', () => {
    activeIndex = 1;
    mainImg.src = thumbnails[1].src;
    thumbnails[0].classList.remove('active');
    thumbnails[1].classList.add('active');
    thumbnails[2].classList.remove('active');
  });

  thumbnails[2].addEventListener('click', () => {
    activeIndex = 2;
    mainImg.src = thumbnails[2].src;
    thumbnails[0].classList.remove('active');
    thumbnails[1].classList.remove('active');
    thumbnails[2].classList.add('active');
  });

  next.addEventListener('click', () => {
    activeIndex++;
    if(activeIndex > 2) {
      activeIndex = 0;
    }

    mainImg.src = thumbnails[activeIndex].src;
    thumbnails[0].classList.remove('active');
    thumbnails[1].classList.remove('active');
    thumbnails[2].classList.remove('active');
    thumbnails[activeIndex].classList.add('active');
  });

  prev.addEventListener('click', () => {
    activeIndex--;
    if(activeIndex < 0) {
      activeIndex = 2;
    }
    mainImg.src = thumbnails[activeIndex].src;
    thumbnails[0].classList.remove('active');
    thumbnails[1].classList.remove('active');
    thumbnails[2].classList.remove('active');
    thumbnails[activeIndex].classList.add('active');
  });

}
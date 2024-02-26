'use strict';

{
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImg = document.getElementById('main-img');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  let activeIndex = 0;

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      activeIndex = index;
      mainImg.src = thumbnails[activeIndex].src;
      thumbnails.forEach(t => t.classList.remove('active'));
      thumbnails[activeIndex].classList.add('active');
    });
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
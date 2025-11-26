window.addEventListener('scroll', function () {
   const text_graphic = document.querySelector('.h1_graphic');
   const scrollY = window.scrollY;
   text_graphic.style.transform = `translateX(calc(35% - ${scrollY * 1.5}px))`;
});

window.addEventListener('scroll', function () {
   const text_art = document.querySelector('.h1_art');
   const scrollY = window.scrollY;
   text_art.style.transform = `translateX(calc(-35% + ${scrollY * 1.5}px))`;
});

window.addEventListener('scroll', function () {
   const showcase_art = document.querySelector('.showcase_art');
   const scrollY = window.scrollY;
   showcase_art.style.transform = `translateX(calc(0% + ${scrollY * 0.1}px))`;
});

window.addEventListener('scroll', function () {
   const showcase_graphic = document.querySelector('.showcase_graphic');
   const scrollY = window.scrollY;
   showcase_graphic.style.transform = `translateX(calc(0% - ${scrollY * 0.1}px))`;
});
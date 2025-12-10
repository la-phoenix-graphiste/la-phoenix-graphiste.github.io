window.addEventListener('scroll', function () {
   const text_graphic = document.querySelector('.h1_graphic');
   const scrollY = window.scrollY;
   text_graphic.style.transform = `translateX(calc(0% - ${scrollY * 3}px))`;
});

window.addEventListener('scroll', function () {
   const text_art = document.querySelector('.h1_art');
   const scrollY = window.scrollY;
   text_art.style.transform = `translateX(calc(-0% + ${scrollY * 3}px))`;
});

/*
window.addEventListener('scroll', function () {
   const showcase_art = document.querySelector('.showcase_art');
   const scrollY = window.scrollY;
   showcase_art.style.transform = `translateX(calc(200px - ${scrollY * 0.2}px))`;
});

window.addEventListener('scroll', function () {
   const showcase_graphic = document.querySelector('.showcase_graphic');
   const scrollY = window.scrollY;
   showcase_graphic.style.transform = `translateX(calc(-400px + ${scrollY * 0.2}px))`;
});
*/

/*
window.addEventListener('scroll', function () {
   const blur_h2 = document.querySelector('.and');
   const scrollY = window.scrollY;
   blur_h2.style.filter = `blur(calc(${scrollY * 0.05}px))`;
});
*/

window.addEventListener('scroll', function () {
   const blur_h2 = document.querySelector('.and');
   const scrollY = window.scrollY;
   blur_h2.style.filter = `blur(calc(${scrollY * 0.05}px))`;
});
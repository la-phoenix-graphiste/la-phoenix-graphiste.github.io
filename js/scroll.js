window.addEventListener('scroll', function () {
   const headline = document.querySelector('.h1_graphic');
   const scrollY = window.scrollY;
   headline.style.transform = `translateX(calc(35% - ${scrollY * 1.5}px))`;
});

window.addEventListener('scroll', function () {
   const headline = document.querySelector('.h1_art');
   const scrollY = window.scrollY;
   headline.style.transform = `translateX(calc(-35% + ${scrollY * 1.5}px))`;
});

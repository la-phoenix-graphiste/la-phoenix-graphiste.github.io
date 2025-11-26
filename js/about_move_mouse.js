/*document.addEventListener('mousemove', function (event) {
   const text = document.querySelector('.about_text');
   const mouseX = document.event.clientX;
   text.style.transform = `translateX(calc(35% - ${mouseX* 1.5}px))`;
});
*/

/*document.addEventListener('mousemove', function(event) {
    console.log('Mouse X:', event.clientX, 'Mouse Y:', event.clientY);
});

*/

const position = document.getElementById('text_move')

 document.addEventListener('mousemove', function(event) {
            const x = (event.clientX - (window.innerWidth * 0.5));
            const y = event.clientY - (window.innerHeight * 0.5);
            position.style.transform = `translateX(calc(${x*0.05}px)) translateY(calc(${y*0.05}px))`;
         
});
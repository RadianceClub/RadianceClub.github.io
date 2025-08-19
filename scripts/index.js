let mainscreenPadding = document.querySelector('.mainscreen-padding');
let mainscreen = document.querySelector('.mainscreen');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const screenHeight = window.innerHeight;
    mainscreenPadding.style.height = scrollY / screenHeight * 75 + '%';
    mainscreen.style.opacity = 1 - (scrollY / screenHeight);
});
document.addEventListener('DOMContentLoaded', function () {
    // height 100vh fix for IOS
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // height header
    const header = document.querySelector('.header')
    let headerh = header ? header.getBoundingClientRect().height : 0;

    document.documentElement.style.setProperty('--headerh', `${headerh}px`);
    
    // resize
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        let headerh = header ? header.getBoundingClientRect().height : 0;
        
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        document.documentElement.style.setProperty('--headerh', `${headerh}px`);
    });
})
    
// menu move
function menuMove(){
    const menuMob = document.querySelector('.menu-mob');
    menuMob.classList.contains('active') ? menuMob.classList.remove('active') : menuMob.classList.add('active')
}
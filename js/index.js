window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window_scroll', window.scrollY > 0)
});

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window_scroll_nav_bar_menu', window.scrollY > 0)
});
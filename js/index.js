let menu = document.querySelector('#menu-bars');
let nav = document.querySelector('.nav-links');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    nav.classList.remove('active');
}

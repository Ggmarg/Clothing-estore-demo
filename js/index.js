let menu = document.querySelector('#menu-bars');
let nav = document.querySelector('.nav-links');
let search = document.querySelector('#search');
let faSearch = document.querySelector(".fa-search")
let products = document.querySelectorAll('.list');
let h = document.querySelectorAll('h2');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    nav.classList.remove('active');
}

faSearch.onclick = () =>{
    if(search.value == null){
        products.display = 'initial';
    }
    products.forEach(product => product.style.display = 'none');
    h.forEach(h2 => h2.style.display = 'none');
    let value = search.value;
    products.forEach(product =>{
        let title = product.getAttribute('data-title');
        if(value == title){
            product.style.display = 'grid';
        }
    })
    h.forEach(h2 =>{
        let title = h2.getAttribute('data-title');
        if(value == title){
            h2.style.display = 'block';
        }
    });
}

search.addEventListener("keyup", () =>{
    if (KeyboardEvent.code === "Enter") {
        faSearch.click();
    }
  });
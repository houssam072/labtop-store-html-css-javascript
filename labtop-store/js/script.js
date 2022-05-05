let searchForm = document.querySelector('.search-form');
document.querySelector("#search-btn").onclick = () =>{
    searchForm.classList.toggle('active');
}

let navBar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.toggle('active');
}
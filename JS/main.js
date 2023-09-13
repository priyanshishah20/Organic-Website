let nav = document.querySelector('.navbar');
console.log("ready");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 150){
        nav.classList.add('header-scrolled');
    }
    else{
        nav.classList.remove('header-scrolled');
    }
}

// Nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(e){
    e.addEventListener("click", function(){
        navCollapse.classList.remove('show');
    })
})
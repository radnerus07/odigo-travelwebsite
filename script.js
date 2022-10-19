let button = document.querySelector(".ham-button"),
    links = document.querySelector(".navigation");
    // rotate = document.querySelector(".menu-button")

    button.addEventListener("click", () => {
        links.classList.toggle("display");
        // rotate.classList.toggle("toggle-button");
    })
   
  function changeBg(){
    var navbar = document.getElementById('nav');
    var scrollValue = window.scrollY;
    if(scrollValue < 100){
        navbar.classList.remove('bgcolor');
    } else{
        navbar.classList.add('bgcolor');
    }
  }

  window.addEventListener('scroll', changeBg);
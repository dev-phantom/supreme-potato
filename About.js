 const menuBtn = document.querySelector('.menu_btn');
const hamburger = document.querySelector('.menu_btn_buger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu_nav');
const navItems= document.querySelectorAll('.menu_nav_item');
 var indexValue = 0;
 
 
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));
    
    showMenu = true;
  }
  else{
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.add('open'));
    
    showMenu=false;
  }
}
      function slideShow(){
        setTimeout(slideShow, 2500);
        var x;
        const img = document.querySelectorAll("img");
        for(x = 0; x < img.length; x++){
          img[x].style.display = "none";
        }
        indexValue++;
        if(indexValue > img.length){indexValue = 1}
        img[indexValue -1].style.display = "block";
      }
      slideShow();
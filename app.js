const mobileBtn = document.querySelector('.mobile-btn');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-action');
const menuID = document.querySelector('#menu-id');
const burgerBtn = document.querySelector('.burger-tap');
const overlay = document.querySelector('.overlay');




mobileBtn.addEventListener('click', function(){
  menu.className -= 'display-hidden';
  menu.className += ' style-up-menu';
  menu.className += ' open menu';
  burgerBtn.className += ' display-hidden';

  overlay.className += ' overlay-style';

});



closeBtn.addEventListener('click', function(){
    menu.className = 'menu';
    menu.className += ' display-hidden';
    burgerBtn.className -= ' display-hidden style-up-menu';
    overlay.classList.remove('overlay-style');


});


window.addEventListener('click', function(event){
  if(event.target === overlay){
    menu.className = 'menu';
    menu.className += ' display-hidden';
    burgerBtn.className -= ' display-hidden style-up-menu';
    overlay.classList.remove('overlay-style');

  }
});



/* <!---------SIGN IN POP UP!----------------->
<!-----------------------------------------> */
const signinBtn = document.querySelector('#signin-btn').addEventListener('click', function(e){
  let signinWrapper = document.querySelector('.sign-wrapper');
  
  console.log('clicked');
  signinWrapper.classList.remove("sign-wrapper");
  signinWrapper.classList.add("displayShow");

  e.preventDefault();
});

// <!---------Submit Sign IN Information-------------> */
const form = document.querySelector('.form-signin').addEventListener('submit', submitClick);
const input = document.querySelector('.form-control');




function submitClick(e){
  console.log(input.value);
  document.getElementById('signin-btn').remove();
  let displayShow = document.querySelector('.displayShow');


  displayShow.removeAttribute("display")
  // displayShow.style.display='none';
  // signinWrapper.classList.remove("displayShow");
  // signinWrapper.classList.add("sign-wrapper");
  e.preventDefault();
};










// <!---------Responsive Nav-------------> */
var nav = responsiveNav(".nav-collapse");
const menuIcon = document.getElementById('menu-icon');
const main = document.querySelector('main');
const header = document.querySelector('header');
const btnClose = document.getElementById('btn-close');
const navBar = document.querySelector('nav');
const body = document.querySelector('body');

menuIcon.addEventListener('click', () => {
  main.style.display = 'none';
  body.style.overflowY = 'hidden';

  navBar.style.display = 'flex';
  header.style.height = '100vh';
  header.style.backgroundImage = "url('../image/mob-bac.png')";
});

function displayMain() {
  main.style.display = 'block';
  body.style.overflowY = 'visible';

  navBar.style.display = 'none';
  header.style.height = '0';
  window.location.reload();
}

btnClose.addEventListener('click', displayMain);

const menuList = document.querySelectorAll('.nav-menu li');
menuList.forEach((list) => {
  list.addEventListener('click', displayMain);
});

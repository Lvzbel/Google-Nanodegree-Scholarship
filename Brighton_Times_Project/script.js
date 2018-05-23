const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".nav")

burger.addEventListener('click', function () {
  menu.classList.toggle('open-nav');
  console.log('Hi')
});


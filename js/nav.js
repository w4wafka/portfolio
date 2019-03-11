var btn1 = document.querySelector('.header__button');
var list = document.querySelector('.header__container');

btn1.addEventListener('click', function(event) {
  if (list.classList.contains('menu--opened')) {
      list.classList.remove('menu--opened');
      list.classList.add('menu--closed');
  } else {
    list.classList.remove('menu--closed');
    list.classList.add('menu--opened');
  }
})

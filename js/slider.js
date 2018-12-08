window.onscroll = function() {
    var scrolled = window.pageYOffset;
    console.log( 'sosat: '+scrolled  );
};

var btn = document.querySelector('.body__button');

window.onscroll = biba;

function biba() {
  if (window.pageYOffset > 80) {
    btn.classList.remove('body__item--closing')
    btn.classList.add('body__item--opening');
  } else {
    btn.classList.remove('body__item--opening')
    btn.classList.add('body__item--closing');
  }
}

btn.onclick = function () {
	window.scrollTo(0,0);
};

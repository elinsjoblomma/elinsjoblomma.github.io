var header = document.getElementsByClassName('container')[0];

var parallax = function () {
  var scroll = window.scrollY;
  var offset = scroll * 0.30;
  header.style.backgroundPositionY =  offset + 'px';
  window.requestAnimationFrame(parallax);
}

parallax();


var current_class = "bi-dice-3-fill";

const navbar_items = document.querySelector('.adiv');
const mainele = document.querySelector('main');
const icon = document.querySelector('#icon > img');

function generate() {
  var pass = "";
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{};':|,./?`~";
  var btnicon = document.getElementById("genbutton");
  for (var i = 0; i < 16; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length + 1));
  }
  document.querySelector("code").innerHTML = pass;
  btnicon.classList.remove(current_class);
  current_class = "bi-dice-" + (Math.floor(Math.random() * 6) + 1) + "-fill";
  btnicon.classList.add(current_class);
  console.log(current_class);
}

function toggleNavbarColor() {
  const rect = mainele.getBoundingClientRect();
  const isInView = rect.top <= 0 && rect.bottom >= 0;
  if (isInView) {
    navbar_items.classList.add('invert');
    icon.style.filter = 'invert(0)';
  } else {
    navbar_items.classList.remove('invert');
    icon.style.filter = 'invert(1)';
  }
}
window.addEventListener('scroll', toggleNavbarColor);
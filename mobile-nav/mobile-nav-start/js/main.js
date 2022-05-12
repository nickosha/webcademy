const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a')

navIcon.addEventListener('click', function () {
  this.classList.toggle('nav-icon--active');
  nav.classList.toggle('nav-mobile');
})

navLinks.forEach(function(item) {
  item.addEventListener('click', function() {
    navIcon.classList.remove('nav-icon--active');
    nav.classList.remove('nav-mobile');
  });
})
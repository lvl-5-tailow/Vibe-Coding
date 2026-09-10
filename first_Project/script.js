// Navigation link handlers
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function (navLink) {
  navLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.open('about:blank', '_self');
  });
});

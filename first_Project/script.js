// Navigation button handlers
document.querySelectorAll('.nav-btn').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    window.open('about:blank', '_self');
  });
});

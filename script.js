document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.time').forEach(function(el) {
    el.addEventListener('click', function() {
      el.classList.toggle('active');
    });
  });
});
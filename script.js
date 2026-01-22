document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.time').forEach(function(el) {
    el.addEventListener('click', function() {
      el.classList.toggle('active');
    });
  });
});

document.getElementById("burger").addEventListener('click', () => {
    document.querySelector(".burger").classList.toggle("active");
    const navLinks = document.getElementById("nav-links");
    if (navLinks.style.height === "100%") {
        navLinks.style.height = "0%";
    } else {
        navLinks.style.height = "100%";
    }
});


const reveals = document.querySelectorAll(".reveal");

function revealOnLoadAndScroll() {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      section.classList.add("active");
    }
  });
}

// Run on page load
window.addEventListener("load", revealOnLoadAndScroll);

// Run on scroll
window.addEventListener("scroll", revealOnLoadAndScroll);

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(section => {
    section.classList.add("active");
  });

  window.addEventListener("scroll", () => {
    reveals.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight - 50) {
        section.classList.add("active");
      }
    });
  });
});

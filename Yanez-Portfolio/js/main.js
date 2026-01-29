const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
const navLinks = document.querySelectorAll("#mainNav a");
const sections = document.querySelectorAll(".section");
const backToTop = document.getElementById("backToTop");

/* TOGGLE MOBILE NAV */
navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("show");
});

/* CLOSE MOBILE NAV */
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("show");
  });
});

/* SCROLL EVENTS */
window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const top = section.offsetTop - 120;
    const bottom = top + section.offsetHeight;

    if (window.scrollY >= top && window.scrollY < bottom) {
      currentSection = section.id;
      section.classList.add("active-section");
    } else {
      section.classList.remove("active-section");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });

  /* Show button near bottom only */
  backToTop.style.display =
    window.scrollY > document.body.scrollHeight - window.innerHeight - 200
      ? "flex"
      : "none";
});

/* BACK TO TOP */
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

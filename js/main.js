/* ======================
   GALLERY FILTER
====================== */

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // active state
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    galleryItems.forEach((item) => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});


/* ======================
   HAMBURGER MENU (MOBILE)
====================== */

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Guard clause (prevents errors if element not found)
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu when a link is clicked (mobile UX)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

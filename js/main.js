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
/* ======================
   WHATSAPP QUERY FORM
====================== */

const waForm = document.getElementById("whatsappForm");

if (waForm) {
  waForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("waName").value.trim();
    const message = document.getElementById("waMessage").value.trim();

    const phoneNumber = "919560628000"; // PG WhatsApp number
    const text = `Hello, my name is ${name}. I have a query:\n\n${message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
  });
}

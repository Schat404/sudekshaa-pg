// Services card stagger animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll(".service-card").forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.08}s`;
  observer.observe(card);
});

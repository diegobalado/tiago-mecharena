// Scroll indicator
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  document.getElementById("scrollIndicator").style.width = progress + "%";
});

// Animate fill bars on scroll
const fillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll(
          ".progress-fill, .skill-fill",
        );
        fills.forEach((fill) => {
          fill.style.width = fill.dataset.width + "%";
        });
      }
    });
  },
  { threshold: 0.3 },
);

document
  .querySelectorAll(".progress-section, .profile-skills")
  .forEach((el) => {
    fillObserver.observe(el);
  });

// Scroll to anchored section after view transition
window.addEventListener("pagereveal", () => {
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) target.scrollIntoView();
  }
});

// Card tilt effect
document.querySelectorAll(".mech-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "perspective(1000px) translateY(-10px)";
  });

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 8;
    const rotateY = (centerX - x) / 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

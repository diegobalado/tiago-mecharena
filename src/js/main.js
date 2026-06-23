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

// Filters
const filterRole = document.getElementById("filterRole");
const filterClass = document.getElementById("filterClass");
const filterLevel = document.getElementById("filterLevel");
const mechLinks = document.querySelectorAll(".mech-card-link");

function populateFilters() {
  const roles = new Set();
  const classes = new Set();
  const levels = new Set();

  mechLinks.forEach((link) => {
    roles.add(link.dataset.role);
    classes.add(link.dataset.class);
    levels.add(link.dataset.level);
  });

  ["Atacante", "Explorador", "Tanque", "Apoyo"].forEach((role) => {
    const opt = document.createElement("option");
    opt.value = role;
    opt.textContent = role;
    filterRole.appendChild(opt);
  });

  const classOrder = ["grey", "green", "blue", "purple", "gold"];
  const classLabels = {
    grey: "Normal",
    green: "Infrecuente",
    blue: "Raro",
    purple: "Épico",
    gold: "Legendario",
  };

  classOrder.forEach((cls) => {
    if (classes.has(cls)) {
      const opt = document.createElement("option");
      opt.value = cls;
      opt.textContent = classLabels[cls];
      filterClass.appendChild(opt);
    }
  });

  [1, 2, 3, 4, 5, 6, 8, 9, 10].forEach((lvl) => {
    const opt = document.createElement("option");
    opt.value = lvl;
    opt.textContent = lvl;
    filterLevel.appendChild(opt);
  });
}

function applyFilters() {
  const role = filterRole.value;
  const cls = filterClass.value;
  const level = filterLevel.value;

  mechLinks.forEach((link) => {
    const matchRole = role === "all" || link.dataset.role.toLowerCase().includes(role.toLowerCase());
    const matchClass = cls === "all" || link.dataset.class === cls;
    const matchLevel = level === "all" || link.dataset.level === level;

    link.style.display = matchRole && matchClass && matchLevel ? "" : "none";
  });
}

if (filterRole) {
  populateFilters();
  filterRole.addEventListener("change", applyFilters);
  filterClass.addEventListener("change", applyFilters);
  filterLevel.addEventListener("change", applyFilters);
}

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

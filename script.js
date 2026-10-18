// ====== SETUP: put your WhatsApp number here (country code + number, no + or spaces) ======
const WHATSAPP_NUMBER = "918292160777"; // Tarang Digital business WhatsApp
const WA_MESSAGE = encodeURIComponent("Hi Tarang Digital! I want a website for my business. Please share details.");
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MESSAGE}`;

document.getElementById("wa-btn").href = WA_LINK;
document.getElementById("wa-float").href = WA_LINK;

// mobile nav
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => links.classList.toggle("open"));
links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));

// scroll reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".card, .work-card, .step, .plan, .stat").forEach(el => {
  el.classList.add("reveal");
  io.observe(el);
});

// nav shadow on scroll
const nav = document.getElementById("nav");
addEventListener("scroll", () => {
  nav.style.boxShadow = scrollY > 20 ? "0 6px 24px rgba(0,0,0,.4)" : "none";
});

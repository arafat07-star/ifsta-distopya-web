// "Keşfet" butonuna basınca dünyaya kaydır
const exploreBtn = document.getElementById("explore-btn");
const worldSection = document.getElementById("world");

if (exploreBtn && worldSection) {
  exploreBtn.addEventListener("click", () => {
    worldSection.scrollIntoView({ behavior: "smooth" });
  });
}

// Menüdeki linkler için smooth scroll
document.querySelectorAll('header nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Sözlük arama
const searchInput = document.getElementById("search-input");
const terms = document.querySelectorAll(".term");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const q = searchInput.value.toLowerCase();
    terms.forEach((term) => {
      const text =
        term.dataset.term.toLowerCase() +
        " " +
        term.innerText.toLowerCase();
      term.style.display = text.includes(q) ? "block" : "none";
    });
  });
}

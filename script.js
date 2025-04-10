// script.js
let currentLang = "ar";

document.getElementById("toggleLang").addEventListener("click", () => {
  if (currentLang === "ar") {
    currentLang = "en";
    document.getElementById("flag").textContent = "🇬🇧";
    document.getElementById("langLabel").textContent = "English";
  } else {
    currentLang = "ar";
    document.getElementById("flag").textContent = "🇸🇦";
    document.getElementById("langLabel").textContent = "العربية";
  }
});

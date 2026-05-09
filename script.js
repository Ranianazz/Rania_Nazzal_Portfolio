// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu (expandable for multi-page)
  const mobileBtn = document.getElementById("mobileMenuBtn");

  mobileBtn.addEventListener("click", () => {
    alert(
      "Mobile menu would open here in a full implementation.\n\nFor this demo, consider using a framework like Tailwind + Alpine.js or React for production.",
    );
  });

  // Smooth scroll for scroll indicator
  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", () => {
      document.querySelector(".featured").scrollIntoView({
        behavior: "smooth",
      });
    });
  }

  // Navbar active state (basic)
  const links = document.querySelectorAll(".nav-links a");
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  links.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });

  console.log(
    "%cElena Voss Portfolio ready ✨",
    "color:#e11d48; font-size:14px;",
  );
});

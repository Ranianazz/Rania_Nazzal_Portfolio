document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu panel logic
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const mobilePanel = document.getElementById("mobilePanel");
  const overlayBlur = document.getElementById("overlayBlur");
  const closeMobileBtn = document.getElementById("closeMobileBtn");

  function openMenu() {
    if (mobilePanel) mobilePanel.style.right = "0";
    if (overlayBlur) overlayBlur.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    if (mobilePanel) mobilePanel.style.right = "-100%";
    if (overlayBlur) overlayBlur.style.display = "none";
    document.body.style.overflow = "";
  }

  if (mobileBtn) mobileBtn.addEventListener("click", openMenu);
  if (closeMobileBtn) closeMobileBtn.addEventListener("click", closeMenu);
  if (overlayBlur) overlayBlur.addEventListener("click", closeMenu);

  // Close menu on link click (mobile)
  const mobileLinks = document.querySelectorAll(".mobile-nav-panel a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Smooth scroll for scroll indicator
  const scrollIndicator = document.getElementById("scrollIndicator");
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", () => {
      const featuredSection = document.querySelector(".featured");
      if (featuredSection) {
        featuredSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  // Ensure all videos autoplay (muted required)
  const allVideos = document.querySelectorAll("video");
  allVideos.forEach((video) => {
    video.play().catch((e) => console.log("Autoplay prevented:", e));
  });

  // Active navigation highlight based on current page
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(
    ".nav-links a, .mobile-nav-panel a",
  );

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (
      href === currentPath ||
      (currentPath === "index.html" && href === "#")
    ) {
      link.classList.add("active");
    } else if (href === "#" && currentPath === "index.html") {
      link.classList.add("active");
    }
  });

  // Add hover effect for stat cards
  const stats = document.querySelectorAll(".stat");
  stats.forEach((stat) => {
    stat.addEventListener("mouseenter", () => {
      stat.style.transform = "translateY(-5px)";
      stat.style.transition = "all 0.3s ease";
    });
    stat.addEventListener("mouseleave", () => {
      stat.style.transform = "translateY(0)";
    });
  });

  
// Force mute on all video iframes
document.querySelectorAll('.card-video').forEach(iframe => {
  iframe.addEventListener('load', () => {
    try {
      iframe.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
    } catch(e) {}
  });
});

// Optional: Reset iframe when mouse leaves (prevents sound leak)
document.querySelectorAll('.video-card').forEach(card => {
  card.addEventListener('mouseleave', () => {
    const iframe = card.querySelector('.card-video');
    if (iframe) {
      const src = iframe.src;
      iframe.src = src; // Force reload to reset player state
    }
  });
});


  // Console guide for easy customization
  console.log(
    "%c✨ RANIA NAZZAL PORTFOLIO — QUICK CUSTOMIZATION GUIDE ✨",
    "color: #e11d48; font-size: 14px; font-weight: bold;",
  );
  console.log(
    "%c📌 HERO VIDEO: Replace src in .hero-video-bg video source tag",
    "color: #86efac",
  );
  console.log(
    "%c🎬 FEATURED VIDEO CARD: Replace src in .card-video source tag (2nd project card)",
    "color: #facc15",
  );
  console.log(
    "%c🖼️ FEATURED IMAGES: Replace src in .card-image img tags (1st and 3rd cards)",
    "color: #60a5fa",
  );
  console.log(
    "%c✏️ TEXT CONTENT: Edit hero-title, project titles, descriptions, about section",
    "color: #f472b6",
  );
  console.log(
    "%c📁 SOCIAL LINKS & EMAIL: Update footer section with your links",
    "color: #a78bfa",
  );
  console.log(
    "%c📊 STATISTICS: Update numbers in .about-stats section",
    "color: #34d399",
  );
});

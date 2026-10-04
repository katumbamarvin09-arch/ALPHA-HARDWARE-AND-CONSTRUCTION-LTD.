/*
================================================================================
  APEX HARDWARE & CONSTRUCTION SUPPLIES - MAIN JAVASCRIPT ENGINE
  FILE: js/main.js
================================================================================
  HOW TO USE THIS SCRIPT:
  This script powers the core global features across every page of your website:
  - Central Business Configuration (Company name, phone, WhatsApp, socials)
  - Dark / Light Mode Theme Switcher with LocalStorage persistence
  - Sticky Navigation Bar scroll effects
  - Mobile Hamburger Menu drawer
  - Animated Number Counters (Statistics)
  - Floating WhatsApp Chat Launcher with prefilled message
  - Floating Back-to-Top Button
  - Branded Page Preloader
================================================================================
*/

/*
================================================================================
  BUSINESS CONFIGURATION
  CHANGE YOUR COMPANY INFORMATION HERE!
  Replace the placeholders below with your actual business details.
================================================================================
*/
const BUSINESS_CONFIG = {
  // Company identity: Replace with your registered business name
  companyName: "Alpha Hardware and construction Ltd.",

  // Slogan: Appears in headers, loaders, and hero sections
  companySlogan: "Building Quality. Built to Last.",

  // Phone number: Main office voice call line
  phone: "+256 752 228 866",

  // WhatsApp number: Include international country code WITHOUT plus or spaces
  // Example for US: "18005550199" or UK: "447123456789"
  whatsappNumber: "256752228866",

  // Company email address for quotes and enquiries
  email: "alphaharware@gmail.com",

  // Physical warehouse / store address
  address: "Nankonge-Nsagu",

  // Store opening hours
  openingHours: "Mon - Sun: 7:00 AM - 6:00 PM",

  // ONLY 3 ALLOWED SOCIAL MEDIA PLATFORMS (WhatsApp, Facebook, TikTok)
  facebookUrl: "https://facebook.com/apexhardwaresupplies",
  tiktokUrl: "https://tiktok.com/@apexhardware"
};

// Global reference for other scripts
window.BUSINESS_CONFIG = BUSINESS_CONFIG;

/*
================================================================================
  1. DOM CONTENT LOADED INITIALIZER
================================================================================
*/
document.addEventListener("DOMContentLoaded", () => {
  initPageLoader();
  initThemeSystem();
  initStickyHeader();
  initMobileNavigation();
  initWhatsAppButton();
  initBackToTop();
  initAnimatedCounters();
  populateCompanyPlaceholders();
});

/*
================================================================================
  2. PAGE PRELOADER CONTROLLER
  Dismisses the loading screen after the page finishes initial rendering.
================================================================================
*/
function initPageLoader() {
  const loader = document.getElementById("page-loader");
  if (!loader) return;

  // Smoothly fade out the loader after 200ms
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 200);
  });

  // Safety fallback: Hide loader after 1.5 seconds regardless of slow assets
  setTimeout(() => {
    if (loader) loader.classList.add("hidden");
  }, 1500);
}

/*
================================================================================
  3. LIGHT & DARK MODE THEME SWITCHER
  Saves the user's preferred theme in browser localStorage.
================================================================================
*/
function initThemeSystem() {
  const themeToggleBtns = document.querySelectorAll(".theme-toggle-btn");
  const storedTheme = localStorage.getItem("apex_theme") || "light";

  // Apply stored theme on initial load
  document.documentElement.setAttribute("data-theme", storedTheme);
  updateThemeIcon(storedTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("apex_theme", newTheme);
      updateThemeIcon(newTheme);
    });
  });
}

function updateThemeIcon(theme) {
  const themeIcons = document.querySelectorAll(".theme-icon");
  themeIcons.forEach(icon => {
    if (theme === "dark") {
      // Sun icon (click to switch to light)
      icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
      icon.setAttribute("aria-label", "Switch to Light Mode");
    } else {
      // Moon icon (click to switch to dark)
      icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
      icon.setAttribute("aria-label", "Switch to Dark Mode");
    }
  });
}

/*
================================================================================
  4. STICKY HEADER SCROLL EFFECT
  Adds a subtle shadow and compact padding when scrolling down.
================================================================================
*/
function initStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });
}

/*
================================================================================
  5. MOBILE NAVIGATION HAMBURGER MENU
  Opens and closes the off-canvas drawer on mobile devices.
================================================================================
*/
function initMobileNavigation() {
  const toggleBtn = document.querySelector(".menu-toggle");
  const drawer = document.querySelector(".mobile-drawer");

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = drawer.classList.contains("open");
    if (isOpen) {
      drawer.classList.remove("open");
      toggleBtn.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", "false");
    } else {
      drawer.classList.add("open");
      toggleBtn.classList.add("active");
      toggleBtn.setAttribute("aria-expanded", "true");
    }
  });

  // Close drawer if clicking outside
  document.addEventListener("click", (e) => {
    if (drawer.classList.contains("open") && !drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      drawer.classList.remove("open");
      toggleBtn.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Close drawer with Escape key for keyboard accessibility
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      drawer.classList.remove("open");
      toggleBtn.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  });
}

/*
================================================================================
  6. WHATSAPP INTEGRATION & FLOATING LAUNCHER
  Builds the click-to-chat WhatsApp link with custom encoded prefilled message.
================================================================================
*/
function initWhatsAppButton() {
  const floatingBtn = document.querySelector(".floating-whatsapp-btn");
  const defaultMessage = encodeURIComponent(
    `Hello ${BUSINESS_CONFIG.companyName}, I am visiting your website and interested in your hardware and construction supplies. Please provide more information.`
  );

  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${defaultMessage}`;

  if (floatingBtn) {
    floatingBtn.href = whatsappUrl;
    floatingBtn.target = "_blank";
    floatingBtn.rel = "noopener noreferrer";

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (typeof navigator.vibrate === "function" && !motionPreference.matches) {
      floatingBtn.addEventListener("click", () => navigator.vibrate(40));
    }
  }

  // Also bind any buttons with class .btn-whatsapp-chat
  const chatButtons = document.querySelectorAll(".btn-whatsapp-chat");
  chatButtons.forEach(btn => {
    btn.href = whatsappUrl;
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";
  });
}

/**
 * Helper to generate specific WhatsApp enquiry links for individual products or services
 * Used by products.js and showcase.js
 */
function getProductWhatsAppUrl(productName, productCode, price) {
  const text = encodeURIComponent(
    `Hello ${BUSINESS_CONFIG.companyName}, I would like to enquire about or request a quote for:\n\n• Product: ${productName}\n• Code: ${productCode || 'N/A'}\n• Price: ${price || 'Request Price'}\n\nPlease confirm availability and delivery timeframe.`
  );
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${text}`;
}
window.getProductWhatsAppUrl = getProductWhatsAppUrl;

/*
================================================================================
  7. BACK TO TOP FLOATING BUTTON
  Shows after scrolling down 300px and smoothly scrolls back to the top.
================================================================================
*/
function initBackToTop() {
  const backToTopBtn = document.querySelector(".back-to-top-btn");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  }, { passive: true });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/*
================================================================================
  8. ANIMATED NUMBER COUNTERS (STATISTICS)
  Animates statistics numbers when they scroll into view.
================================================================================
*/
function initAnimatedCounters() {
  const statNumbers = document.querySelectorAll(".stat-number");
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateValue(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  statNumbers.forEach(stat => observer.observe(stat));

  function animateValue(element) {
    const rawTarget = element.getAttribute("data-target") || "0";
    const target = parseInt(rawTarget.replace(/\D/g, ""), 10);
    const suffix = rawTarget.replace(/\d/g, ""); // e.g. "+" or "%"
    const duration = 1800; // Animation duration in milliseconds
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out cubic
      const current = Math.round(target * (1 - Math.pow(1 - progress, 3)));
      element.textContent = current + suffix;

      if (frame >= totalFrames) {
        element.textContent = target + suffix;
        clearInterval(counter);
      }
    }, frameRate);
  }
}

/*
================================================================================
  9. AUTO POPULATE COMPANY PLACEHOLDERS
  Dynamically injects business configuration values into text placeholders.
================================================================================
*/
function populateCompanyPlaceholders() {
  // Replace [COMPANY NAME] tags
  document.querySelectorAll(".company-name-text").forEach(el => {
    el.textContent = BUSINESS_CONFIG.companyName;
  });

  // Replace [COMPANY PHONE NUMBER] tags
  document.querySelectorAll(".company-phone-text").forEach(el => {
    el.textContent = BUSINESS_CONFIG.phone;
    if (el.tagName === "A") el.href = `tel:${BUSINESS_CONFIG.phone.replace(/[^0-9+]/g, "")}`;
  });

  // Replace [COMPANY EMAIL] tags
  document.querySelectorAll(".company-email-text").forEach(el => {
    el.textContent = BUSINESS_CONFIG.email;
    if (el.tagName === "A") el.href = `mailto:${BUSINESS_CONFIG.email}`;
  });

  // Replace [COMPANY ADDRESS] tags
  document.querySelectorAll(".company-address-text").forEach(el => {
    el.textContent = BUSINESS_CONFIG.address;
  });

  // Replace [OPENING HOURS] tags
  document.querySelectorAll(".company-hours-text").forEach(el => {
    el.textContent = BUSINESS_CONFIG.openingHours;
  });

  // Replace [FACEBOOK URL]
  document.querySelectorAll(".company-facebook-link").forEach(el => {
    el.href = BUSINESS_CONFIG.facebookUrl;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });

  // Replace [TIKTOK URL]
  document.querySelectorAll(".company-tiktok-link").forEach(el => {
    el.href = BUSINESS_CONFIG.tiktokUrl;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });

  // Auto set current year in copyright
  const yearEl = document.querySelector(".current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

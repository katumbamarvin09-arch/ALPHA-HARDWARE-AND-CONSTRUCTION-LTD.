/*
================================================================================
  APEX HARDWARE & CONSTRUCTION SUPPLIES - CONTACT & QUOTE FORM ENGINE
  FILE: js/contact.js
================================================================================
  IMPORTANT NOTE FOR BEGINNERS:
  This website is a 100% static frontend application without a server/database.
  Therefore, this form validates customer inputs on the client side and provides
  instant visual feedback. When submitted, you can either:
  1. Have it open WhatsApp with the entire quote pre-filled (working immediately!)
  2. Connect it to your preferred backend, PHP mailer, or service like Formspree / EmailJS.
================================================================================
*/

document.addEventListener("DOMContentLoaded", () => {
  initContactForm();
  prefillFromUrl();
});

/**
 * Checks URL parameters (e.g. contact.html?product=Rotary%20Hammer)
 * and auto-selects the product or pre-fills the message box.
 */
function prefillFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const productName = urlParams.get("product");
  const pkg = urlParams.get("package");

  const productSelect = document.getElementById("quote-product-select");
  const messageInput = document.getElementById("quote-message");

  if (productName && messageInput) {
    let msg = `I am requesting a formal price quotation and delivery estimate for: ${productName}`;
    if (pkg) msg += ` (Selected Package/Option: ${pkg})`;
    messageInput.value = msg;
  }
}

/**
 * Form Validation and Submission Handler
 */
function initContactForm() {
  const form = document.getElementById("quote-contact-form");
  const toast = document.getElementById("form-toast-message");
  const whatsappSendBtn = document.getElementById("send-quote-whatsapp-btn");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // 1. Gather form field values
    const name = document.getElementById("quote-name")?.value.trim() || "";
    const phone = document.getElementById("quote-phone")?.value.trim() || "";
    const email = document.getElementById("quote-email")?.value.trim() || "";
    const service = document.getElementById("quote-service-select")?.value || "";
    const quantity = document.getElementById("quote-quantity")?.value.trim() || "";
    const message = document.getElementById("quote-message")?.value.trim() || "";

    // 2. Validate inputs
    const validationError = validateFormInputs(name, phone, email, message);

    if (validationError) {
      showToast(validationError, "error");
      return;
    }

    // 3. Success state
    showToast(
      `Thank you, ${name}! Your quotation request has been received. Our sales desk will contact you at ${phone} or ${email} shortly.`,
      "success"
    );

    // Optional: Reset form fields after 4 seconds
    setTimeout(() => {
      form.reset();
    }, 4000);
  });

  // Handler for direct "Send Quote to WhatsApp" button
  if (whatsappSendBtn) {
    whatsappSendBtn.addEventListener("click", () => {
      const name = document.getElementById("quote-name")?.value.trim() || "Customer";
      const phone = document.getElementById("quote-phone")?.value.trim() || "N/A";
      const email = document.getElementById("quote-email")?.value.trim() || "N/A";
      const service = document.getElementById("quote-service-select")?.value || "General Materials";
      const quantity = document.getElementById("quote-quantity")?.value.trim() || "As needed";
      const message = document.getElementById("quote-message")?.value.trim() || "Quotation request";

      const text = encodeURIComponent(
        `*NEW QUOTATION REQUEST*\n\n` +
        `• Name: ${name}\n` +
        `• Phone: ${phone}\n` +
        `• Email: ${email}\n` +
        `• Category/Item: ${service}\n` +
        `• Estimated Quantity: ${quantity}\n` +
        `• Project Details: ${message}\n\n` +
        `Please provide official pricing and delivery schedule.`
      );

      const url = `https://wa.me/${window.BUSINESS_CONFIG?.whatsappNumber || '18005550199'}?text=${text}`;
      window.open(url, "_blank");
    });
  }

  function validateFormInputs(name, phone, email, message) {
    if (!name || name.length < 2) {
      return "Please enter your full name or company name.";
    }

    // Simple phone regex check (at least 7 digits)
    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length < 7) {
      return "Please enter a valid telephone number so our dispatchers can reach you.";
    }

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      return "Please provide a valid email address.";
    }

    if (!message || message.length < 5) {
      return "Please write a brief description of the supplies or services you require.";
    }

    return null; // No errors
  }

  function showToast(msg, type) {
    if (!toast) return;
    toast.textContent = msg;
    toast.className = `form-toast ${type}`;
    toast.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

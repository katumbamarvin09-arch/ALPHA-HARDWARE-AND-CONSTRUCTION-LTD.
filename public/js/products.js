/*
================================================================================
  APEX HARDWARE & CONSTRUCTION SUPPLIES - PRODUCTS DATA & CATALOG ENGINE
  FILE: js/products.js
================================================================================
  HOW TO USE THIS FILE:
  - Line 25: PRODUCT DATA ARRAY (Add, edit, or delete products here!)
  - Line 170: PRODUCT CATEGORIES LIST
  - Line 200: CATALOG FILTER & SEARCH LOGIC
  - Line 290: PRODUCT CARD RENDERING ENGINE
  - Line 380: PRODUCT DETAIL MODAL DIALOG (View Details, Specs, WhatsApp enquiry)
================================================================================
*/

/*
================================================================================
  PRODUCT DATA REPOSITORY
  Add or edit your products inside this array.
  Replace the placeholder image with your own product image (e.g. /images/products/my-drill.jpg).
================================================================================
*/
const NEW_PRODUCT_DETAILS = {
  13: {
    name: "Screw Nails",
    description: "Twist-shank nails designed to grip timber securely for construction and woodworking projects.",
    price: "Shs.1,000",
    numericPrice: 1000,
  },
  14: {
    name: "Timber",
    description: "Quality structural timber for framing, roofing, joinery, and general construction work."
  },
  15: {
    name: "Nails",
    description: "General-purpose construction nails for fastening timber and other common building materials."
  },
  16: {
    name: "Wheelbarrows",
    description: "Heavy-duty wheelbarrows for moving building materials, soil, and equipment around the worksite."
  },
  17: {
    name: "Spades",
    description: "Durable digging spades for site preparation, landscaping, and general ground work."
  },
  18: {
    name: "Wire Mesh",
    description: "Welded wire mesh for concrete reinforcement, fencing, and other construction applications."
  },
  19: {
    name: "Bubbled Wire",
    description: "Durable bubbled wire for fencing and a range of construction applications."
  },
  20: {
    name: "Spirit Levels",
    description: "Precision spirit levels for checking horizontal and vertical alignment on site."
  }
};

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Heavy Duty Rotary Hammer Drill 1100W",
    code: "APX-DRL-01",
    category: "Power Tools",
    price: "Shs.50,000",
    numericPrice: 149.00,
    image: "images/products/product-01.jpg",
    description: "Industrial-grade SDS-Plus rotary hammer drill featuring 3.2 Joules impact energy, variable speed dial, and ergonomic vibration dampening grip for heavy masonry and concrete drilling.",
    specifications: [
      "Motor Power: 1100 Watts",
      "Impact Rate: 0 - 4,800 BPM",
      "Chuck Type: SDS-Plus Keyless",
      "Max Concrete Drilling: 28 mm",
      "Weight: 3.4 kg",
      "Voltage: 220-240V ~ 50Hz"
    ],
    sizes: ["Standard SDS Kit", "Kit with 5 Drill Bits", "Heavy Case Bundle"],
    colours: ["Industrial Orange/Charcoal"],
    availability: "In Stock",
    isFeatured: true,
    rating: 4.9
  },
  {
    id: 2,
    name: "High-Grade Portland Cement 42.5N (50kg)",
    code: "APX-CEM-02",
    category: "Building Materials",
    price: "Shs.30,000",
    numericPrice: 9.50,
    image: "images/products/product-02.jpg",
    description: "Premium general-purpose and structural Portland cement formulated for exceptional early strength, optimal workability, and durability in residential and commercial cast-in-place concrete.",
    specifications: [
      "Grade: CEM II / B-M (S-V) 42.5 N",
      "Bag Weight: 50 Kilograms (110 lbs)",
      "Standard Compliance: EN 197-1 / ASTM C150",
      "Setting Time: Initial >= 60 mins",
      "Compressive 28-Day Strength: >= 42.5 MPa"
    ],
    sizes: ["50kg Single Bag", "Pallet (40 Bags / 2 Metric Tons)", "Full Truckload (600 Bags)"],
    colours: ["Standard Concrete Grey"],
    availability: "In Stock",
    isFeatured: true,
    rating: 4.8
  },
  {
    id: 3,
    name: "Cordless Brushless Angle Grinder 20V",
    code: "APX-GRD-03",
    category: "Power Tools",
    price: "Shs.129,000",
    numericPrice: 129.00,
    image: "images/products/product-03.jpg",
    description: "Brushless motor angle grinder designed for metal fabrication, rebar cutting, and weld smoothing. Features quick-guard adjustment and electronic kickback brake.",
    specifications: [
      "Battery System: 20V Max Lithium-Ion",
      "No-Load Speed: 9,000 RPM",
      "Disc Diameter: 125 mm (5 inch)",
      "Brake: Electronic Rapid Stop (< 1.5s)",
      "Safety: Kickback brake & restart protection"
    ],
    sizes: ["Bare Tool (No Battery)", "Kit with 1x 4.0Ah Battery", "Pro Kit (2x 5.0Ah Batteries)"],
    colours: ["Apex Safety Orange"],
    availability: "In Stock",
    isFeatured: true,
    rating: 4.9
  },
  {
    id: 4,
    name: "High-Tensile Deformed Steel Rebar (12mm / 16mm)",
    code: "APX-RBR-04",
    category: "Building Materials",
    price: "Shs.14,800",
    numericPrice: 14.80,
    image: "images/products/product-04.jpg",
    description: "Hot-rolled thermo-mechanically treated (TMT) high-tensile steel reinforcing rebar for foundations, structural concrete slabs, columns, and bridge abutments.",
    specifications: [
      "Steel Grade: BS 4449 Grade 500B / ASTM A615 Grade 60",
      "Diameters: 10mm, 12mm, 16mm, 20mm, 25mm",
      "Length: 12.0 Metres per bar",
      "Yield Strength: >= 500 N/mm²",
      "Surface: Deep ribbed deform pattern for maximum concrete bonding"
    ],
    sizes: ["12mm x 12m Bar", "16mm x 12m Bar", "20mm x 12m Bar", "Bundle (1 Metric Ton)"],
    colours: ["Raw Steel Finish"],
    availability: "In Stock",
    isFeatured: true,
    rating: 5.0
  },
  {
    id: 5,
    name: "24-Piece Mechanics Chrome-Vanadium Tool Set",
    code: "APX-TLS-05",
    category: "Hand Tools",
    price: "Shs.65,000",
    numericPrice: 65.00,
    image: "images/products/product-05.jpg",
    description: "Hardened chrome-vanadium steel combination spanner and socket set packed in an impact-resistant blow-molded storage case with heavy metal latches.",
    specifications: [
      "Material: Drop-Forged Chrome Vanadium (Cr-V)",
      "Ratchet: 72-Tooth Quick Release 1/2-Inch Drive",
      "Socket Range: 10mm to 32mm",
      "Finish: Mirror Chrome Corrosion-Resistant Plating",
      "Case: Rugged Heavy-Duty Polymer"
    ],
    sizes: ["24-Piece Standard Set", "48-Piece Pro Workshop Set", "96-Piece Master Mechanic Chest"],
    colours: ["Industrial Matte Case"],
    availability: "In Stock",
    isFeatured: false,
    rating: 4.7
  },
  {
    id: 6,
    name: "Heavy-Duty PVC Drainage Pipe & Fittings (110mm)",
    code: "APX-PLM-06",
    category: "Plumbing",
    price: "Shs.18,500",
    numericPrice: 18.50,
    image: "images/products/product-06.jpg",
    description: "Precision-extruded unplasticized PVC soil, waste, and vent pipe with rubber ring socket joints for watertight, root-resistant sanitary drainage.",
    specifications: [
      "Diameter: 110 mm External (4-Inch)",
      "Standard Length: 6.0 Metres per length",
      "Standard: ISO 3633 / BS EN 1329",
      "Joint Type: Push-Fit Rubber Ring Socket",
      "Pressure Class: Non-pressure gravity sewer"
    ],
    sizes: ["50mm x 6m", "110mm x 6m", "160mm x 6m", "Assorted 90° Elbows & Tees"],
    colours: ["Terracotta Orange", "Drainage Grey"],
    availability: "In Stock",
    isFeatured: false,
    rating: 4.8
  },
  {
    id: 7,
    name: "Industrial 3-Phase Main Distribution Board (200A)",
    code: "APX-ELC-07",
    category: "Electrical",
    price: "Shs.210,000",
    numericPrice: 210.00,
    image: "images/products/product-07.jpg",
    description: "IP65 weatherproof electrical distribution enclosure with transparent hinged door, isolated neutral and brass earth bars, and pre-mounted DIN rail for MCBs.",
    specifications: [
      "Current Rating: 200 Amps Main Switch Capacity",
      "Phase: 3-Phase 415V / Single-Phase 240V",
      "Module Capacity: 24 Pole DIN Rail Slots",
      "Protection Rating: IP65 Outdoor & Dustproof",
      "Enclosure: Powder-Coated 1.2mm Sheet Steel"
    ],
    sizes: ["12-Way Panel", "24-Way Commercial Panel", "36-Way Industrial Panel"],
    colours: ["Industrial Light Grey (RAL 7035)"],
    availability: "In Stock",
    isFeatured: true,
    rating: 4.9
  },
  {
    id: 8,
    name: "Corrugated Galvanized Iron Roofing Sheets (0.5mm)",
    code: "APX-ROF-08",
    category: "Roofing",
    price: "Shs.22,000",
    numericPrice: 22.00,
    image: "images/products/product-08.jpg",
    description: "Zinc-coated galvanized corrugated steel sheet offering superior weather resistance, UV reflection, and corrosion protection for residential and agricultural roofing.",
    specifications: [
      "Thickness: 0.50 mm (Gauge 26 / 28 available)",
      "Zinc Coating: Z275 (275 g/m² high zinc hot dip)",
      "Width: 1000 mm Overall (850 mm Effective Cover)",
      "Standard Lengths: 2.5m, 3.0m, 3.6m, 4.0m, 6.0m",
      "Tensile Strength: 350 - 550 MPa"
    ],
    sizes: ["2.5m Sheet", "3.0m Sheet", "3.6m Sheet", "Ridge Caps & J-Bolts Pack"],
    colours: ["Galvanized Silver", "Coated Charcoal", "Tile Red"],
    availability: "In Stock",
    isFeatured: true,
    rating: 4.8
  },
  {
    id: 9,
    name: "Pro-Shield Weatherproof Exterior Wall Paint (20L)",
    code: "APX-PNT-09",
    category: "Paint & Finishing",
    price: "Shs.58,000",
    numericPrice: 58.00,
    image: "images/products/product-09.jpg",
    description: "100% acrylic exterior masonry emulsion paint formulated with fungal defense, anti-efflorescence technology, and extreme UV resistance for external plaster and render.",
    specifications: [
      "Container Volume: 20 Litres",
      "Coverage: 10 - 12 m² per litre per coat",
      "Drying Time: Touch dry in 45 mins; recoat 4 hours",
      "Warranty: 10-Year Weatherproof Guarantee",
      "VOC Level: Ultra-Low VOC eco-certified"
    ],
    sizes: ["5 Litre Bucket", "20 Litre Drum"],
    colours: ["Brilliant White", "Limestone Cream", "Sandstone Beige", "Granite Grey"],
    availability: "In Stock",
    isFeatured: false,
    rating: 4.7
  },
  {
    id: 10,
    name: "Structural Grade 8.8 Hex Head High-Tensile Bolts (Pack)",
    code: "APX-FST-10",
    category: "Fasteners",
    price: "Shs.34,000",
    numericPrice: 34.00,
    image: "images/products/product-10.jpg",
    description: "Heavy structural zinc-plated steel bolts, nylon lock nuts, and flat washers packaged for structural steel fabrication, timber framing, and heavy machinery mounting.",
    specifications: [
      "Steel Class: ISO 898-1 Grade 8.8 High Tensile",
      "Sizes: M12 x 50mm, M16 x 80mm, M20 x 100mm",
      "Finish: Bright Zinc Plating (BZP) / Hot Dip Galvanized",
      "Pack Quantity: 50 Pieces with Washers & Heavy Hex Nuts"
    ],
    sizes: ["M12 x 50mm (Pack of 50)", "M16 x 80mm (Pack of 50)", "M20 x 100mm (Pack of 25)"],
    colours: ["Zinc Coated Silver"],
    availability: "In Stock",
    isFeatured: false,
    rating: 4.9
  },
  {
    id: 11,
    name: "Site Safety Hard Hat & Fall-Arrest Harness Kit",
    code: "APX-SAF-11",
    category: "Safety Equipment",
    price: "Shs.79,000",
    numericPrice: 79.00,
    image: "images/products/product-11.jpg",
    description: "OSHA & CE compliant site safety bundle including high-density polyethylene safety helmet, high-vis reflective safety vest, and full-body scaffolding fall arrest harness.",
    specifications: [
      "Standards: ANSI Z89.1 Type 1 Class E / EN 397 (Helmet)",
      "Harness: EN 361 2-Point Full Body Scaffolder Harness",
      "Lanyard: 1.8m Shock Absorbing Webbing with Scaffold Hooks",
      "Helmet Adjuster: Ratchet Wheel Headband (53-64cm)"
    ],
    sizes: ["Universal Adjustable Size"],
    colours: ["Safety Yellow", "High-Vis Orange", "Engineer White"],
    availability: "In Stock",
    isFeatured: false,
    rating: 5.0
  },
  {
    id: 12,
    name: "Digital Inverter MMA Arc Welder 250A Portable",
    code: "APX-WLD-12",
    category: "Welding Equipment",
    price: "Shs.185,000",
    numericPrice: 185.00,
    image: "images/products/product-12.jpg",
    description: "Compact IGBT inverter stick/MMA welding machine equipped with digital current display, hot start, anti-stick, and arc force for smooth structural welding.",
    specifications: [
      "Current Output: 20A - 250A Adjustable",
      "Duty Cycle: 60% @ 250 Amps / 100% @ 195 Amps",
      "Usable Electrodes: 1.6mm to 4.0mm (E6013, E7018)",
      "Input Voltage: 220V - 240V 50/60Hz Single Phase",
      "Weight: 4.8 kg Ultra Portable"
    ],
    sizes: ["Welder Machine Kit with Cables", "Pro Welder + Auto-Darkening Mask Combo"],
    colours: ["Apex Safety Orange"],
    availability: "In Stock",
    isFeatured: true,
    rating: 4.9
  },
  ...Array.from({ length: 8 }, (_, index) => {
    const productNumber = index + 13;
    const details = NEW_PRODUCT_DETAILS[productNumber];

    return {
      id: productNumber,
      name: details.name,
      code: `APX-NEW-${productNumber}`,
      category: "New Product",
      price: details.price || "Add price",
      numericPrice: details.numericPrice || 0,
      image: `images/products/product-${productNumber}.jpg`,
      description: details.description,
      specifications: ["Add product specifications here."],
      sizes: ["Add available sizes or packages"],
      colours: [],
      availability: "In Stock",
      isFeatured: false,
      rating: 0
    };
  })
];

// Attach products array to window object for access across all pages
window.PRODUCTS_DATA = PRODUCTS_DATA;

/*
================================================================================
  CATALOG FILTER STATE
================================================================================
*/
const CatalogState = {
  selectedCategory: "All",
  searchKeyword: "",
  sortBy: "featured",
  availabilityFilter: "all"
};

function initCategorySlider() {
  const categoryTrack = document.querySelector(".categories-grid");
  if (!categoryTrack || categoryTrack.dataset.sliderInitialized === "true") return;

  categoryTrack.dataset.sliderInitialized = "true";
  categoryTrack.querySelectorAll(".category-card").forEach(card => {
    const duplicate = card.cloneNode(true);
    duplicate.setAttribute("aria-hidden", "true");
    duplicate.setAttribute("tabindex", "-1");
    categoryTrack.appendChild(duplicate);
  });
}

/*
================================================================================
  CATALOG INITIALIZER
================================================================================
*/
document.addEventListener("DOMContentLoaded", () => {
  // If we are on products.html or index.html where products grid exists
  const productsGrid = document.getElementById("products-catalog-grid");
  const featuredSlider = document.getElementById("featured-products-track");

  initCategorySlider();

  if (productsGrid) {
    initCatalogControls();
    renderProductsCatalog();
  }

  if (featuredSlider) {
    renderFeaturedSlider();
  }

  initProductModal();
});

/*
================================================================================
  CATALOG CONTROLS (SEARCH, FILTERS, SORTING)
================================================================================
*/
function initCatalogControls() {
  const searchInput = document.getElementById("product-search-input");
  const categorySelect = document.getElementById("category-filter-select");
  const sortSelect = document.getElementById("sort-by-select");
  const availSelect = document.getElementById("availability-filter-select");
  const categoryPills = document.querySelectorAll(".category-filter-btn");

  // Read URL query parameter for category (e.g. products.html?category=Power%20Tools)
  const urlParams = new URLSearchParams(window.location.search);
  const categoryFromUrl = urlParams.get("category");
  if (categoryFromUrl) {
    CatalogState.selectedCategory = decodeURIComponent(categoryFromUrl);
    if (categorySelect) categorySelect.value = CatalogState.selectedCategory;
    // Set active button
    categoryPills.forEach(btn => {
      if (btn.getAttribute("data-category") === CatalogState.selectedCategory) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  // Live text search event listener
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      CatalogState.searchKeyword = e.target.value.trim().toLowerCase();
      renderProductsCatalog();
    });
  }

  // Category dropdown change
  if (categorySelect) {
    categorySelect.addEventListener("change", (e) => {
      CatalogState.selectedCategory = e.target.value;
      renderProductsCatalog();
    });
  }

  // Category interactive button clicks
  categoryPills.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryPills.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      CatalogState.selectedCategory = btn.getAttribute("data-category") || "All";
      if (categorySelect) categorySelect.value = CatalogState.selectedCategory;
      renderProductsCatalog();
    });
  });

  // Sorting change
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      CatalogState.sortBy = e.target.value;
      renderProductsCatalog();
    });
  }

  // Availability filter change
  if (availSelect) {
    availSelect.addEventListener("change", (e) => {
      CatalogState.availabilityFilter = e.target.value;
      renderProductsCatalog();
    });
  }
}

/*
================================================================================
  FILTER AND RENDER PRODUCTS GRID
================================================================================
*/
function renderProductsCatalog() {
  const container = document.getElementById("products-catalog-grid");
  const resultCount = document.getElementById("product-results-count");
  if (!container) return;

  // Filter products by category, search keywords, and stock
  let filtered = PRODUCTS_DATA.filter(prod => {
    // 1. Category check
    const matchesCategory =
      CatalogState.selectedCategory === "All" ||
      prod.category.toLowerCase() === CatalogState.selectedCategory.toLowerCase();

    // 2. Search keyword check
    const matchesSearch =
      CatalogState.searchKeyword === "" ||
      prod.name.toLowerCase().includes(CatalogState.searchKeyword) ||
      prod.category.toLowerCase().includes(CatalogState.searchKeyword) ||
      prod.description.toLowerCase().includes(CatalogState.searchKeyword) ||
      prod.code.toLowerCase().includes(CatalogState.searchKeyword);

    // 3. Stock availability check
    const matchesAvailability =
      CatalogState.availabilityFilter === "all" ||
      (CatalogState.availabilityFilter === "in-stock" && prod.availability === "In Stock");

    return matchesCategory && matchesSearch && matchesAvailability;
  });

  // Apply sorting
  if (CatalogState.sortBy === "price-low") {
    filtered.sort((a, b) => a.numericPrice - b.numericPrice);
  } else if (CatalogState.sortBy === "price-high") {
    filtered.sort((a, b) => b.numericPrice - a.numericPrice);
  } else if (CatalogState.sortBy === "alpha") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    // Featured first
    filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
  }

  // Update result count label
  if (resultCount) {
    resultCount.textContent = `Showing ${filtered.length} product${filtered.length === 1 ? '' : 's'}`;
  }

  // Handle empty search results state
  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: var(--radius-lg);">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto 16px;"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <h3 style="font-size: 1.3rem; margin-bottom: 8px;">No Products Found</h3>
        <p style="color: var(--text-muted); max-width: 460px; margin: 0 auto 20px;">We couldn't find any products matching your search criteria. Try using different keywords or reset the filters.</p>
        <button class="btn btn-outline" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  // Render product cards
  container.innerHTML = filtered.map(prod => createProductCardHtml(prod)).join("");

  // Rebind view details and WhatsApp enquiry buttons
  bindProductCardEvents(container);
}

// Reset filter helper
window.resetAllFilters = function() {
  CatalogState.selectedCategory = "All";
  CatalogState.searchKeyword = "";
  CatalogState.sortBy = "featured";
  CatalogState.availabilityFilter = "all";

  const searchInput = document.getElementById("product-search-input");
  if (searchInput) searchInput.value = "";
  const catSelect = document.getElementById("category-filter-select");
  if (catSelect) catSelect.value = "All";
  const sortSelect = document.getElementById("sort-by-select");
  if (sortSelect) sortSelect.value = "featured";
  const availSelect = document.getElementById("availability-filter-select");
  if (availSelect) availSelect.value = "all";

  document.querySelectorAll(".category-filter-btn").forEach(btn => {
    if (btn.getAttribute("data-category") === "All") btn.classList.add("active");
    else btn.classList.remove("active");
  });

  renderProductsCatalog();
};

/*
================================================================================
  HTML BUILDER FOR SINGLE PRODUCT CARD
  Follows Zero-Pill discipline: unboxed clean text with subtle dot separators.
================================================================================
*/
function createProductCardHtml(product) {
  const whatsappUrl = window.getProductWhatsAppUrl
    ? window.getProductWhatsAppUrl(product.name, product.code, product.price)
    : "#";

  return `
    <article class="product-card" data-id="${product.id}">
      <div class="product-img-wrapper" onclick="openProductModal(${product.id})">
        <img
          src="${product.image}"
          alt="${product.name}"
          class="product-img"
          loading="lazy"
          onerror="this.hidden=true; this.parentElement.classList.add('has-image-placeholder')"
        />
        <span class="product-image-placeholder" aria-hidden="true">Add image: ${product.image.split('/').pop()}</span>
        <span class="product-availability-tag in-stock">${product.availability}</span>
      </div>

      <div class="product-body">
        <!-- Clean Unboxed Metadata Line (No Pill Enclosures) -->
        <div class="product-meta-row">
          <span>${product.category}</span>
          <span aria-hidden="true">·</span>
          <span>${product.code}</span>
        </div>

        <h3 class="product-title" onclick="openProductModal(${product.id})" style="cursor: pointer;">
          ${product.name}
        </h3>

        <p class="product-desc">${product.description}</p>

        <div class="product-footer-row">
          <span class="product-price tabular-nums">${product.price}</span>
          <span class="product-code">★ ${product.rating.toFixed(1)}</span>
        </div>

        <div class="product-actions-row">
          <button class="btn btn-outline btn-sm" onclick="openProductModal(${product.id})">
            View Details
          </button>
          <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  `;
}
window.createProductCardHtml = createProductCardHtml;

function bindProductCardEvents(container) {
  // Any extra event hooks if required
}

/*
================================================================================
  FEATURED PRODUCTS SLIDER RENDERER (HOMEPAGE)
================================================================================
*/
function renderFeaturedSlider() {
  const track = document.getElementById("featured-products-track");
  if (!track) return;

  const featured = PRODUCTS_DATA.filter(p => p.isFeatured);
  if (!featured.length) return;

  const duplicated = [...featured, ...featured];
  track.innerHTML = duplicated.map(prod => createProductCardHtml(prod)).join("");
}

/*
================================================================================
  PRODUCT DETAILS MODAL WINDOW
  Displays large image, full specs, variant options, and WhatsApp enquiry.
================================================================================
*/
function initProductModal() {
  const modalOverlay = document.getElementById("product-detail-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  if (!modalOverlay) return;

  // Close when clicking X button
  if (closeBtn) {
    closeBtn.addEventListener("click", closeProductModal);
  }

  // Close when clicking outside modal card
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeProductModal();
    }
  });

  // Close with keyboard Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
      closeProductModal();
    }
  });
}

function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  const modalOverlay = document.getElementById("product-detail-modal");
  if (!product || !modalOverlay) return;

  const modalImg = document.getElementById("modal-product-img");
  const modalCategory = document.getElementById("modal-product-category");
  const modalCode = document.getElementById("modal-product-code");
  const modalTitle = document.getElementById("modal-product-title");
  const modalPrice = document.getElementById("modal-product-price");
  const modalDesc = document.getElementById("modal-product-desc");
  const modalSpecsList = document.getElementById("modal-product-specs");
  const modalSizesList = document.getElementById("modal-product-sizes");
  const modalWhatsappLink = document.getElementById("modal-whatsapp-cta");
  const modalQuoteLink = document.getElementById("modal-quote-cta");

  if (modalImg) modalImg.src = product.image;
  if (modalCategory) modalCategory.textContent = product.category;
  if (modalCode) modalCode.textContent = product.code;
  if (modalTitle) modalTitle.textContent = product.name;
  if (modalPrice) modalPrice.textContent = product.price;
  if (modalDesc) modalDesc.textContent = product.description;

  // Render specifications
  if (modalSpecsList) {
    modalSpecsList.innerHTML = product.specifications.map(spec => `
      <li style="display: flex; align-items: center; gap: 8px; font-size: 0.88rem; margin-bottom: 6px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>${spec}</span>
      </li>
    `).join("");
  }

  // Render available sizes / pack variants
  if (modalSizesList && product.sizes) {
    modalSizesList.innerHTML = product.sizes.map(size => `
      <span style="display: inline-block; padding: 4px 10px; font-size: 0.78rem; font-weight: 700; border: 1px solid var(--border-color); border-radius: var(--radius-sm); margin-right: 6px; margin-bottom: 6px;">${size}</span>
    `).join("");
  }

  // Direct WhatsApp Enquiry button
  if (modalWhatsappLink) {
    const whatsappUrl = window.getProductWhatsAppUrl
      ? window.getProductWhatsAppUrl(product.name, product.code, product.price)
      : "#";
    modalWhatsappLink.href = whatsappUrl;
    modalWhatsappLink.target = "_blank";
  }

  // Request Quote button jumps to contact form with product pre-filled
  if (modalQuoteLink) {
    modalQuoteLink.href = `contact.html?product=${encodeURIComponent(product.name)}`;
  }

  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden"; // Prevent background body scroll
}
window.openProductModal = openProductModal;

function closeProductModal() {
  const modalOverlay = document.getElementById("product-detail-modal");
  if (!modalOverlay) return;
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
}
window.closeProductModal = closeProductModal;

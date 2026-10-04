/*
================================================================================
  APEX HARDWARE & CONSTRUCTION SUPPLIES - VIRTUAL SHOWCASE ROOM ENGINE
  FILE: js/showcase.js
================================================================================
  HOW TO USE THIS SCRIPT:
  This script powers "THE SHOWCASE ROOM" — an interactive virtual hardware
  and equipment showroom that lets customers visually inspect products, switch
  departments, view technical schematics, and request quotes instantly via WhatsApp.

  - Line 25: SHOWROOM DEPARTMENTS CONFIGURATION
  - Line 60: SHOWROOM STAGE CONTROLLER (Highlights selected showcase equipment)
  - Line 130: VARIANT SELECTION & LIVE ESTIMATOR
  - Line 190: DIRECT WHATSAPP INQUIRY DISPATCHER
================================================================================
*/

/*
================================================================================
  SHOWROOM DEPARTMENTS & EQUIPMENT SPOTLIGHTS
  You can customize the showroom bays and displayed equipment items below.
================================================================================
*/
const SHOWCASE_DEPARTMENTS = [
  {
    id: "heavy-construction",
    name: "Heavy Construction Bay",
    description: "Structural building materials, high-yield rebar, structural grade cement, and masonry equipment.",
    featuredProduct: {
      name: "Hima Cement 42.5N (50kg)",
      code: "APX-CEM-02",
      category: "Building Materials",
      price: "Shs.30,000 / bag",
      image: "images/products/product-02.jpg",
      tagline: "Certified Structural Strength for Residential & Commercial Foundations",
      specs: [
        "Tested 28-day strength exceeding 42.5 MPa",
        "Fast-setting hydraulic binder for reinforced concrete",
        "Low heat of hydration reduces thermal shrinkage cracking",
        "Bulk delivery available up to 30 metric tons per flatbed"
      ],
      packageOptions: [
        { label: "Single 50kg Bag", price: "Shs.30,000" },
        { label: "1 Pallet (40 Bags)", price: "$360.00" },
        { label: "Full Truckload (600 Bags)", price: "$5,100.00" }
      ]
    }
  },
  {
    id: "power-workshop",
    name: "Power & Workshop Bay",
    description: "Commercial-duty rotary hammers, brushless grinders, and precision metal cutting gear.",
    featuredProduct: {
      name: "Heavy Duty Rotary Hammer Drill 1100W",
      code: "APX-DRL-01",
      category: "Power Tools",
      price: "Shs.450,000",
      image: "images/products/product-01.jpg",
      tagline: "Professional Masonry Drilling & Demolition Chiseling",
      specs: [
        "1100W Motor delivering 3.2 Joules impact force",
        "Anti-vibration system reduces operator fatigue by 40%",
        "Overload safety clutch protects motor and technician",
        "Variable speed trigger with continuous lock switch"
      ],
      packageOptions: [
        { label: "Standard SDS Kit", price: "$149.00" },
        { label: "Kit + 5 Carbide Bits", price: "$175.00" },
        { label: "Master Contractor Case", price: "$210.00" }
      ]
    }
  },
  {
    id: "plumbing-infrastructure",
    name: "Plumbing & Piping Bay",
    description: "Sewer drainage piping, solvent weld fittings, high-pressure valves, and water storage fixtures.",
    featuredProduct: {
      name: "Heavy-Duty PVC Drainage Pipe & Fittings (110mm)",
      code: "APX-PLM-06",
      category: "Plumbing",
      price: "Shs.18,500 / length",
      image: "images/products/product-06.jpg",
      tagline: "Smooth-Bore Non-Pressure Gravity Waste and Soil Systems",
      specs: [
        "ISO 3633 / BS EN 1329 Sanitary certified uPVC",
        "Leakproof rubber ring socket joint eliminates adhesive errors",
        "Chemical resistance to domestic waste and industrial detergents",
        "Standard 6.0 metre lengths for efficient trench layout"
      ],
      packageOptions: [
        { label: "Single 6m Length", price: "$18.50" },
        { label: "Pack of 10 Lengths", price: "$175.00" },
        { label: "Drainage Starter Bundle", price: "$280.00" }
      ]
    }
  },
  {
    id: "electrical-distribution",
    name: "Electrical & Distribution Bay",
    description: "Weatherproof main distribution panels, circuit breakers, armored cables, and site earthing.",
    featuredProduct: {
      name: "Industrial 3-Phase Main Distribution Board (200A)",
      code: "APX-ELC-07",
      category: "Electrical",
      price: "Shs.210,000",
      image: "images/products/product-07.jpg",
      tagline: "Complete Site Power Management & Protection Enclosure",
      specs: [
        "IP65 Weatherproof rating for outdoor worksite power",
        "24 DIN rail pole capacity with dual isolated neutral bars",
        "Pre-punched heavy knockouts for armored cable glands",
        "Electrostatically coated rust-resistant steel casing"
      ],
      packageOptions: [
        { label: "Empty 24-Pole Board", price: "$210.00" },
        { label: "Loaded with 12x 16A MCBs", price: "$275.00" },
        { label: "Turnkey Contractor Kit", price: "$340.00" }
      ]
    }
  }
];

let activeDepartmentIndex = 0;
let activePackageIndex = 0;

/*
================================================================================
  SHOWROOM INITIALIZER
================================================================================
*/
document.addEventListener("DOMContentLoaded", () => {
  const showroomStage = document.getElementById("showcase-room-stage");
  if (!showroomStage) return;

  renderShowroomDepartmentTabs();
  renderShowroomStage();
  renderShowcaseProducts();
});

function renderShowcaseProducts() {
  const productsGrid = document.getElementById("showcase-products-grid");
  if (!productsGrid || !window.PRODUCTS_DATA || !window.createProductCardHtml) return;

  productsGrid.innerHTML = window.PRODUCTS_DATA
    .map(product => window.createProductCardHtml(product))
    .join("");
}

/*
================================================================================
  RENDER DEPARTMENT TABS
================================================================================
*/
function renderShowroomDepartmentTabs() {
  const tabsContainer = document.getElementById("showcase-dept-tabs");
  if (!tabsContainer) return;

  tabsContainer.innerHTML = SHOWCASE_DEPARTMENTS.map((dept, index) => `
    <button
      class="dept-tab-btn ${index === activeDepartmentIndex ? 'active' : ''}"
      onclick="switchShowroomDepartment(${index})"
      type="button"
    >
      ${dept.name}
    </button>
  `).join("");
}

function switchShowroomDepartment(index) {
  activeDepartmentIndex = index;
  activePackageIndex = 0;
  renderShowroomDepartmentTabs();
  renderShowroomStage();
}
window.switchShowroomDepartment = switchShowroomDepartment;

/*
================================================================================
  RENDER ACTIVE SHOWCASE PRODUCT STAGE
================================================================================
*/
function renderShowroomStage() {
  const dept = SHOWCASE_DEPARTMENTS[activeDepartmentIndex];
  const prod = dept.featuredProduct;
  const currentPkg = prod.packageOptions[activePackageIndex] || prod.packageOptions[0];

  const stageImg = document.getElementById("showcase-stage-img");
  const stageCategory = document.getElementById("showcase-stage-category");
  const stageCode = document.getElementById("showcase-stage-code");
  const stageTitle = document.getElementById("showcase-stage-title");
  const stageTagline = document.getElementById("showcase-stage-tagline");
  const stageSpecs = document.getElementById("showcase-stage-specs");
  const stagePackages = document.getElementById("showcase-stage-packages");
  const stagePrice = document.getElementById("showcase-stage-price");
  const stageWhatsapp = document.getElementById("showcase-stage-whatsapp");
  const stageQuote = document.getElementById("showcase-stage-quote");

  if (stageImg) stageImg.src = prod.image;
  if (stageCategory) stageCategory.textContent = prod.category;
  if (stageCode) stageCode.textContent = prod.code;
  if (stageTitle) stageTitle.textContent = prod.name;
  if (stageTagline) stageTagline.textContent = prod.tagline;
  if (stagePrice) stagePrice.textContent = currentPkg.price;

  // Render specifications
  if (stageSpecs) {
    stageSpecs.innerHTML = prod.specs.map(spec => `
      <li class="showcase-spec-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <span>${spec}</span>
      </li>
    `).join("");
  }

  // Render package options buttons
  if (stagePackages) {
    stagePackages.innerHTML = prod.packageOptions.map((pkg, idx) => `
      <button
        type="button"
        onclick="selectShowroomPackage(${idx})"
        class="btn btn-sm ${idx === activePackageIndex ? 'btn-primary' : 'btn-outline'}"
        style="margin-right: 8px; margin-bottom: 8px;"
      >
        ${pkg.label}
      </button>
    `).join("");
  }

  // Update WhatsApp link with package details
  if (stageWhatsapp) {
    const text = encodeURIComponent(
      `Hello ${window.BUSINESS_CONFIG?.companyName || 'Apex Hardware'}, I am inspecting your virtual SHOWCASE ROOM and would like to order or request a quote for:\n\n• Item: ${prod.name}\n• Code: ${prod.code}\n• Package: ${currentPkg.label}\n• Estimated Price: ${currentPkg.price}\n\nPlease confirm availability and delivery.`
    );
    stageWhatsapp.href = `https://wa.me/${window.BUSINESS_CONFIG?.whatsappNumber || '18005550199'}?text=${text}`;
    stageWhatsapp.target = "_blank";
  }

  if (stageQuote) {
    stageQuote.href = `contact.html?product=${encodeURIComponent(prod.name)}&package=${encodeURIComponent(currentPkg.label)}`;
  }
}

function selectShowroomPackage(packageIndex) {
  activePackageIndex = packageIndex;
  renderShowroomStage();
}
window.selectShowroomPackage = selectShowroomPackage;

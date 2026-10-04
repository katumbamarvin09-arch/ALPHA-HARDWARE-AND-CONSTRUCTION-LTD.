# Apex Hardware & Construction Supplies Website

Welcome to your complete, modern, professional website for a **Hardware Store & Construction Supplies Company**!

This website was built using clean, modular **HTML5, CSS3, and Vanilla JavaScript** without bloated dependencies. It is fully responsive across desktop, tablet, and mobile, with built-in Dark/Light mode, an interactive **Showcase Room**, a dynamic **Products Catalog** with live search and category filtering, an interactive **Quotation & Contact Form**, animated statistics counters, customer testimonials, worksite project lightbox gallery, and direct **WhatsApp integration**.

---

## 📁 Project File Structure

```text
├── index.html              # Homepage (Hero carousel, highlights, categories, featured, gallery, reviews)
├── products.html           # Full product catalog with live search, filters, sorting & detail modal
├── showcase.html           # "The Showcase Room" virtual hardware & equipment showroom
├── services.html           # Comprehensive construction & logistics services
├── about.html              # Company history, mission, vision, core values & leadership team
├── contact.html            # Contact info, interactive quote request form & direct hotlines
│
├── css/
│   └── style.css           # Master stylesheet (theme colors, dark/light mode, typography, layout)
│
├── js/
│   ├── main.js             # Central business config, sticky nav, dark mode, counters, WhatsApp launcher
│   ├── products.js         # Complete products array (12+ items), search, category filter & modal logic
│   ├── showcase.js         # Virtual showroom stage controller, department tabs & package estimator
│   └── contact.js          # Form validation, quote calculator & WhatsApp message generator
│
├── images/
│   ├── logo/               # Company logo files (e.g. company-logo.svg)
│   ├── hero/               # Hero slideshow graphics & photos
│   ├── products/           # Product photos & illustrations (product-01 to product-12)
│   ├── projects/           # Worksite gallery photos (project-1 to project-6)
│   └── team/               # Team member photos (member-1 to member-3)
│
└── README.md               # Complete beginner guide (You are here!)
```

---

## ⚡ Quick Start: Running the Website

You have two easy ways to view and run the website:

### Option 1: Open Directly in Any Browser (No Server Needed!)
Because this website is built with clean vanilla HTML, CSS, and JavaScript:
1. Double-click `index.html` on your computer (or right-click → **Open With** → Google Chrome, Edge, Safari, or Firefox).
2. All pages, links, modals, search, and themes will work immediately!

### Option 2: Run via the Local Dev Server
If you are developing inside an npm environment:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Open the Website on Other Devices
Keep the development server running, then use the address that matches where the other device is:

- This computer: [http://localhost:3000](http://localhost:3000)
- A phone, tablet, or computer on the same Wi-Fi/LAN: `http://<this-computer's-LAN-IP>:3000`  
  For example, if this computer's LAN IP is `192.168.1.107`, open `http://192.168.1.107:3000`.

Find the LAN IP on Windows with `ipconfig` (use the IPv4 Address for the active Wi-Fi or Ethernet adapter). Both devices must be on the same network, and Windows Firewall must allow inbound connections to port 3000. `localhost` only works on the computer running the server.

For a device on a different network, the LAN address will not work. Use a secure tunnel or deploy the site to a public web host to get a public URL; do not share the LAN IP as if it were publicly accessible.

### Publish a Permanent Public URL with Netlify
The site is configured for Netlify in `netlify.toml`. To publish it:

1. Sign in to [Netlify](https://app.netlify.com/) and choose **Add new site** → **Deploy manually**.
2. Build the site on this computer with `npm run build`.
3. Upload the generated `dist` folder using Netlify's manual deploy page.
4. Netlify will provide a public HTTPS URL. Share that URL to open the homepage from any network; the other pages are available at `/products.html`, `/services.html`, `/showcase.html`, `/about.html`, and `/contact.html`.

Each time you change the site, run `npm run build` and upload the updated `dist` folder again. The public URL is issued by Netlify after deployment and cannot be created until the site is uploaded to an account.

---

## 📘 Beginner's Customization Guide: 26 Key Questions Answered

### 1. How to Change the Company Name
1. Open `js/main.js`.
2. Locate line 28 inside `BUSINESS_CONFIG`:
   ```javascript
   companyName: "Apex Hardware & Construction Supplies",
   ```
3. Change this string to your registered business name. It will automatically update in headers, copyright lines, WhatsApp message templates, and contact cards across every page!
4. In each HTML file (`index.html`, `products.html`, etc.), look for `<title>` at the top and change `Apex Hardware` to your name.

### 2. How to Change the Logo
1. Save your logo image as a PNG or SVG (recommended size: `320px` wide by `80px` high).
2. Place your logo inside the folder: `images/logo/` (for example: `images/logo/my-logo.png`).
3. In each HTML file, search for `images/logo/company-logo.svg` and change it to your file path:
   ```html
   <img src="images/logo/my-logo.png" alt="Company Logo" class="brand-logo-img">
   ```

### 3. How to Change Colors
1. Open `css/style.css`.
2. Look at lines 28–38 at the very top under `:root`:
   ```css
   --color-primary: #0f172a;        /* Main dark industrial slate */
   --color-accent: #f97316;         /* Construction safety orange (Buttons & Highlights) */
   --color-accent-hover: #ea580c;   /* Button hover color */
   --color-steel: #38bdf8;          /* Technical cyan accent */
   ```
3. Replace these hex codes with your own brand palette (e.g. Navy Blue `#1e3a8a`, Forest Green `#15803d`, or Bold Red `#dc2626`). Every button, link, and accent on the site will automatically update!

### 4. How to Change Fonts
1. Open `css/style.css`.
2. Look at lines 53–57 under Typography Scale:
   ```css
   --font-family-display: "Plus Jakarta Sans", system-ui, sans-serif;
   --font-family-body: "Plus Jakarta Sans", system-ui, sans-serif;
   ```
3. To use a different Google Font (e.g., `Inter`, `Roboto`, or `Montserrat`), update the `<link href="...">` in the `<head>` of your HTML files, then update `--font-family-display` in `css/style.css`.

### 5. How to Add Products
1. Open `js/products.js`.
2. Locate the `PRODUCTS_DATA` array around line 25.
3. Copy one of the existing product objects and paste it at the end of the array before the closing bracket `]`:
   ```javascript
   {
     id: 13,
     name: "Heavy Duty Wheelbarrow 120L",
     code: "APX-WHL-13",
     category: "General Hardware",
     price: "$85.00",
     numericPrice: 85.00,
     image: "images/products/product-13.jpg",
     description: "Pneumatic tire construction wheelbarrow with 120L heavy-gauge steel tray.",
     specifications: [
       "Capacity: 120 Litres / 200 kg",
       "Wheel: 16-Inch Pneumatic 4-Ply Tire",
       "Frame: Heavy Tubular Steel with Front Tipper Nose"
     ],
     sizes: ["120L Steel Tray", "150L Poly Tray"],
     colours: ["Apex Orange"],
     availability: "In Stock",
     isFeatured: true,
     rating: 4.8
   },
   ```
4. Save the file. The new product will instantly appear in the catalog, search bar, and category filters!

### 6. How to Remove Products
1. Open `js/products.js`.
2. Find the product object inside `PRODUCTS_DATA` by its `id` or `name`.
3. Delete that entire block from `{` to `},`.
4. Save the file.

### 7. How to Add Product Images
1. Save your product photo (JPEG or PNG format, recommended size: `800x600` or `4:3` aspect ratio).
2. Save it inside the `images/products/` folder (for example: `images/products/angle-grinder.jpg`).
3. In `js/products.js`, set the `image` property of that product:
   ```javascript
   image: "images/products/angle-grinder.jpg",
   ```

### 8. How to Change Prices
1. Open `js/products.js`.
2. Find the product in `PRODUCTS_DATA`.
3. Change both `price` (display string) and `numericPrice` (used for sorting from lowest to highest):
   ```javascript
   price: "$175.00",
   numericPrice: 175.00,
   ```

### 9. How to Change Category Pictures (Inventory Classification)
1. Save your category photos (recommended size: `600x400` or `16:10` aspect ratio) in `images/categories/`:
   - `images/categories/power-tools.jpg`
   - `images/categories/building-materials.jpg`
   - `images/categories/plumbing.jpg`
   - `images/categories/electrical.jpg`
   - `images/categories/roofing.jpg`
   - `images/categories/hand-tools.jpg`
   - `images/categories/paint.jpg`
   - `images/categories/fasteners.jpg`
2. Open `index.html`, find the `<div class="categories-grid">` section (around line 290).
3. Look for the `<!-- PLACEHOLDER FOR CATEGORY PICTURE -->` comments and replace `images/categories/cat-power-tools.svg` with your photo path:
   ```html
   <img src="images/categories/power-tools.jpg" alt="Power Tools" class="category-img" loading="lazy">
   ```

### 10. How to Change Quick Highlight Pictures
1. Save 4 photos (recommended size: `600x360` or `16:9` aspect ratio) in `images/highlights/`:
   - `images/highlights/quality-products.jpg` (Certified Quality Products)
   - `images/highlights/professional-service.jpg` (Engineering Consultation & Take-offs)
   - `images/highlights/competitive-prices.jpg` (Wholesale Depot & Value Tiers)
   - `images/highlights/reliable-delivery.jpg` (Crane Delivery Logistics Fleet)
2. Open `index.html`, find `<section class="container quick-highlights-section">` (around line 225).
3. Look for the `<!-- PLACEHOLDER FOR HIGHLIGHT PICTURE -->` comments and replace the SVG paths with your images:
   ```html
   <img src="images/highlights/quality-products.jpg" alt="Quality Products" class="highlight-img" loading="lazy">
   ```

### 11. How the Hero Slideshow Works (Purely Automatic)
- The hero carousel transitions automatically every 5 seconds without manual next/previous buttons.
- The indicator dots at the bottom show which slide is currently active and allow direct clicking.
- Hovering over the carousel automatically pauses the slide transition so customers can comfortably read the text or click the buttons.
- To change the slide interval time, open `index.html`, scroll to `const intervalMs = 5000;` near line 975, and set your desired milliseconds (e.g. `6000` for 6 seconds).

### 12. How to Add Services
1. Open `services.html`.
2. Scroll to the `.services-grid` section around line 70.
3. Copy an existing `.service-card` block and customize the title, description, and checklist items.
4. Set the link button to pre-fill the quote form:
   ```html
   <a href="contact.html?product=My%20New%20Service" class="btn btn-outline btn-sm">
     Request Quote →
   </a>
   ```

### 11. How to Change WhatsApp Number
1. Open `js/main.js`.
2. Locate line 35 inside `BUSINESS_CONFIG`:
   ```javascript
   whatsappNumber: "18005550199",
   ```
3. Type your WhatsApp phone number with the country code, without the `+` sign or spaces (e.g. `14155552671` for US or `447911123456` for UK).
4. Save the file. Every WhatsApp button on the entire site (floating button, product cards, showroom stage, and contact form) will now chat with your number!

### 12. How to Change Facebook Link
1. Open `js/main.js`.
2. Locate line 47 inside `BUSINESS_CONFIG`:
   ```javascript
   facebookUrl: "https://facebook.com/your-business-page",
   ```

### 13. How to Change TikTok Link
1. Open `js/main.js`.
2. Locate line 48 inside `BUSINESS_CONFIG`:
   ```javascript
   tiktokUrl: "https://tiktok.com/@your-business-handle",
   ```

### 14. How to Change Phone Number
1. Open `js/main.js`.
2. Locate line 32:
   ```javascript
   phone: "+1 (800) 555-0199",
   ```
3. Change it to your office or mobile number. All `<span class="company-phone-text">` tags will automatically update.

### 15. How to Change Email
1. Open `js/main.js`.
2. Locate line 38:
   ```javascript
   email: "sales@yourhardwarecompany.com",
   ```

### 16. How to Change Address
1. Open `js/main.js`.
2. Locate line 41:
   ```javascript
   address: "Your Street Address, City, Country",
   ```

### 17. How to Change Opening Hours
1. Open `js/main.js`.
2. Locate line 44:
   ```javascript
   openingHours: "Mon - Sat: 7:00 AM - 6:00 PM | Sun: Closed",
   ```

### 18. How to Change Hero Images
1. Save your hero banner photos inside `images/hero/` (e.g. `images/hero/hero-01.jpg`, `images/hero/hero-02.jpg`).
2. Open `index.html`.
3. Find `<section class="hero-carousel-container" id="hero-slider">` around line 110.
4. Replace `images/hero/hero-1.svg` with your photo path:
   ```html
   <img src="images/hero/hero-01.jpg" alt="Hero 1" class="hero-bg-media">
   ```

### 19. How to Add Slideshow Images
1. Open `index.html`.
2. In the `#hero-slider` section, copy one of the `<div class="hero-slide">` blocks.
3. Paste it directly below the existing slides.
4. In the `<div class="hero-indicators">` block at the bottom of the hero, add a new indicator dot:
   ```html
   <div class="hero-indicator-dot" data-slide="3"></div>
   ```

### 20. How to Add Testimonials
1. Open `index.html`.
2. Find `#testimonials-slider` around line 380.
3. Copy one of the `<div class="testimonial-slide">` blocks:
   ```html
   <div class="testimonial-slide">
     <div class="testimonial-stars">★★★★★</div>
     <p class="testimonial-quote">"Your customer's quote goes here..."</p>
     <div class="testimonial-author-name">Customer Name</div>
     <div class="testimonial-author-role">Job Title, Company Name</div>
   </div>
   ```

### 21. How to Change Company Information
- Primary business information is stored in `BUSINESS_CONFIG` in `js/main.js`.
- Story, history, mission, and vision text are placed in `about.html` with explicit placeholders such as `[WRITE YOUR MISSION HERE]` and `[WRITE YOUR VISION HERE]`.

### 22. How to Customize the Footer
1. The footer is located at the bottom of every HTML page inside `<footer class="site-footer">`.
2. It is divided into 4 columns:
   - Column 1: Logo & Social links (WhatsApp, Facebook, TikTok ONLY).
   - Column 2: Quick Links to main pages.
   - Column 3: Direct links to popular product departments.
   - Column 4: Phone, Email, Address, and Hours.

### 23. How to Deploy the Website
You can deploy this website anywhere in under 2 minutes:
- **Netlify / Vercel / GitHub Pages**: Simply drag-and-drop the project folder or push to a GitHub repository.
- **Traditional CPanel / Apache / Nginx**: Upload the files directly to your `public_html` directory via FTP.
- **Vite Production Build**: Run `npm run build` to generate an optimized `/dist` folder.

### 24. How to Organize Images
Keep your media files organized in the `images/` directory:
- `images/logo/` → Store brand logos and icons here.
- `images/hero/` → Store high-resolution carousel photos (`1600x900px`).
- `images/products/` → Store square or 4:3 product photos (`600x500px`).
- `images/projects/` → Store worksite and project case study photos (`800x600px`).
- `images/team/` → Store square team portraits (`300x300px`).

### 25. How to Add More Products
See Question #5 above. There is no limit to how many products you can add to `PRODUCTS_DATA` in `js/products.js`!

### 26. How to Modify JavaScript Features
- **Theme Switcher**: In `js/main.js` (`initThemeSystem`).
- **Product Search & Filtering**: In `js/products.js` (`renderProductsCatalog`).
- **Showcase Room Stage**: In `js/showcase.js` (`renderShowroomStage`).
- **Contact Form Validation**: In `js/contact.js` (`validateFormInputs`).

---

## 🔒 Social Media Policy
Per project specifications, this website displays **ONLY** three verified contact & social channels:
1. **WhatsApp**
2. **Facebook**
3. **TikTok**

No unauthorized networks (such as Instagram, Twitter/X, LinkedIn, or YouTube) are present.

---

© 2026 Apex Hardware & Construction Supplies. All Rights Reserved.

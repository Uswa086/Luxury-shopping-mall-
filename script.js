
"use strict";

/* =========================================================
   THE GRAND — WEBSITE DEMO CONFIGURATION
   Replace these values with the client's verified details.
   ========================================================= */
const CONFIG = {
  mallName: "THE GRAND",
  whatsapp: "923000000000", // Replace with real number, country code included, no +
  email: "hello@example.com", // Replace with the client's real email
  location: "Add the verified mall address here",
  currency: "Rs."
};

const money = amount => `${CONFIG.currency} ${Number(amount).toLocaleString("en-PK")}`;
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
}[char]));

function safeWhatsAppURL(message) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

function openWhatsApp(message) {
  if (CONFIG.whatsapp === "923000000000") {
    showModal("WhatsApp setup required", `
      <p class="modal-note">Before using real WhatsApp orders, open <code>script.js</code> and replace the demo WhatsApp number in the CONFIG section with the client's number, including country code and without the + sign.</p>
      <button class="btn btn-dark full-width" id="modalDone">Got it</button>
    `);
    return;
  }
  window.open(safeWhatsAppURL(message), "_blank", "noopener,noreferrer");
}

/* =========================================================
   SAMPLE PRODUCT CATALOGUE
   Replace demo products, prices and photos with real stock.
   ========================================================= */
const products = [
  {
    id: 1, name: "Noor Lawn Ensemble", category: "Ladies",
    fabric: "Lawn", price: 4500, badge: "BESTSELLER",
    description: "Unstitched printed lawn fabric.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 2, name: "Ivory Cotton Edit", category: "Ladies",
    fabric: "Cotton", price: 5200, badge: "NEW ARRIVAL",
    description: "Elegant cotton fabric for everyday wear.",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 3, name: "Royal Silk Collection", category: "Ladies",
    fabric: "Silk", price: 12500, badge: "EXCLUSIVE",
    description: "Silk fabric for elevated occasions.",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 4, name: "Classic Linen Suit", category: "Ladies",
    fabric: "Linen", price: 6800, badge: "",
    description: "Breathable linen fabric, unstitched.",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 5, name: "Signature Wash & Wear", category: "Gents",
    fabric: "Wash & Wear", price: 4800, badge: "POPULAR",
    description: "Unstitched fabric for a classic suit.",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 6, name: "Premium Khaddar", category: "Gents",
    fabric: "Khaddar", price: 5600, badge: "",
    description: "Textured unstitched winter fabric.",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 7, name: "Everyday Cotton", category: "Gents",
    fabric: "Cotton", price: 4300, badge: "VALUE PICK",
    description: "Comfortable unstitched cotton fabric.",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 8, name: "Festive Lawn Print", category: "Ladies",
    fabric: "Lawn", price: 7500, badge: "LIMITED EDITION",
    description: "Statement unstitched lawn fabric.",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e8?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 9, name: "Kids Celebration Wear", category: "Kids",
    fabric: "Cotton", price: 4200, badge: "FAMILY EDIT",
    description: "A sample children's fashion item.",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 10, name: "Beauty Essentials Set", category: "Beauty",
    fabric: "Beauty", price: 4600, badge: "BEAUTY EDIT",
    description: "A sample beauty collection product.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 11, name: "Classic Leather Shoes", category: "Shoes",
    fabric: "Other", price: 8900, badge: "SIGNATURE",
    description: "A sample footwear catalogue item.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 12, name: "Luxury Linen Edit", category: "Gents",
    fabric: "Linen", price: 10200, badge: "PREMIUM",
    description: "Premium linen fabric for a tailored look.",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=85"
  }
];

/* Demo mall directory. Confirm real tenants, floors and hours. */
const stores = [
  { name: "Khaadi", category: "Fashion", floor: "Ground", shop: "G-01", hours: "Demo: 11 AM–10 PM" },
  { name: "Sapphire", category: "Fashion", floor: "Ground", shop: "G-05", hours: "Demo: 11 AM–10 PM" },
  { name: "Nike", category: "Sportswear", floor: "First", shop: "F-12", hours: "Demo: 11 AM–10 PM" },
  { name: "Gucci", category: "Luxury Fashion", floor: "Second", shop: "S-03", hours: "Demo: 12 PM–10 PM" },
  { name: "Beauty Studio", category: "Beauty", floor: "First", shop: "F-08", hours: "Demo: 11 AM–10 PM" },
  { name: "The Food Hall", category: "Dining", floor: "Second", shop: "S-FC", hours: "Demo: 12 PM–11 PM" },
  { name: "Grand Cinema", category: "Entertainment", floor: "Second", shop: "S-C1", hours: "Show times vary" },
  { name: "Kids Corner", category: "Kids", floor: "First", shop: "F-20", hours: "Demo: 11 AM–10 PM" }
];

const floorLayouts = {
  Ground: [
    ["Khaadi", "G-01", "featured"], ["Atrium", "", "aisle"],
    ["Sapphire", "G-05", ""], ["Fashion", "G-09", ""],
    ["Main Entrance", "", "aisle"], ["Central Atrium", "", "aisle"],
    ["Luxury Store", "G-12", ""], ["Guest Services", "G-00", ""],
    ["Café", "G-18", ""], ["Escalators", "", "aisle"],
    ["Beauty", "G-20", ""], ["Exit", "", "aisle"]
  ],
  First: [
    ["Nike", "F-12", "featured"], ["Atrium", "", "aisle"],
    ["Beauty Studio", "F-08", ""], ["Kids Corner", "F-20", ""],
    ["Fashion", "F-02", ""], ["Central Atrium", "", "aisle"],
    ["Lifestyle", "F-15", ""], ["Escalators", "", "aisle"],
    ["Family Lounge", "F-18", ""], ["Restrooms", "", "aisle"],
    ["Accessories", "F-22", ""], ["Exit", "", "aisle"]
  ],
  Second: [
    ["Gucci", "S-03", "featured"], ["Atrium", "", "aisle"],
    ["Food Hall", "S-FC", ""], ["Grand Cinema", "S-C1", ""],
    ["Fine Dining", "S-02", ""], ["Central Atrium", "", "aisle"],
    ["VIP Lounge", "S-V1", ""], ["Escalators", "", "aisle"],
    ["Terrace Café", "S-08", ""], ["Restrooms", "", "aisle"],
    ["Event Space", "S-10", ""], ["Exit", "", "aisle"]
  ]
};

/* =========================================================
   GENERAL UTILITIES
   ========================================================= */
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

function showModal(title, html) {
  $("#modalTitle").textContent = title;
  $("#modalContent").innerHTML = html;
  $("#modalBackdrop").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  $("#modalBackdrop").classList.remove("open");
  document.body.style.overflow = "";
}

$("#modalClose").addEventListener("click", closeModal);
$("#modalBackdrop").addEventListener("click", event => {
  if (event.target === $("#modalBackdrop")) closeModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModal();
    closeCart();
  }
});

document.addEventListener("click", event => {
  if (event.target.closest("#modalDone")) closeModal();
});

$("#year").textContent = new Date().getFullYear();

/* Mobile navigation */
$("#menuToggle").addEventListener("click", () => {
  $("#navMenu").classList.toggle("open");
});
$$("#navMenu a").forEach(link => link.addEventListener("click", () => {
  $("#navMenu").classList.remove("open");
}));

/* =========================================================
   MALL DIRECTORY
   ========================================================= */
function renderStores() {
  const term = $("#storeSearch").value.trim().toLowerCase();
  const floor = $("#floorFilter").value;

  const filtered = stores.filter(store => {
    const searchable = `${store.name} ${store.category} ${store.floor} ${store.shop}`.toLowerCase();
    return searchable.includes(term) && (floor === "all" || store.floor === floor);
  });

  $("#storeGrid").innerHTML = filtered.length ? filtered.map(store => `
    <article class="store-card">
      <div class="store-monogram">${escapeHTML(store.name.slice(0, 1))}</div>
      <div class="store-type">${escapeHTML(store.category)}</div>
      <h3>${escapeHTML(store.name)}</h3>
      <p>${escapeHTML(store.floor)} Floor · Shop ${escapeHTML(store.shop)}</p>
      <p>${escapeHTML(store.hours)}</p>
    </article>
  `).join("") : `<div class="empty-state">No matching stores. Try a different search.</div>`;
}

$("#storeSearch").addEventListener("input", renderStores);
$("#floorFilter").addEventListener("change", renderStores);
renderStores();

/* =========================================================
   INTERACTIVE FLOOR MAP
   ========================================================= */
function renderFloor(floor) {
  $("#mapFloorTitle").textContent = `${floor.toUpperCase()} FLOOR`;
  $("#floorMap").innerHTML = floorLayouts[floor].map(([name, shop, style]) => `
    <button class="map-shop ${style || ""}" ${style === "aisle" ? 'disabled' : ""}
      data-shop="${escapeHTML(name)}" data-code="${escapeHTML(shop)}">
      ${escapeHTML(name)}
      ${shop ? `<small>${escapeHTML(shop)}</small>` : ""}
    </button>
  `).join("");

  $$(".floor-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.floor === floor);
  });
}

$$(".floor-tab").forEach(tab => tab.addEventListener("click", () => {
  renderFloor(tab.dataset.floor);
}));

$("#floorMap").addEventListener("click", event => {
  const shop = event.target.closest(".map-shop");
  if (!shop || shop.disabled) return;
  const found = stores.find(item => item.name === shop.dataset.shop);
  showModal(shop.dataset.shop, `
    <p>${found ? escapeHTML(found.category) : "Mall destination"}</p>
    <p class="modal-note">${shop.dataset.code ? `Shop number: ${escapeHTML(shop.dataset.code)}.` : "Explore this destination."}
    ${found ? `<br>${escapeHTML(found.floor)} Floor · ${escapeHTML(found.hours)}` : ""}</p>
    <button class="btn btn-dark full-width" id="modalDone">Close</button>
  `);
});
renderFloor("Ground");

/* =========================================================
   SHOPPING CATEGORIES, SEARCH AND FILTERS
   ========================================================= */
let activeCategory = "All";
let cart = JSON.parse(localStorage.getItem("grandCart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("grandWishlist") || "[]");

function saveCart() {
  localStorage.setItem("grandCart", JSON.stringify(cart));
  renderCart();
}
function saveWishlist() {
  localStorage.setItem("grandWishlist", JSON.stringify(wishlist));
}

function filteredProducts() {
  const search = $("#productSearch").value.trim().toLowerCase();
  const fabric = $("#fabricFilter").value;
  const price = $("#priceFilter").value;
  const sort = $("#sortFilter").value;

  let result = products.filter(product => {
    const text = `${product.name} ${product.category} ${product.fabric} ${product.description}`.toLowerCase();
    const categoryMatch = activeCategory === "All" || product.category === activeCategory;
    const searchMatch = text.includes(search);
    const fabricMatch = fabric === "all" || product.fabric === fabric;
    const priceMatch = price === "all" || product.price >= Number(price);
    return categoryMatch && searchMatch && fabricMatch && priceMatch;
  });

  if (sort === "low") result.sort((a, b) => a.price - b.price);
  if (sort === "high") result.sort((a, b) => b.price - a.price);
  if (sort === "name") result.sort((a, b) => a.name.localeCompare(b.name));
  return result;
}

function renderProducts() {
  const result = filteredProducts();

  $("#productGrid").innerHTML = result.length ? result.map(product => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img class="product-image" src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}" loading="lazy">
        ${product.badge ? `<span class="product-badge">${escapeHTML(product.badge)}</span>` : ""}
        <button class="wishlist-btn ${wishlist.includes(product.id) ? "saved" : ""}"
          data-wish="${product.id}" aria-label="Toggle ${escapeHTML(product.name)} wishlist">
          ${wishlist.includes(product.id) ? "♥" : "♡"}
        </button>
      </div>
      <div class="product-info">
        <span class="product-category">${escapeHTML(product.category)} · ${escapeHTML(product.fabric)}</span>
        <h3>${escapeHTML(product.name)}</h3>
        <p class="product-description">${escapeHTML(product.description)}</p>
        <div class="product-price">${money(product.price)} <small> / item</small></div>
        <div class="product-actions">
          <button class="btn btn-dark" data-add="${product.id}">Add to Bag</button>
          <button class="wa-product" data-product-wa="${product.id}" aria-label="Ask about this product on WhatsApp">✆</button>
        </div>
        <button class="footer-link" style="margin-top:12px" data-buy="${product.id}">Buy Now ↗</button>
      </div>
    </article>
  `).join("") : `<div class="empty-state">No products match these filters. Try changing the category, fabric or price.</div>`;
}

$("#categoryPills").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  $$("#categoryPills .pill").forEach(pill => pill.classList.toggle("active", pill === button));
  renderProducts();
});

["productSearch", "fabricFilter", "priceFilter", "sortFilter"].forEach(id => {
  $(`#${id}`).addEventListener(id === "productSearch" ? "input" : "change", renderProducts);
});

$("#productGrid").addEventListener("click", event => {
  const wish = event.target.closest("[data-wish]");
  const add = event.target.closest("[data-add]");
  const buy = event.target.closest("[data-buy]");
  const wa = event.target.closest("[data-product-wa]");

  if (wish) {
    const id = Number(wish.dataset.wish);
    wishlist = wishlist.includes(id) ? wishlist.filter(item => item !== id) : [...wishlist, id];
    saveWishlist();
    renderProducts();
  }

  if (add) {
    addToCart(Number(add.dataset.add));
    showCart();
  }

  if (buy) {
    addToCart(Number(buy.dataset.buy));
    showCart();
  }

  if (wa) {
    const product = products.find(item => item.id === Number(wa.dataset.productWa));
    if (product) openWhatsApp(`Hello! I would like to ask about ${product.name}, priced at ${money(product.price)}.`);
  }
});

function addToCart(id) {
  const existing = cart.find(item => item.id === id);
  if (existing) existing.quantity += 1;
  else cart.push({ id, quantity: 1 });
  saveCart();
}

function updateQuantity(id, change) {
  const item = cart.find(product => product.id === id);
  if (!item) return;
  item.quantity += change;
  if (item.quantity <= 0) cart = cart.filter(product => product.id !== id);
  saveCart();
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => {
    const product = products.find(product => product.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  $("#cartCount").textContent = count;
  $("#cartTotal").textContent = money(total);

  $("#cartItems").innerHTML = cart.length ? cart.map(item => {
    const product = products.find(product => product.id === item.id);
    if (!product) return "";
    return `
      <article class="cart-item">
        <img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}">
        <div>
          <h4>${escapeHTML(product.name)}</h4>
          <p>${money(product.price)} each</p>
          <div class="qty-controls">
            <button data-qty="${product.id}" data-change="-1" aria-label="Decrease quantity">−</button>
            <span>${item.quantity}</span>
            <button data-qty="${product.id}" data-change="1" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button data-remove="${product.id}">Remove</button>
      </article>
    `;
  }).join("") : `<div class="empty-state">Your bag is waiting for something special.</div>`;
}

$("#cartItems").addEventListener("click", event => {
  const quantity = event.target.closest("[data-qty]");
  const remove = event.target.closest("[data-remove]");
  if (quantity) updateQuantity(Number(quantity.dataset.qty), Number(quantity.dataset.change));
  if (remove) {
    cart = cart.filter(item => item.id !== Number(remove.dataset.remove));
    saveCart();
  }
});

function showCart() {
  $("#cartDrawer").classList.add("open");
  $("#cartOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  $("#cartDrawer").classList.remove("open");
  $("#cartOverlay").classList.remove("open");
  if (!$("#modalBackdrop").classList.contains("open")) document.body.style.overflow = "";
}

$("#cartOpen").addEventListener("click", showCart);
$("#cartClose").addEventListener("click", closeCart);
$("#cartOverlay").addEventListener("click", closeCart);
renderProducts();
renderCart();

/* Demo checkout: opens WhatsApp with a prepared order request. */
$("#checkoutButton").addEventListener("click", () => {
  if (!cart.length) {
    showModal("Your bag is empty", `<p class="modal-note">Add a product to your bag before placing an order.</p><button class="btn btn-dark full-width" id="modalDone">Continue shopping</button>`);
    return;
  }

  const orderLines = cart.map(item => {
    const product = products.find(product => product.id === item.id);
    return product ? `${product.name} × ${item.quantity} — ${money(product.price * item.quantity)}` : "";
  }).filter(Boolean);

  const total = cart.reduce((sum, item) => {
    const product = products.find(product => product.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  showModal("Complete your order", `
    <form id="checkoutForm" class="modal-form">
      <p class="modal-note">${orderLines.map(escapeHTML).join("<br>")}<br><br><strong>Total: ${money(total)}</strong></p>
      <label>Your full name<input name="name" required autocomplete="name"></label>
      <label>Phone number<input name="phone" required type="tel" autocomplete="tel"></label>
      <label>Delivery address<textarea name="address" required autocomplete="street-address"></textarea></label>
      <label>Payment preference
        <select name="payment">
          <option>Cash on Delivery</option><option>Bank Transfer</option>
          <option>Easypaisa</option><option>JazzCash</option>
        </select>
      </label>
      <button class="btn btn-gold full-width" type="submit">Send Order Request</button>
      <p class="modal-note">This sends a request to the store; it does not process payment or confirm stock.</p>
    </form>
  `);

  $("#checkoutForm").addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      `New order request — ${CONFIG.mallName}`,
      `

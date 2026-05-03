// =================== DATA ===================
const ALL_PRODUCTS = [
  // FRUITS
  {id:1,name:'Red Apples',cat:'fruits',emoji:'🍎',price:89,oldPrice:120,weight:'1 kg',rating:4.8,reviews:312,badge:'sale',organic:false},
  {id:2,name:'Bananas',cat:'fruits',emoji:'🍌',price:45,oldPrice:null,weight:'500 g',rating:4.6,reviews:198,badge:'new',organic:false},
  {id:3,name:'Sweet Mangoes',cat:'fruits',emoji:'🥭',price:149,oldPrice:180,weight:'1 kg',rating:4.9,reviews:421,badge:'hot',organic:false},
  {id:4,name:'Strawberries',cat:'fruits',emoji:'🍓',price:119,oldPrice:150,weight:'250 g',rating:4.7,reviews:267,badge:'sale',organic:true},
  {id:5,name:'Watermelon',cat:'fruits',emoji:'🍉',price:79,oldPrice:null,weight:'2 kg',rating:4.5,reviews:134,badge:null,organic:false},
  {id:6,name:'Grapes',cat:'fruits',emoji:'🍇',price:99,oldPrice:130,weight:'500 g',rating:4.6,reviews:189,badge:'sale',organic:true},
  // VEGETABLES
  {id:7,name:'Broccoli',cat:'vegetables',emoji:'🥦',price:59,oldPrice:80,weight:'500 g',rating:4.7,reviews:243,badge:'organic',organic:true},
  {id:8,name:'Carrots',cat:'vegetables',emoji:'🥕',price:35,oldPrice:null,weight:'500 g',rating:4.5,reviews:176,badge:'new',organic:false},
  {id:9,name:'Tomatoes',cat:'vegetables',emoji:'🍅',price:49,oldPrice:65,weight:'500 g',rating:4.4,reviews:298,badge:null,organic:false},
  {id:10,name:'Spinach',cat:'vegetables',emoji:'🥬',price:29,oldPrice:null,weight:'250 g',rating:4.6,reviews:156,badge:'organic',organic:true},
  {id:11,name:'Bell Peppers',cat:'vegetables',emoji:'🫑',price:69,oldPrice:90,weight:'500 g',rating:4.5,reviews:112,badge:'sale',organic:false},
  {id:12,name:'Potatoes',cat:'vegetables',emoji:'🥔',price:39,oldPrice:null,weight:'1 kg',rating:4.3,reviews:445,badge:null,organic:false},
  // DAIRY
  {id:13,name:'Full Cream Milk',cat:'dairy',emoji:'🥛',price:68,oldPrice:null,weight:'1 litre',rating:4.8,reviews:534,badge:null,organic:false},
  {id:14,name:'Greek Yoghurt',cat:'dairy',emoji:'🫙',price:89,oldPrice:110,weight:'400 g',rating:4.7,reviews:312,badge:'hot',organic:false},
  {id:15,name:'Cheddar Cheese',cat:'dairy',emoji:'🧀',price:199,oldPrice:250,weight:'200 g',rating:4.9,reviews:287,badge:'sale',organic:false},
  {id:16,name:'Butter',cat:'dairy',emoji:'🧈',price:75,oldPrice:null,weight:'100 g',rating:4.6,reviews:198,badge:'new',organic:false},
  // BAKERY
  {id:17,name:'Sourdough Bread',cat:'bakery',emoji:'🍞',price:89,oldPrice:110,weight:'400 g',rating:4.8,reviews:156,badge:'hot',organic:false},
  {id:18,name:'Croissants',cat:'bakery',emoji:'🥐',price:129,oldPrice:null,weight:'4 pcs',rating:4.9,reviews:234,badge:'new',organic:false},
  {id:19,name:'Blueberry Muffins',cat:'bakery',emoji:'🧁',price:99,oldPrice:120,weight:'2 pcs',rating:4.7,reviews:178,badge:'sale',organic:false},
  {id:20,name:'Whole Wheat Bread',cat:'bakery',emoji:'🍞',price:65,oldPrice:null,weight:'400 g',rating:4.5,reviews:289,badge:'organic',organic:true},
  // MEAT
  {id:21,name:'Chicken Breast',cat:'meat',emoji:'🍗',price:249,oldPrice:299,weight:'500 g',rating:4.8,reviews:412,badge:'sale',organic:false},
  {id:22,name:'Salmon Fillet',cat:'meat',emoji:'🐟',price:399,oldPrice:499,weight:'300 g',rating:4.9,reviews:267,badge:'hot',organic:false},
  {id:23,name:'Eggs',cat:'meat',emoji:'🥚',price:89,oldPrice:null,weight:'12 pcs',rating:4.7,reviews:678,badge:null,organic:true},
  // SNACKS
  {id:24,name:'Mixed Nuts',cat:'snacks',emoji:'🥜',price:199,oldPrice:249,weight:'200 g',rating:4.8,reviews:312,badge:'sale',organic:false},
  {id:25,name:'Dark Chocolate',cat:'snacks',emoji:'🍫',price:149,oldPrice:180,weight:'100 g',rating:4.9,reviews:456,badge:'hot',organic:false},
  {id:26,name:'Potato Chips',cat:'snacks',emoji:'🥔',price:45,oldPrice:null,weight:'150 g',rating:4.3,reviews:534,badge:null,organic:false},
  {id:27,name:'Granola Bars',cat:'snacks',emoji:'🍫',price:129,oldPrice:155,weight:'5 pcs',rating:4.6,reviews:198,badge:'new',organic:true},
  // BEVERAGES
  {id:28,name:'Orange Juice',cat:'beverages',emoji:'🍊',price:99,oldPrice:120,weight:'1 litre',rating:4.7,reviews:234,badge:'sale',organic:false},
  {id:29,name:'Green Tea',cat:'beverages',emoji:'🍵',price:149,oldPrice:null,weight:'25 bags',rating:4.8,reviews:312,badge:'organic',organic:true},
  {id:30,name:'Sparkling Water',cat:'beverages',emoji:'💧',price:55,oldPrice:null,weight:'1 litre',rating:4.5,reviews:156,badge:'new',organic:false},
  // FROZEN
  {id:31,name:'Frozen Pizza',cat:'frozen',emoji:'🍕',price:299,oldPrice:380,weight:'400 g',rating:4.4,reviews:289,badge:'sale',organic:false},
  {id:32,name:'Ice Cream',cat:'frozen',emoji:'🍦',price:179,oldPrice:220,weight:'500 ml',rating:4.8,reviews:534,badge:'hot',organic:false},
];

// =================== STATE ===================
let cart = {};
let wishlist = new Set();
let currentCat = 'all';
let currentSort = 'default';
let displayedCount = 12;
let filteredProducts = [...ALL_PRODUCTS];

// =================== INIT ===================
window.addEventListener('DOMContentLoaded', () => {
  renderProducts();
});

// =================== RENDER ===================
function getFiltered() {
  let products = currentCat === 'all' ? [...ALL_PRODUCTS] : ALL_PRODUCTS.filter(p => p.cat === currentCat);
  const search = document.getElementById('searchInput').value.trim().toLowerCase();
  if (search) products = products.filter(p => p.name.toLowerCase().includes(search));
  if (currentSort === 'price-low') products.sort((a,b) => a.price - b.price);
  else if (currentSort === 'price-high') products.sort((a,b) => b.price - a.price);
  else if (currentSort === 'rating') products.sort((a,b) => b.rating - a.rating);
  else if (currentSort === 'newest') products.sort((a,b) => b.id - a.id);
  return products;
}

function renderProducts() {
  filteredProducts = getFiltered();
  const grid = document.getElementById('productsGrid');
  const slice = filteredProducts.slice(0, displayedCount);
  grid.innerHTML = slice.map(p => productCard(p)).join('');
  document.getElementById('loadMoreBtn').style.display = filteredProducts.length > displayedCount ? '' : 'none';
}

function productCard(p) {
  const inCart = cart[p.id] && cart[p.id] > 0;
  const qty = cart[p.id] || 0;
  const badgeMap = {sale:'badge-sale',new:'badge-new',hot:'badge-hot',organic:'badge-organic'};
  const badgeTxt = {sale:'🔖 Sale',new:'✨ New',hot:'🔥 Hot',organic:'🌿 Organic'};
  return `
  <div class="product-card${inCart?' in-cart':''}" id="pc-${p.id}">
    ${p.badge ? `<div class="product-badge ${badgeMap[p.badge]}">${badgeTxt[p.badge]}</div>` : ''}
    <button class="wishlist-btn${wishlist.has(p.id)?' active':''}" onclick="toggleWishlist(${p.id},this)" title="Wishlist">
      ${wishlist.has(p.id) ? '❤️' : '🤍'}
    </button>
    <div class="product-img" onclick="quickView(${p.id})">${p.emoji}</div>
    <div class="product-info">
      <div class="product-cat">${p.cat}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-weight">${p.weight}${p.organic?' · 🌿 Organic':''}</div>
      <div class="product-rating">
        <span class="stars">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5-Math.floor(p.rating))}</span>
        <span class="rating-count">${p.rating} (${p.reviews})</span>
      </div>
      <div class="product-price-row">
        <div>
          <span class="product-price">₹${p.price}</span>
          ${p.oldPrice ? `<span class="product-old-price"> ₹${p.oldPrice}</span>` : ''}
        </div>
        ${inCart
          ? `<div class="qty-ctrl">
              <button class="qty-btn" onclick="changeQty(${p.id},-1)">−</button>
              <span class="qty-num" id="qty-${p.id}">${qty}</span>
              <button class="qty-btn" onclick="changeQty(${p.id},1)">+</button>
            </div>`
          : `<button class="add-btn" onclick="addToCart(${p.id})">+ Add</button>`
        }
      </div>
    </div>
  </div>`;
}

// =================== CART ===================
function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  updateCartCount();
  const p = ALL_PRODUCTS.find(x => x.id === id);
  showToast(`✅ ${p.emoji} ${p.name} added to cart!`,'success');
  rerenderCard(id);
  updateCartDrawer();
}

function changeQty(id, delta) {
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) { delete cart[id]; }
  updateCartCount();
  rerenderCard(id);
  updateCartDrawer();
}

function removeFromCart(id) {
  delete cart[id];
  updateCartCount();
  updateCartDrawer();
  rerenderCard(id);
}

function rerenderCard(id) {
  const el = document.getElementById('pc-' + id);
  if (!el) return;
  const p = ALL_PRODUCTS.find(x => x.id === id);
  el.outerHTML = productCard(p);
}

function updateCartCount() {
  const total = Object.values(cart).reduce((a,b) => a+b, 0);
  document.getElementById('cartCount').textContent = total;
}

function toggleCart() {
  const d = document.getElementById('cartDrawer');
  const o = document.getElementById('cartOverlay');
  d.classList.toggle('open');
  o.classList.toggle('open');
  updateCartDrawer();
}

function updateCartDrawer() {
  const body = document.getElementById('cartBody');
  const footer = document.getElementById('cartFooter');
  const ids = Object.keys(cart).map(Number).filter(id => cart[id] > 0);
  if (ids.length === 0) {
    body.innerHTML = `<div class="cart-empty">
      <div class="empty-icon">🛒</div>
      <p>Your cart is empty</p>
      <button onclick="toggleCart()">Start Shopping</button>
    </div>`;
    footer.style.display = 'none';
    return;
  }
  let subtotal = 0;
  body.innerHTML = ids.map(id => {
    const p = ALL_PRODUCTS.find(x => x.id === id);
    const qty = cart[id];
    subtotal += p.price * qty;
    return `<div class="cart-item">
      <div class="cart-item-img">${p.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-price">₹${p.price} × ${qty} = <strong>₹${p.price*qty}</strong></div>
        <div class="cart-item-qty">
          <button class="cq-btn" onclick="changeQty(${id},-1)">−</button>
          <span class="cq-num">${qty}</span>
          <button class="cq-btn" onclick="changeQty(${id},1)">+</button>
        </div>
      </div>
      <button class="cart-remove" onclick="removeFromCart(${id})" title="Remove">🗑</button>
    </div>`;
  }).join('');
  footer.style.display = '';
  document.getElementById('cartSubtotal').textContent = '₹' + subtotal;
  document.getElementById('cartTotal').textContent = '₹' + subtotal;
}

function checkout() {
  if (Object.keys(cart).length === 0) { showToast('🛒 Cart is empty!','error'); return; }
  const total = Object.values(cart).reduce((a,b,i,arr)=>{
    const id = Object.keys(cart)[Object.values(cart).indexOf(b)];
    return a;
  }, 0);
  const subtotal = Object.keys(cart).reduce((s,id) => {
    const p = ALL_PRODUCTS.find(x => x.id === +id);
    return s + p.price * cart[id];
  }, 0);
  cart = {};
  updateCartCount();
  updateCartDrawer();
  toggleCart();
  showToast(`🎉 Order placed! Total ₹${subtotal}. Thank you!`,'success');
}

// =================== WISHLIST ===================
function toggleWishlist(id, btn) {
  const p = ALL_PRODUCTS.find(x => x.id === id);
  if (wishlist.has(id)) {
    wishlist.delete(id);
    btn.textContent = '🤍';
    btn.classList.remove('active');
    showToast(`💔 ${p.name} removed from wishlist`,'info');
  } else {
    wishlist.add(id);
    btn.textContent = '❤️';
    btn.classList.add('active');
    showToast(`❤️ ${p.name} added to wishlist!`,'success');
  }
}

// =================== FILTERS & SORT ===================
function filterCat(cat, el) {
  currentCat = cat;
  displayedCount = 12;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  const titles = {all:'🛍️ All Products',fruits:'🍎 Fresh Fruits',vegetables:'🥦 Vegetables',dairy:'🥛 Dairy Products',bakery:'🍞 Bakery',meat:'🥩 Meat & Fish',snacks:'🍿 Snacks',beverages:'🧃 Beverages',frozen:'❄️ Frozen Foods'};
  document.getElementById('productsTitle').textContent = titles[cat] || '🛍️ Products';
  renderProducts();
}

function setNavTab(el, cat) {
  document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  currentCat = cat;
  displayedCount = 12;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  const catBtns = document.querySelectorAll('.cat-btn');
  catBtns.forEach(b => { if (b.querySelector('.cat-name')?.textContent.toLowerCase().startsWith(cat.substring(0,3))) b.classList.add('active'); });
  renderProducts();
}

function sortProducts() {
  currentSort = document.getElementById('sortSelect').value;
  renderProducts();
}

function applyFilters() {
  showToast('🔍 Filters applied!','info');
  renderProducts();
}

function handleSearch() {
  displayedCount = 12;
  renderProducts();
  const q = document.getElementById('searchInput').value.trim();
  if (q) showToast(`🔍 Searching for "${q}"...`,'info');
}

document.getElementById('searchInput').addEventListener('keydown', e => { if (e.key === 'Enter') handleSearch(); });
document.getElementById('searchInput').addEventListener('input', () => { displayedCount = 12; renderProducts(); });

// =================== VIEW TOGGLE ===================
function setView(view, btn) {
  document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('productsGrid');
  if (view === 'list') {
    grid.style.gridTemplateColumns = '1fr';
  } else {
    grid.style.gridTemplateColumns = 'repeat(auto-fill,minmax(200px,1fr))';
  }
}

// =================== LOAD MORE ===================
function loadMore() {
  displayedCount += 8;
  renderProducts();
  showToast('📦 More products loaded!','info');
}

// =================== QUICK VIEW ===================
function quickView(id) {
  const p = ALL_PRODUCTS.find(x => x.id === id);
  showToast(`👁 ${p.emoji} ${p.name} — ₹${p.price} / ${p.weight}`, 'info');
}

// =================== TOAST ===================
function showToast(msg, type='info') {
  const c = document.getElementById('toastContainer');
  const t = document.createElement('div');
  const colors = {success:'#1a7a3c',error:'#c0392b',info:'#0f1a13'};
  t.className = 'toast';
  t.style.background = colors[type] || colors.info;
  t.innerHTML = `<span>${msg}</span><button class="toast-close" onclick="this.parentElement.remove()">✕</button>`;
  c.appendChild(t);
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 300); }, 3200);
}

// =================== SCROLL ===================
function scrollToProducts() {
  document.getElementById('productSection').scrollIntoView({behavior:'smooth'});
}

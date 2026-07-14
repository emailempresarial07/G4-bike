/* ============================================================
   G4BIKES — Núcleo compartilhado: header, footer, estado,
   carrinho, favoritos, comparador, busca, assistente, tema
   ============================================================ */

/* ---------- Ícones SVG (minimalistas, stroke) ---------- */
const IC = {
  bike: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/></svg>`,
  heartFill: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1.6"/><circle cx="19" cy="21" r="1.6"/><path d="M2 3h3l2.6 12.4a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 7H6"/></svg>`,
  wa: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.5.8 3.1 1.3 4.8 1.3a10 10 0 1 0 0-20zm5 14.2c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.5-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.4-1-2.7s.7-1.9.9-2.2c.2-.2.5-.3.7-.3h.5c.2 0 .4-.1.6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.5 1.5.3.2.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .7-.2 1.2z"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h10"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 13A8.5 8.5 0 0 1 11 3a8.5 8.5 0 1 0 10 10z"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3 6.6 7 .8-5.2 4.8L18.2 21 12 17.4 5.8 21l1.4-6.8L2 9.4l7-.8z"/></svg>`,
  starHalf: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2v15.4L5.8 21l1.4-6.8L2 9.4l7-.8z"/><path d="m12 2 3 6.6 7 .8-5.2 4.8L18.2 21 12 17.4z" fill="currentColor" opacity=".3"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>`,
  up: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5m-6 6 6-6 6 6"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12.5 5 5L20 6.5"/></svg>`,
  compare: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3H4v18h6M14 3h6v18h-6M10 12h4"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5.5V12c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10V5.5z"/><path d="m8.5 12 2.5 2.5 4.5-4.5"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 5h13v11H1zM14 9h4l4 4v3h-8z"/><circle cx="6" cy="18.5" r="2"/><circle cx="17.5" cy="18.5" r="2"/></svg>`,
  wrench: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4.5 4.5 0 0 0-6 5.7L3 17.7A2.1 2.1 0 0 0 6.3 21l5.7-5.7a4.5 4.5 0 0 0 5.7-6L14.4 12l-2.3-2.3z"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.27a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6L22 7"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>`,
  insta: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg>`,
  face: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h-2.5A4.5 4.5 0 0 0 8 7.5V10H5.5v4H8v7h4v-7h3l.5-4H12V7.8c0-.5.3-.8.8-.8H15z"/></svg>`,
  yt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>`,
  mountain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 20 6.5-11L14 16l3-5 4 9z"/><path d="M12 5.5 13.5 3 15 5.5"/></svg>`,
  city: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l6-4v18M11 21V11l6 3v7M17 21v-7"/></svg>`,
  road: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21 10 3M20 21 14 3M12 7v2.5M12 13v2.5M12 19v2"/></svg>`,
  kid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="7" r="3.5"/><path d="M6 21c.8-3.5 3-5.5 6-5.5s5.2 2 6 5.5M9 13.5 7 16M15 13.5 17 16"/></svg>`,
  bmx: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="17" r="4"/><circle cx="18" cy="17" r="4"/><path d="M6 17 10 7h7m-5.5 10L18 7M8 7h4"/></svg>`,
  gear: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/></svg>`,
  helmet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 13a9 9 0 0 1 18 0v2l-3 1H6z"/><path d="M9 16v3a2 2 0 0 0 4 0M8 10h3M13.5 10h2.5"/></svg>`,
  shirt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 4-5 3 2 4 2-1v11h10V10l2 1 2-4-5-3a3 3 0 0 1-8 0z"/></svg>`,
  light: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4M12 3a6.5 6.5 0 0 0-4 11.5c.8.7 1 1.5 1 2.5h6c0-1 .2-1.8 1-2.5A6.5 6.5 0 0 0 12 3z"/></svg>`,
  sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 15l.9 2.6L22.5 18.5l-2.6.9L19 22l-.9-2.6-2.6-.9 2.6-.9z"/></svg>`,
  brake: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/></svg>`,
  drop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.7S5.5 10 5.5 14.5a6.5 6.5 0 0 0 13 0C18.5 10 12 2.7 12 2.7z"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
  paint: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 5 4 4L8 20l-5 1 1-5zM13 7l4 4"/></svg>`,
  ruler: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="9" width="20" height="6" rx="1" transform="rotate(-25 12 12)"/><path d="m8.5 13.5 1-2M12 12l1-2M15.5 10.5l1-2"/></svg>`,
  rotate: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7M21 3v5h-5"/></svg>`,
  pix: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="m12 2 4.5 4.5H19L22 12l-3 5.5h-2.5L12 22l-4.5-4.5H5L2 12l3-5.5h2.5z"/></svg>`,
  card: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="5" width="20" height="14" rx="2.5"/><path d="M2 10h20M6 15h4"/></svg>`,
  tag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4 11 3H4v7l9.6 10.4a2 2 0 0 0 2.8 0l4.2-4.2a2 2 0 0 0 0-2.8z"/><circle cx="8" cy="8" r="1.5"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0 0 4h14v-4"/></svg>`
};

/* ---------- Arte SVG de bicicleta (gerada por cor/categoria) ---------- */
function bikeArt(p, variant = 0) {
  const c = p.cor;
  const cat = getCategoria(p.categoria) || {};
  if (cat.tipo !== "bike") return acessorioArt(p);
  const flip = variant === 1 ? `transform="scale(-1,1) translate(-240,0)"` : "";
  const dark = "#1f242e";
  return `<svg class="bike-art" viewBox="0 0 240 150" fill="none" role="img" aria-label="${p.nome}">
    <g ${flip}>
      <circle cx="52" cy="108" r="34" stroke="${dark}" stroke-width="9"/>
      <circle cx="52" cy="108" r="34" stroke="${c}" stroke-width="2" stroke-dasharray="5 9" opacity=".9"/>
      <circle cx="188" cy="108" r="34" stroke="${dark}" stroke-width="9"/>
      <circle cx="188" cy="108" r="34" stroke="${c}" stroke-width="2" stroke-dasharray="5 9" opacity=".9"/>
      <circle cx="52" cy="108" r="5" fill="${c}"/>
      <circle cx="188" cy="108" r="5" fill="${c}"/>
      <path d="M52 108 L96 58 L160 58 L188 108" stroke="${c}" stroke-width="7" stroke-linejoin="round" stroke-linecap="round"/>
      <path d="M52 108 L118 108 L96 58" stroke="${c}" stroke-width="7" stroke-linejoin="round" stroke-linecap="round"/>
      <path d="M118 108 L160 58" stroke="${dark}" stroke-width="7" stroke-linecap="round"/>
      <path d="M160 58 L153 40 L166 36" stroke="${dark}" stroke-width="6" stroke-linecap="round"/>
      <path d="M96 58 L90 42 L78 40" stroke="${dark}" stroke-width="6" stroke-linecap="round"/>
      <circle cx="118" cy="108" r="10" stroke="${dark}" stroke-width="5"/>
      <path d="M118 98 v-6 M111 115 l-6 6" stroke="${c}" stroke-width="4" stroke-linecap="round"/>
      <path d="M30 30 h28 M22 40 h22 M36 20 h16" stroke="${c}" stroke-width="3" stroke-linecap="round" opacity=".55"/>
    </g>
  </svg>`;
}

function acessorioArt(p) {
  const map = { capacetes: "helmet", roupas: "shirt", pecas: "gear", acessorios: "light" };
  const ic = IC[map[p.categoria] || "gear"];
  return `<svg class="bike-art" viewBox="0 0 120 90" role="img" aria-label="${p.nome}">
    <foreignObject x="0" y="0" width="120" height="90">
      <div xmlns="http://www.w3.org/1999/xhtml" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:${p.cor}">
        <div style="width:58px;height:58px">${ic}</div>
      </div>
    </foreignObject>
  </svg>`;
}

/* ---------- Estado persistente ---------- */
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem("g4_" + k)) ?? d; } catch { return d; } },
  set(k, v) { localStorage.setItem("g4_" + k, JSON.stringify(v)); }
};
let CART = store.get("cart", {});      // {id: qtd}
let FAVS = store.get("favs", []);      // [id]
let CMP  = store.get("compare", []);   // [id] máx 3

const cartCount = () => Object.values(CART).reduce((a, b) => a + b, 0);
const cartTotal = () => Object.entries(CART).reduce((a, [id, q]) => a + (getProduto(id)?.preco || 0) * q, 0);

function saveAll() {
  store.set("cart", CART); store.set("favs", FAVS); store.set("compare", CMP);
  updateBadges();
}
function updateBadges() {
  document.querySelectorAll("[data-badge=cart]").forEach(el => { el.textContent = cartCount() || ""; el.dataset.zero = !cartCount(); });
  document.querySelectorAll("[data-badge=fav]").forEach(el => { el.textContent = FAVS.length || ""; el.dataset.zero = !FAVS.length; });
  document.querySelectorAll("[data-badge=cmp]").forEach(el => { el.textContent = CMP.length || ""; el.dataset.zero = !CMP.length; });
}

/* ---------- Ações globais ---------- */
function addToCart(id, qty = 1) {
  CART[id] = (CART[id] || 0) + qty;
  saveAll();
  toast(`${getProduto(id).nome} adicionado ao carrinho!`);
}
function toggleFav(id, btn) {
  const i = FAVS.indexOf(id);
  if (i >= 0) { FAVS.splice(i, 1); toast("Removido dos favoritos"); }
  else { FAVS.push(id); toast("Adicionado aos favoritos ❤"); }
  saveAll();
  if (btn) { btn.classList.toggle("active", FAVS.includes(id)); btn.innerHTML = FAVS.includes(id) ? IC.heartFill : IC.heart; }
}
function toggleCompare(id, btn) {
  const i = CMP.indexOf(id);
  if (i >= 0) CMP.splice(i, 1);
  else {
    if (CMP.length >= 3) { toast("Máximo de 3 bikes no comparador"); return; }
    CMP.push(id);
    toast(`No comparador (${CMP.length}/3). <a href="comparador.html" style="color:var(--neon);text-decoration:underline">Comparar</a>`);
  }
  saveAll();
  if (btn) btn.classList.toggle("active", CMP.includes(id));
}
function buyNow(id) { addToCart(id); openCart(); }

/* ---------- Toast ---------- */
let toastTimer;
function toast(msg) {
  let t = document.querySelector(".toast");
  if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
  t.innerHTML = IC.check + `<span>${msg}</span>`;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 3200);
}

/* ---------- Card de produto ---------- */
function starsHTML(nota, num) {
  let s = "";
  for (let i = 1; i <= 5; i++) s += i <= Math.round(nota) ? IC.star : `<span style="opacity:.25">${IC.star}</span>`;
  return `<span class="stars" title="${nota.toFixed(1)} de 5">${s}<span class="n">${nota.toFixed(1)} (${num})</span></span>`;
}

function productCard(p) {
  const cat = getCategoria(p.categoria);
  const fav = FAVS.includes(p.id), cmp = CMP.includes(p.id);
  const selo = p.selo ? `<span class="badge ${p.selo === "LANÇAMENTO" ? "blue" : p.selo === "OFERTA" ? "red" : ""}">${p.selo}</span>` : "";
  const off = p.precoAntigo ? `<span class="badge">-${Math.round((1 - p.preco / p.precoAntigo) * 100)}%</span>` : "";
  return `
  <article class="prod-card" style="--p-color:${p.cor}">
    <div class="prod-media">
      <div class="prod-badges">${selo}${off}</div>
      <div class="prod-fav-row">
        <button class="round-btn ${fav ? "active" : ""}" aria-label="Favoritar ${p.nome}" onclick="toggleFav('${p.id}', this)">${fav ? IC.heartFill : IC.heart}</button>
        <button class="round-btn cmp ${cmp ? "active" : ""}" aria-label="Comparar ${p.nome}" title="Adicionar ao comparador" onclick="toggleCompare('${p.id}', this)">${IC.compare}</button>
      </div>
      <a href="produto.html?id=${p.id}" aria-label="Ver ${p.nome}">${bikeArt(p)}</a>
      <div class="hover-hint">Ver detalhes do modelo</div>
    </div>
    <div class="prod-body">
      <div class="prod-meta"><span>${p.marca}</span><span>${cat ? cat.nome : ""}</span></div>
      <h3 class="prod-name"><a href="produto.html?id=${p.id}">${p.nome}</a></h3>
      ${starsHTML(p.avaliacao, p.numAvaliacoes)}
      <div class="prod-prices">
        ${p.precoAntigo ? `<span class="price-old">${fmtBRL(p.precoAntigo)}</span>` : ""}
        <div class="price-now">${fmtBRL(p.preco)}</div>
        <div class="price-installment">${parcela(p.preco)}</div>
        <div class="price-pix">${pixPreco(p.preco)} no Pix (5% off)</div>
      </div>
      <div class="prod-actions">
        <button class="btn btn-primary" onclick="buyNow('${p.id}')">Comprar agora</button>
        <button class="btn btn-outline icon-only" aria-label="Adicionar ao carrinho" title="Adicionar ao carrinho" onclick="addToCart('${p.id}')">${IC.cart}</button>
      </div>
    </div>
  </article>`;
}

/* ---------- Header + Footer ---------- */
const NAV_LINKS = [
  ["index.html", "Início"],
  ["bicicletas.html", "Bicicletas"],
  ["bicicletas.html?tipo=acessorio", "Acessórios"],
  ["servicos.html", "Serviços"],
  ["ofertas.html", "Ofertas"],
  ["sobre.html", "Sobre nós"],
  ["contato.html", "Contato"]
];

function currentPage() { return location.pathname.split("/").pop() || "index.html"; }

function renderHeader() {
  const page = currentPage();
  const isActive = href => {
    const [file, qs] = href.split("?");
    if (file !== page) return false;
    if (qs) return location.search.includes(qs);
    if (file === "bicicletas.html") return !location.search.includes("tipo=acessorio");
    return true;
  };
  const nav = NAV_LINKS.map(([h, l]) => `<a href="${h}" ${isActive(h) ? 'class="active" aria-current="page"' : ""}>${l}</a>`).join("");
  document.body.insertAdjacentHTML("afterbegin", `
  <a class="skip-link" href="#main">Pular para o conteúdo</a>
  <header class="header" id="header">
    <div class="header-inner">
      <a class="logo" href="index.html" aria-label="${LOJA.nome} — Início">
        <span class="logo-mark">${IC.bike}</span>
        <span>G4<b>BIKES</b></span>
      </a>
      <nav class="nav" aria-label="Menu principal">${nav}</nav>
      <div class="header-actions">
        <button class="icon-btn" id="searchBtn" aria-label="Pesquisar">${IC.search}</button>
        <button class="icon-btn hide-sm" id="themeBtn" aria-label="Alternar tema claro/escuro">${IC.moon}</button>
        <button class="icon-btn hide-sm" aria-label="Minha conta" onclick="openModal('accountModal')">${IC.user}</button>
        <button class="icon-btn hide-sm" aria-label="Favoritos" onclick="openFavs()">${IC.heart}<span class="badge-count" data-badge="fav"></span></button>
        <button class="icon-btn" aria-label="Carrinho de compras" onclick="openCart()">${IC.cart}<span class="badge-count" data-badge="cart"></span></button>
        <a class="btn btn-wa" href="${waLink()}" target="_blank" rel="noopener" aria-label="WhatsApp">${IC.wa}<span>WhatsApp</span></a>
        <button class="icon-btn hamburger" id="menuBtn" aria-label="Abrir menu">${IC.menu}</button>
      </div>
    </div>
  </header>

  <div class="search-pop" id="searchPop">
    <input type="search" id="searchInput" placeholder="Busque por bikes, capacetes, peças..." aria-label="Buscar produtos">
    <div class="search-results" id="searchResults"></div>
  </div>

  <div class="drawer" id="drawer" aria-hidden="true">
    <div class="drawer-panel" role="dialog" aria-label="Menu">
      <div class="drawer-head">
        <a class="logo" href="index.html"><span class="logo-mark">${IC.bike}</span><span>G4<b>BIKES</b></span></a>
        <button class="icon-btn" id="drawerClose" aria-label="Fechar menu">${IC.x}</button>
      </div>
      ${NAV_LINKS.map(([h, l]) => `<a class="d-link ${isActive(h) ? "active" : ""}" href="${h}">${IC.arrow}${l}</a>`).join("")}
      <a class="d-link" href="blog.html">${IC.book}Blog</a>
      <a class="d-link" href="comparador.html">${IC.compare}Comparador <span class="badge-count" data-badge="cmp" style="position:static"></span></a>
      <a class="d-link" href="#" onclick="openFavs();return false">${IC.heart}Favoritos <span class="badge-count" data-badge="fav" style="position:static"></span></a>
      <a class="d-link" href="#" onclick="openModal('accountModal');return false">${IC.user}Minha conta</a>
      <a class="d-link" href="#" onclick="toggleTheme();return false">${IC.moon}Tema claro/escuro</a>
      <div class="drawer-foot">
        <a class="btn btn-wa btn-block" href="${waLink()}" target="_blank" rel="noopener">${IC.wa} Falar no WhatsApp</a>
        <a class="btn btn-outline btn-block" href="tel:+${LOJA.whatsapp}">${IC.phone} ${LOJA.telefone}</a>
      </div>
    </div>
  </div>`);
}

function renderFooter() {
  document.body.insertAdjacentHTML("beforeend", `
  <section class="section" style="padding-bottom:0">
    <div class="container">
      <div class="newsletter reveal">
        <div>
          <h2 class="section-title" style="font-size:1.6rem">Receba ofertas exclusivas 🚴</h2>
          <p class="section-sub">Cadastre-se e ganhe <b style="color:var(--neon)">10% OFF</b> na primeira compra, além de promoções e lançamentos em primeira mão.</p>
        </div>
        <form onsubmit="event.preventDefault(); this.reset(); toast('Cadastro realizado! Seu cupom: BEMVINDO10')">
          <input type="email" required placeholder="Seu melhor e-mail" aria-label="E-mail para newsletter">
          <button class="btn btn-primary" type="submit">Quero ofertas</button>
        </form>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <a class="logo" href="index.html"><span class="logo-mark">${IC.bike}</span><span>G4<b>BIKES</b></span></a>
          <p class="footer-desc">Loja de bicicletas de montanha em São Paulo. Bikes, acessórios e oficina especializada para quem vive sobre duas rodas.</p>
          <div class="socials">
            <a href="${LOJA.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram">${IC.insta}</a>
            <a href="#" aria-label="Facebook">${IC.face}</a>
            <a href="#" aria-label="YouTube">${IC.yt}</a>
            <a href="${waLink()}" target="_blank" rel="noopener" aria-label="WhatsApp">${IC.wa}</a>
          </div>
          <div class="pay-flags" aria-label="Formas de pagamento">
            <span>${IC.pix} PIX</span><span>${IC.card} Crédito 12x</span><span>${IC.card} Débito</span><span>${IC.tag} Boleto</span>
          </div>
        </div>
        <div>
          <h4>Links rápidos</h4>
          <ul>
            <li><a href="bicicletas.html">Bicicletas</a></li>
            <li><a href="bicicletas.html?tipo=acessorio">Acessórios</a></li>
            <li><a href="servicos.html">Serviços e oficina</a></li>
            <li><a href="ofertas.html">Ofertas</a></li>
            <li><a href="comparador.html">Comparador</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="sobre.html">Sobre nós</a></li>
          </ul>
        </div>
        <div>
          <h4>Categorias</h4>
          <ul>
            <li><a href="bicicletas.html?cat=mtb">Mountain Bike</a></li>
            <li><a href="bicicletas.html?cat=urbana">Urbanas</a></li>
            <li><a href="bicicletas.html?cat=eletrica">Elétricas</a></li>
            <li><a href="bicicletas.html?cat=estrada">Estrada</a></li>
            <li><a href="bicicletas.html?cat=infantil">Infantis</a></li>
            <li><a href="bicicletas.html?cat=capacetes">Capacetes</a></li>
          </ul>
        </div>
        <div>
          <h4>Atendimento</h4>
          <ul class="footer-contact">
            <li>${IC.pin}<span>${LOJA.endereco}</span></li>
            <li>${IC.phone}<a class="val" href="tel:+${LOJA.whatsapp}">${LOJA.telefone}</a></li>
            <li>${IC.mail}<a class="val" href="mailto:${LOJA.email}">${LOJA.email}</a></li>
            <li>${IC.clock}<span>Seg–Sex 09:00–18:00 · Sáb 09:00–14:00</span></li>
          </ul>
          <h4 style="margin-top:20px">Políticas</h4>
          <ul>
            <li><a href="#" onclick="toast('Política de trocas: até 30 dias.');return false">Trocas e devoluções</a></li>
            <li><a href="#" onclick="toast('Seus dados são protegidos conforme a LGPD.');return false">Política de privacidade</a></li>
            <li><a href="#" onclick="toast('Termos de uso do site G4bikes.');return false">Termos de uso</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} ${LOJA.nome} · Todos os direitos reservados · CNPJ 00.000.000/0001-00</span>
        <div class="seals">
          <span>${IC.shield} Site seguro SSL</span>
          <span>${IC.check} Google ${LOJA.avaliacao.toFixed(1)} ★ (${LOJA.numAvaliacoes})</span>
        </div>
      </div>
    </div>
  </footer>

  <a class="float-wa" href="${waLink()}" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">${IC.wa}</a>
  <button class="back-top" id="backTop" aria-label="Voltar ao topo">${IC.up}</button>

  <div class="cookie-bar" id="cookieBar" role="dialog" aria-label="Aviso de cookies">
    <p>🍪 Usamos cookies para melhorar sua experiência e personalizar recomendações, conforme nossa <a href="#">Política de Privacidade</a>.</p>
    <div style="display:flex;gap:8px">
      <button class="btn btn-outline btn-sm" onclick="acceptCookies(false)">Recusar</button>
      <button class="btn btn-primary btn-sm" onclick="acceptCookies(true)">Aceitar</button>
    </div>
  </div>

  <div class="modal" id="cartModal" aria-hidden="true">
    <div class="modal-box" role="dialog" aria-label="Carrinho de compras">
      <button class="icon-btn modal-close" onclick="closeModal('cartModal')" aria-label="Fechar">${IC.x}</button>
      <h3>Seu carrinho</h3>
      <p class="sub">Frete grátis em compras acima de R$ 499 para São Paulo capital.</p>
      <div id="cartItems"></div>
    </div>
  </div>

  <div class="modal" id="favModal" aria-hidden="true">
    <div class="modal-box" role="dialog" aria-label="Lista de favoritos">
      <button class="icon-btn modal-close" onclick="closeModal('favModal')" aria-label="Fechar">${IC.x}</button>
      <h3>Meus favoritos ❤</h3>
      <p class="sub">Seus produtos salvos para não perder de vista.</p>
      <div id="favItems"></div>
    </div>
  </div>

  <div class="modal" id="accountModal" aria-hidden="true">
    <div class="modal-box" role="dialog" aria-label="Área do cliente">
      <button class="icon-btn modal-close" onclick="closeModal('accountModal')" aria-label="Fechar">${IC.x}</button>
      <h3>Área do cliente</h3>
      <p class="sub">Acesse seus pedidos, rastreamento de entrega e programa de fidelidade G4 Points.</p>
      <form class="form-grid" onsubmit="event.preventDefault(); toast('Bem-vindo de volta! 🚴'); closeModal('accountModal')">
        <div class="field full"><label>E-mail</label><input type="email" required placeholder="voce@email.com"></div>
        <div class="field full"><label>Senha</label><input type="password" required placeholder="••••••••"></div>
        <button class="btn btn-primary full" type="submit">Entrar</button>
        <button class="btn btn-outline full" type="button" onclick="toast('Cadastro: você ganha 200 G4 Points de boas-vindas!')">Criar conta grátis</button>
      </form>
      <p class="sub" style="margin-top:16px">✔ Histórico de pedidos &nbsp;·&nbsp; ✔ Rastreamento &nbsp;·&nbsp; ✔ Cupons &nbsp;·&nbsp; ✔ G4 Points</p>
    </div>
  </div>

  <div class="modal" id="assistantModal" aria-hidden="true">
    <div class="modal-box" role="dialog" aria-label="Assistente virtual">
      <button class="icon-btn modal-close" onclick="closeModal('assistantModal')" aria-label="Fechar">${IC.x}</button>
      <h3>🤖 Encontre sua bike ideal</h3>
      <p class="sub">Responda algumas perguntas rápidas e o nosso assistente recomenda os modelos perfeitos para você.</p>
      <div class="assist-progress"><i id="assistBar" style="width:0%"></i></div>
      <div id="assistBody"></div>
    </div>
  </div>`);
}

/* ---------- Modais ---------- */
function openModal(id) { const m = document.getElementById(id); if (m) { m.classList.add("open"); m.setAttribute("aria-hidden", "false"); } }
function closeModal(id) { const m = document.getElementById(id); if (m) { m.classList.remove("open"); m.setAttribute("aria-hidden", "true"); } }
document.addEventListener("keydown", e => { if (e.key === "Escape") document.querySelectorAll(".modal.open").forEach(m => closeModal(m.id)); });
document.addEventListener("click", e => { if (e.target.classList && e.target.classList.contains("modal")) closeModal(e.target.id); });

/* ---------- Carrinho ---------- */
function openCart() { renderCart(); openModal("cartModal"); }
function renderCart() {
  const box = document.getElementById("cartItems");
  const entries = Object.entries(CART).filter(([id]) => getProduto(id));
  if (!entries.length) {
    box.innerHTML = `<div class="cart-empty">${IC.cart}<p>Seu carrinho está vazio.</p><a class="btn btn-primary btn-sm" style="margin-top:14px" href="bicicletas.html">Ver bicicletas</a></div>`;
    return;
  }
  box.innerHTML = entries.map(([id, q]) => {
    const p = getProduto(id);
    return `<div class="cart-item">
      <div class="thumb" style="background:radial-gradient(circle at 50% 30%, color-mix(in srgb, ${p.cor} 22%, transparent), transparent 75%), var(--bg-3)">${bikeArt(p)}</div>
      <div style="flex:1">
        <b>${p.nome}</b>
        <small>${fmtBRL(p.preco)} · ${parcela(p.preco)}</small><br>
        <button class="remove-link" onclick="removeFromCart('${id}')">Remover</button>
      </div>
      <div class="qty">
        <button aria-label="Diminuir" onclick="chgQty('${id}',-1)">−</button><span>${q}</span><button aria-label="Aumentar" onclick="chgQty('${id}',1)">+</button>
      </div>
    </div>`;
  }).join("") + `
  <div class="cart-total"><span>Total</span><b>${fmtBRL(cartTotal())}</b></div>
  <p class="sub" style="margin:0 0 14px">ou <b style="color:var(--neon)">${pixPreco(cartTotal())} no Pix</b> · ${parcela(cartTotal())}</p>
  <div style="display:grid;gap:10px">
    <button class="btn btn-primary btn-block" onclick="checkout()">Finalizar compra ${IC.arrow}</button>
    <a class="btn btn-wa btn-block" target="_blank" rel="noopener" href="${waLink('Olá! Quero finalizar minha compra: ' + entries.map(([id, q]) => `${q}x ${getProduto(id).nome}`).join(', '))}">${IC.wa} Comprar pelo WhatsApp</a>
    <input id="couponInput" placeholder="Cupom de desconto" aria-label="Cupom de desconto" style="padding:12px 16px;border-radius:999px;border:1.5px solid var(--border);background:var(--bg-3);color:var(--text);outline:none">
    <button class="btn btn-outline btn-sm" onclick="applyCoupon()">Aplicar cupom</button>
  </div>`;
}
function chgQty(id, d) { CART[id] = Math.max(1, (CART[id] || 1) + d); saveAll(); renderCart(); }
function removeFromCart(id) { delete CART[id]; saveAll(); renderCart(); }
function applyCoupon() {
  const v = (document.getElementById("couponInput").value || "").trim().toUpperCase();
  if (v === "BEMVINDO10") toast("Cupom aplicado: 10% OFF no checkout! 🎉");
  else if (v) toast("Cupom inválido ou expirado.");
}
function checkout() {
  closeModal("cartModal");
  toast("Checkout seguro: você seria redirecionado ao pagamento (Pix, cartão ou boleto). 🔒");
}

/* ---------- Favoritos ---------- */
function openFavs() {
  const box = document.getElementById("favItems");
  const list = FAVS.map(getProduto).filter(Boolean);
  box.innerHTML = list.length ? list.map(p => `
    <div class="cart-item">
      <div class="thumb" style="background:radial-gradient(circle at 50% 30%, color-mix(in srgb, ${p.cor} 22%, transparent), transparent 75%), var(--bg-3)">${bikeArt(p)}</div>
      <div style="flex:1"><b><a href="produto.html?id=${p.id}">${p.nome}</a></b><small>${fmtBRL(p.preco)}</small></div>
      <button class="btn btn-primary btn-sm" onclick="addToCart('${p.id}')">${IC.cart}</button>
      <button class="icon-btn" aria-label="Remover dos favoritos" onclick="toggleFav('${p.id}'); openFavs()">${IC.x}</button>
    </div>`).join("")
    : `<div class="cart-empty">${IC.heart}<p>Nenhum favorito ainda. Toque no coração dos produtos para salvá-los.</p></div>`;
  openModal("favModal");
}

/* ---------- Busca ---------- */
function initSearch() {
  const pop = document.getElementById("searchPop");
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");
  document.getElementById("searchBtn").addEventListener("click", () => {
    pop.classList.toggle("open");
    if (pop.classList.contains("open")) input.focus();
  });
  document.addEventListener("click", e => {
    if (!pop.contains(e.target) && e.target.id !== "searchBtn" && !e.target.closest("#searchBtn")) pop.classList.remove("open");
  });
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) { results.innerHTML = ""; return; }
    const found = PRODUTOS.filter(p =>
      p.nome.toLowerCase().includes(q) || p.marca.toLowerCase().includes(q) ||
      (getCategoria(p.categoria)?.nome || "").toLowerCase().includes(q)
    ).slice(0, 6);
    results.innerHTML = found.length
      ? found.map(p => `<a href="produto.html?id=${p.id}"><span>${p.nome}</span><span class="price">${fmtBRL(p.preco)}</span></a>`).join("")
      : `<div class="search-empty">Nada encontrado para “${input.value}”. Fale com a gente no WhatsApp!</div>`;
  });
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") { e.preventDefault(); location.href = "bicicletas.html?q=" + encodeURIComponent(input.value.trim()); }
  });
}

/* ---------- Tema ---------- */
function toggleTheme() {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  store.set("theme", next);
  const btn = document.getElementById("themeBtn");
  if (btn) btn.innerHTML = next === "dark" ? IC.sun : IC.moon;
}
function initTheme() {
  const saved = store.get("theme", "dark");
  document.documentElement.dataset.theme = saved;
  const btn = document.getElementById("themeBtn");
  btn.innerHTML = saved === "dark" ? IC.sun : IC.moon;
  btn.addEventListener("click", toggleTheme);
}

/* ---------- Header scroll / drawer / back-top ---------- */
function initChrome() {
  const header = document.getElementById("header");
  const backTop = document.getElementById("backTop");
  const onScroll = () => {
    header.classList.toggle("scrolled", scrollY > 30);
    backTop.classList.toggle("show", scrollY > 600);
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  backTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

  const drawer = document.getElementById("drawer");
  document.getElementById("menuBtn").addEventListener("click", () => { drawer.classList.add("open"); drawer.setAttribute("aria-hidden", "false"); });
  document.getElementById("drawerClose").addEventListener("click", closeDrawer);
  drawer.addEventListener("click", e => { if (e.target === drawer) closeDrawer(); });
  function closeDrawer() { drawer.classList.remove("open"); drawer.setAttribute("aria-hidden", "true"); }
}

/* ---------- Cookies ---------- */
function initCookies() {
  if (store.get("cookies", null) === null)
    setTimeout(() => document.getElementById("cookieBar").classList.add("show"), 1600);
}
function acceptCookies(ok) {
  store.set("cookies", ok);
  document.getElementById("cookieBar").classList.remove("show");
  toast(ok ? "Preferências salvas. Boas pedaladas! 🚴" : "Apenas cookies essenciais serão usados.");
}

/* ---------- Animações de scroll ---------- */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal, .reveal-left, .reveal-right, [data-stagger]").forEach(el => io.observe(el));
  document.querySelectorAll("[data-stagger]").forEach(wrap => {
    [...wrap.children].forEach((c, i) => c.style.transitionDelay = `${Math.min(i * 70, 500)}ms`);
  });
}

/* ---------- Countdown ---------- */
function startCountdown(el, endTime) {
  const tick = () => {
    let diff = Math.max(0, endTime - Date.now());
    const d = Math.floor(diff / 864e5), h = Math.floor(diff / 36e5) % 24,
          m = Math.floor(diff / 6e4) % 60, s = Math.floor(diff / 1e3) % 60;
    el.innerHTML = [["Dias", d], ["Horas", h], ["Min", m], ["Seg", s]]
      .map(([l, v]) => `<div class="cd-box"><b>${String(v).padStart(2, "0")}</b><small>${l}</small></div>`).join("");
  };
  tick(); setInterval(tick, 1000);
}
/* Oferta termina no próximo domingo 23:59 */
function nextOfferEnd() {
  const d = new Date();
  d.setDate(d.getDate() + ((7 - d.getDay()) % 7 || 7));
  d.setHours(23, 59, 59, 0);
  return d.getTime();
}

/* ---------- Assistente virtual ---------- */
const ASSIST_STEPS = [
  { key: "quem",   q: "Para quem é a bicicleta?", opts: ["Para mim (adulto)", "Para uma criança", "Presente para alguém", "Para a família toda"] },
  { key: "altura", q: "Qual a altura do ciclista?", opts: ["Até 1,50 m", "1,50 – 1,65 m", "1,66 – 1,80 m", "Acima de 1,80 m"] },
  { key: "idade",  q: "Qual a faixa de idade?", opts: ["Até 9 anos", "10 – 17 anos", "18 – 45 anos", "46 anos ou mais"] },
  { key: "local",  q: "Onde vai pedalar na maior parte do tempo?", opts: ["Trilhas e terra", "Cidade e ciclovias", "Estrada / asfalto longo", "Um pouco de tudo"] },
  { key: "nivel",  q: "Qual o nível de experiência?", opts: ["Estou começando", "Pedalo às vezes", "Pedalo com frequência", "Sou avançado/competidor"] },
  { key: "preco",  q: "Qual a faixa de preço ideal?", opts: ["Até R$ 2.000", "R$ 2.000 – R$ 5.000", "R$ 5.000 – R$ 10.000", "Acima de R$ 10.000"] },
  { key: "modelo", q: "Tem preferência de modelo?", opts: ["Mountain bike", "Urbana / passeio", "Elétrica", "Sem preferência"] },
  { key: "freq",   q: "Com que frequência vai usar?", opts: ["Todos os dias", "3–4x por semana", "Fins de semana", "Ocasionalmente"] }
];
let assistAnswers = {}, assistStep = 0;

function openAssistant() { assistAnswers = {}; assistStep = 0; renderAssistStep(); openModal("assistantModal"); }
function renderAssistStep() {
  const body = document.getElementById("assistBody");
  const bar = document.getElementById("assistBar");
  if (assistStep < ASSIST_STEPS.length) {
    const st = ASSIST_STEPS[assistStep];
    bar.style.width = `${(assistStep / ASSIST_STEPS.length) * 100}%`;
    body.innerHTML = `
      <p class="assist-q">${assistStep + 1}. ${st.q}</p>
      <div class="assist-opts">${st.opts.map((o, i) => `<button onclick="assistAnswer(${i})">${o}</button>`).join("")}</div>
      ${assistStep > 0 ? `<button class="btn btn-outline btn-sm" style="margin-top:16px" onclick="assistStep--; renderAssistStep()">← Voltar</button>` : ""}`;
  } else {
    bar.style.width = "100%";
    const recos = assistRecommend();
    body.innerHTML = `
      <p class="assist-q">✨ Encontramos as bikes perfeitas para você:</p>
      <div class="assist-result">
        ${recos.map(p => `
          <a class="assist-reco" href="produto.html?id=${p.id}">
            <div class="thumb" style="background:radial-gradient(circle at 50% 30%, color-mix(in srgb, ${p.cor} 25%, transparent), transparent 75%), var(--bg-3)">${bikeArt(p)}</div>
            <div><b>${p.nome}</b><small>${getCategoria(p.categoria).nome} · ★ ${p.avaliacao.toFixed(1)}</small></div>
            <span class="price">${fmtBRL(p.preco)}</span>
          </a>`).join("")}
      </div>
      <div style="display:grid;gap:10px;margin-top:18px">
        <a class="btn btn-wa btn-block" target="_blank" rel="noopener" href="${waLink('Olá! Usei o assistente do site e gostaria de ajuda para escolher entre: ' + recos.map(p => p.nome).join(', '))}">${IC.wa} Falar com um especialista</a>
        <button class="btn btn-outline btn-sm" onclick="openAssistant()">Refazer o teste</button>
      </div>`;
  }
}
function assistAnswer(i) {
  const st = ASSIST_STEPS[assistStep];
  assistAnswers[st.key] = i;
  assistStep++;
  renderAssistStep();
}
function assistRecommend() {
  const a = assistAnswers;
  const bikes = PRODUTOS.filter(isBike);
  const faixas = [[0, 2000], [2000, 5000], [5000, 10000], [10000, Infinity]];
  const [min, max] = faixas[a.preco ?? 1];
  const score = p => {
    let s = 0;
    if (p.preco >= min && p.preco <= max) s += 5; else s -= 3;
    if (a.quem === 1 || a.idade === 0) s += p.categoria === "infantil" ? 10 : -8;
    else if (p.categoria === "infantil") s -= 10;
    if (a.modelo === 0) s += p.categoria === "mtb" ? 6 : 0;
    if (a.modelo === 1) s += p.categoria === "urbana" ? 6 : 0;
    if (a.modelo === 2) s += p.categoria === "eletrica" ? 6 : 0;
    if (a.local === 0) s += p.categoria === "mtb" ? 4 : 0;
    if (a.local === 1) s += (p.categoria === "urbana" || p.categoria === "eletrica") ? 4 : 0;
    if (a.local === 2) s += p.categoria === "estrada" ? 5 : 0;
    if (a.nivel === 0) s += p.preco < 3000 ? 2 : -1;
    if (a.nivel === 3) s += p.preco > 6000 ? 3 : 0;
    if (a.freq === 0) s += p.categoria === "eletrica" || p.categoria === "urbana" ? 2 : 0;
    s += p.avaliacao;
    return s;
  };
  return bikes.map(p => [score(p), p]).sort((x, y) => y[0] - x[0]).slice(0, 3).map(x => x[1]);
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  initTheme();
  initChrome();
  initSearch();
  initCookies();
  updateBadges();
  /* dá tempo das páginas montarem conteúdo dinâmico antes do reveal */
  requestAnimationFrame(() => initReveal());
});

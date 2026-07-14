/* ============================================================
   G4BIKES — Página individual do produto
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const id = new URLSearchParams(location.search).get("id");
  const p = getProduto(id) || PRODUTOS[0];
  const cat = getCategoria(p.categoria);
  const bike = isBike(p);

  document.title = `${p.nome} — G4bikes Bike Shop`;
  document.getElementById("crumb").innerHTML =
    `<a href="index.html">Início</a> <span>/</span> <a href="bicicletas.html?cat=${p.categoria}">${cat.nome}</a> <span>/</span> <span>${p.nome}</span>`;

  const off = p.precoAntigo ? Math.round((1 - p.preco / p.precoAntigo) * 100) : 0;
  const thumbBg = c => `background:radial-gradient(circle at 50% 30%, color-mix(in srgb, ${c} 22%, transparent), transparent 75%), var(--bg-3)`;

  document.getElementById("pdpRoot").innerHTML = `
  <div class="pdp">
    <!-- Galeria -->
    <div class="pdp-gallery reveal-left">
      <div class="pdp-main-img" id="mainImg" style="${thumbBg(p.cor)}" title="Clique para dar zoom">
        ${bikeArt(p)}
        ${p.selo ? `<span class="badge ${p.selo === "LANÇAMENTO" ? "blue" : "red"}" style="position:absolute;top:14px;left:14px">${p.selo}</span>` : ""}
      </div>
      <div class="pdp-thumbs" id="thumbs">
        <button class="active" style="${thumbBg(p.cor)}" aria-label="Imagem 1" data-v="0">${bikeArt(p, 0)}</button>
        <button style="${thumbBg(p.cor)}" aria-label="Imagem 2 (outro ângulo)" data-v="1">${bikeArt(p, 1)}</button>
        <button style="${thumbBg("#64748b")}" aria-label="Vídeo demonstrativo" data-v="video">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--neon)" stroke-width="2" style="width:26px"><circle cx="12" cy="12" r="9"/><path d="m10 8.5 5 3.5-5 3.5z" fill="var(--neon)" stroke="none"/></svg>
        </button>
      </div>
      <button class="pdp-360" id="btn360">${IC.rotate} Visualização 360°</button>
    </div>

    <!-- Informações -->
    <div class="pdp-info reveal-right">
      <h1>${p.nome}</h1>
      <div class="pdp-brandrow">
        <span><b>${p.marca}</b></span> · <span>${cat.nome}</span> · ${starsHTML(p.avaliacao, p.numAvaliacoes)}
        <span style="color:${p.estoque > 3 ? "var(--neon)" : "var(--danger)"};font-weight:700">
          ${p.estoque > 3 ? "✔ Em estoque" : `⚡ Últimas ${p.estoque} unidades`}
        </span>
      </div>
      <p style="color:var(--text-2)">${p.desc}</p>

      <div class="pdp-price-box">
        ${p.precoAntigo ? `<span class="price-old">${fmtBRL(p.precoAntigo)}</span> <span class="badge red">-${off}%</span>` : ""}
        <div class="price-now">${fmtBRL(p.preco)}</div>
        <div class="price-installment">${parcela(p.preco)} no cartão</div>
        <div class="price-pix">${pixPreco(p.preco)} à vista no Pix (5% de desconto)</div>

        <div class="option-row">
          <span class="label">Cor: <span id="corSel" style="color:var(--neon)">${p.cores[0]}</span></span>
          <div class="chips" id="corChips">${p.cores.map((c, i) => `<button class="chip ${i === 0 ? "active" : ""}" data-val="${c}">${c}</button>`).join("")}</div>
        </div>
        <div class="option-row">
          <span class="label">Tamanho: <span id="tamSel" style="color:var(--neon)">${p.tamanhos[0]}</span>
            ${bike ? `&nbsp;·&nbsp;<a href="#tab-tamanhos" onclick="openTab('tamanhos')" style="color:var(--blue);font-weight:600;font-size:.82rem">Guia de tamanhos</a>` : ""}
          </span>
          <div class="chips" id="tamChips">${p.tamanhos.map((t, i) => `<button class="chip ${i === 0 ? "active" : ""}" data-val="${t}">${t}</button>`).join("")}</div>
        </div>

        <div style="display:grid;gap:10px;margin-top:20px">
          <button class="btn btn-primary btn-lg btn-block" onclick="buyNowPdp()">${IC.wa} Comprar pelo WhatsApp</button>
          <p class="sub" style="margin:0;font-size:.78rem;text-align:center">Enviamos seu pedido prontinho para o nosso WhatsApp — sem cadastro, sem complicação.</p>
        </div>
        <div style="display:grid;grid-template-columns:1fr auto auto;gap:10px;margin-top:10px">
          <button class="btn btn-outline" onclick="addToCart('${p.id}')">${IC.cart} Adicionar ao carrinho</button>
          <button class="btn btn-ghost" id="favBtn" aria-label="Favoritar">${FAVS.includes(p.id) ? IC.heartFill : IC.heart}</button>
          <button class="btn btn-ghost" id="cmpBtn" aria-label="Comparar" title="Adicionar ao comparador">${IC.compare}</button>
        </div>

        <div class="freight-row">
          <input id="cepInput" placeholder="Calcular frete — digite seu CEP" maxlength="9" aria-label="CEP">
          <button class="btn btn-outline" onclick="calcFrete()">OK</button>
        </div>
        <div class="freight-result" id="freteResult">
          <span>📦 Entrega em SP capital: <b>1 a 3 dias úteis</b></span>
          <span>🏬 Retirada grátis na loja: <b>disponível hoje</b> — Parque Santa Madalena</span>
        </div>
      </div>

      <div class="feat" style="cursor:pointer" onclick="openAssistant()">
        ${IC.sparkles}
        <div><b>Não sabe se este é o modelo certo?</b><small>Use nossa ferramenta e descubra a bike ideal para sua altura, idade e estilo em 1 minuto.</small></div>
      </div>
    </div>
  </div>

  <!-- Abas -->
  <div class="pdp-tabs reveal">
    <div class="tab-nav" role="tablist" id="tabNav">
      <button class="active" data-tab="specs" role="tab">Especificações</button>
      ${bike ? `<button data-tab="tamanhos" role="tab">Tabela de tamanhos</button>` : ""}
      <button data-tab="avaliacoes" role="tab">Avaliações (${p.numAvaliacoes})</button>
      <button data-tab="faq" role="tab">Perguntas frequentes</button>
    </div>

    <div class="tab-panel active" id="tab-specs" role="tabpanel">
      <table class="spec-table">
        ${Object.entries({
          "Modelo": p.nome, "Marca": p.marca, "Categoria": cat.nome,
          "Peso": p.specs.peso, "Quadro": p.specs.quadro, "Suspensão": p.specs.suspensao,
          "Freios": p.specs.freios, "Marchas": p.specs.marchas, "Aro": p.specs.aro,
          "Modalidade": p.specs.modalidade, "Garantia": p.specs.garantia, "Destaques": p.specs.extra
        }).filter(([, v]) => v).map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join("")}
      </table>
    </div>

    ${bike ? `
    <div class="tab-panel" id="tab-tamanhos" role="tabpanel">
      <p class="section-sub" style="margin-bottom:18px">💡 <b>Guia rápido:</b> meça sua altura descalço e use a tabela abaixo. Na dúvida entre dois tamanhos, prefira o menor para mais controle (trilha) ou o maior para mais conforto (estrada/cidade). Fazemos o ajuste fino grátis na loja.</p>
      <div class="size-table-wrap">
        <table class="size-table">
          <tr><th>Tamanho</th><th>Altura do ciclista</th><th>Entrepernas</th><th>Uso indicado</th></tr>
          <tr><td>S (15")</td><td>1,55 – 1,65 m</td><td>71 – 76 cm</td><td>Ciclistas menores / mais controle</td></tr>
          <tr><td>M (17")</td><td>1,65 – 1,78 m</td><td>76 – 81 cm</td><td>O tamanho mais versátil</td></tr>
          <tr><td>L (19")</td><td>1,78 – 1,88 m</td><td>81 – 86 cm</td><td>Ciclistas altos</td></tr>
          <tr><td>XL (21")</td><td>1,88 m +</td><td>86 cm +</td><td>Ciclistas muito altos</td></tr>
        </table>
      </div>
      <button class="btn btn-outline" style="margin-top:20px" onclick="openAssistant()">🤖 Descobrir meu tamanho com o assistente</button>
    </div>` : ""}

    <div class="tab-panel" id="tab-avaliacoes" role="tabpanel">
      <div style="display:flex;gap:26px;align-items:center;flex-wrap:wrap;margin-bottom:26px">
        <div style="text-align:center">
          <div style="font-family:var(--font-display);font-size:3.4rem;font-weight:800;color:var(--neon);line-height:1">${p.avaliacao.toFixed(1)}</div>
          ${starsHTML(p.avaliacao, p.numAvaliacoes)}
        </div>
        <p class="section-sub" style="max-width:420px">Avaliações de clientes verificados que compraram este produto na G4bikes. Nossa loja tem <b>nota 5,0 no Google</b> com 289 avaliações.</p>
      </div>
      <div class="testi-grid" id="pdpReviews"></div>
    </div>

    <div class="tab-panel" id="tab-faq" role="tabpanel" style="max-width:760px"></div>
  </div>`;

  /* ----- Galeria: thumbs, zoom, 360 ----- */
  const mainImg = document.getElementById("mainImg");
  document.getElementById("thumbs").addEventListener("click", e => {
    const btn = e.target.closest("button"); if (!btn) return;
    document.querySelectorAll("#thumbs button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    mainImg.classList.remove("zoomed");
    if (btn.dataset.v === "video") {
      mainImg.innerHTML = `<div style="text-align:center;color:var(--text-2)">
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--neon)" stroke-width="1.5" style="width:84px;margin:0 auto 10px"><circle cx="12" cy="12" r="10"/><path d="m10 8.5 5 3.5-5 3.5z" fill="var(--neon)" stroke="none"/></svg>
        <b style="font-family:var(--font-display);text-transform:uppercase">Vídeo demonstrativo</b><br><small>Assista ao review completo deste modelo no nosso canal.</small></div>`;
    } else {
      mainImg.innerHTML = bikeArt(p, +btn.dataset.v) + (p.selo ? `<span class="badge ${p.selo === "LANÇAMENTO" ? "blue" : "red"}" style="position:absolute;top:14px;left:14px">${p.selo}</span>` : "");
    }
  });
  mainImg.addEventListener("click", () => mainImg.classList.toggle("zoomed"));
  let spinning = false;
  document.getElementById("btn360").addEventListener("click", () => {
    spinning = !spinning;
    const svg = mainImg.querySelector("svg");
    if (svg) svg.classList.toggle("spin", spinning);
    toast(spinning ? "Girando em 360° — clique novamente para parar" : "Visualização 360° pausada");
  });

  /* ----- Chips de cor/tamanho ----- */
  const bindChips = (chipsId, labelId) => {
    document.getElementById(chipsId).addEventListener("click", e => {
      const c = e.target.closest(".chip"); if (!c) return;
      document.querySelectorAll(`#${chipsId} .chip`).forEach(x => x.classList.remove("active"));
      c.classList.add("active");
      document.getElementById(labelId).textContent = c.dataset.val;
    });
  };
  bindChips("corChips", "corSel");
  bindChips("tamChips", "tamSel");

  /* ----- Compra pelo WhatsApp com cor e tamanho escolhidos ----- */
  window.buyNowPdp = () => {
    const cor = document.getElementById("corSel").textContent;
    const tam = document.getElementById("tamSel").textContent;
    buyNow(p.id, `▸ Cor: ${cor} · Tamanho: ${tam}\n`);
  };

  /* ----- Fav / comparar ----- */
  const favBtn = document.getElementById("favBtn");
  favBtn.classList.toggle("active", FAVS.includes(p.id));
  favBtn.addEventListener("click", () => { toggleFav(p.id); favBtn.innerHTML = FAVS.includes(p.id) ? IC.heartFill : IC.heart; });
  document.getElementById("cmpBtn").addEventListener("click", function () { toggleCompare(p.id, this); });

  /* ----- Frete ----- */
  window.calcFrete = () => {
    const cep = (document.getElementById("cepInput").value || "").replace(/\D/g, "");
    if (cep.length !== 8) { toast("Digite um CEP válido (8 dígitos)"); return; }
    const sp = cep.startsWith("0") || cep.startsWith("1");
    document.getElementById("freteResult").innerHTML = sp
      ? `<span>🚚 Entrega expressa: <b>${p.preco >= 499 ? "GRÁTIS" : "R$ 29,90"}</b> — 1 a 3 dias úteis</span>
         <span>🏬 Retirada grátis na loja: <b>disponível hoje</b></span>`
      : `<span>🚚 Envio para o CEP ${cep.slice(0, 5)}-${cep.slice(5)}: <b>R$ 79,90</b> — 5 a 10 dias úteis</span>
         <span>📦 Bike enviada em caixa reforçada, 90% montada</span>`;
  };

  /* ----- Abas ----- */
  window.openTab = (name) => {
    document.querySelectorAll(".tab-nav button").forEach(b => b.classList.toggle("active", b.dataset.tab === name));
    document.querySelectorAll(".tab-panel").forEach(pn => pn.classList.toggle("active", pn.id === "tab-" + name));
  };
  document.getElementById("tabNav").addEventListener("click", e => {
    const b = e.target.closest("button"); if (b) openTab(b.dataset.tab);
  });

  /* ----- Avaliações + FAQ ----- */
  document.getElementById("pdpReviews").innerHTML = DEPOIMENTOS.slice(0, 3).map(d => `
    <div class="testi-card">
      <div class="testi-head"><span class="avatar" style="background:${d.cor}">${d.inicial}</span>
      <div><b>${d.nome}</b><small>Compra verificada ✔</small></div></div>
      <span class="stars">${IC.star.repeat(d.estrelas)}</span><p>“${d.texto}”</p>
    </div>`).join("");
  document.getElementById("tab-faq").innerHTML = FAQ_PRODUTO.map(f =>
    `<details class="faq-item"><summary>${f.p}</summary><div class="faq-a">${f.r}</div></details>`).join("");

  /* ----- Relacionados ----- */
  const related = PRODUTOS.filter(x => x.id !== p.id && (x.categoria === p.categoria || isBike(x) === bike))
    .sort((a, b) => (b.categoria === p.categoria) - (a.categoria === p.categoria) || b.vendidos - a.vendidos)
    .slice(0, 4);
  document.getElementById("relatedGrid").innerHTML = related.map(productCard).join("");
});

/* ============================================================
   G4BIKES — Catálogo: filtros inteligentes + ordenação
   ============================================================ */

const params = new URLSearchParams(location.search);
const qsCat = params.get("cat");
const qsTipo = params.get("tipo");
const qsQ = (params.get("q") || "").toLowerCase();
const qsPromo = params.get("promo") === "1";

/* extrai valores únicos de uma spec para montar as opções de filtro */
function uniques(fn) {
  return [...new Set(PRODUTOS.map(fn).filter(Boolean))].sort();
}
function suspClass(p) {
  const s = (p.specs.suspensao || "").toLowerCase();
  if (s.includes("full")) return "Full suspension";
  if (s.includes("dianteira")) return "Suspensão dianteira";
  if (s.includes("rígida") || s.includes("rigida")) return "Rígida";
  return null;
}
function freioClass(p) {
  const f = (p.specs.freios || "").toLowerCase();
  if (f.includes("hidr")) return "Disco hidráulico";
  if (f.includes("disco")) return "Disco mecânico";
  if (f.includes("v-brake") || f.includes("u-brake")) return "Aro (V/U-brake)";
  return null;
}
function marchasClass(p) {
  const m = (p.specs.marchas || "").toLowerCase();
  if (m.includes("única") || m.includes("unica")) return "Marcha única";
  const mult = m.match(/(\d+)x(\d+)/);
  if (mult) { const total = +mult[1] * +mult[2]; return total >= 12 ? "12 ou mais" : total >= 8 ? "8 a 11" : "Até 7"; }
  return null;
}
function matClass(p) {
  const q = (p.specs.quadro || "").toLowerCase();
  if (q.includes("carbono")) return "Carbono";
  if (q.includes("alumínio") || q.includes("aluminio")) return "Alumínio";
  if (q.includes("cromoly")) return "Cromoly";
  if (q.includes("aço") || q.includes("aco")) return "Aço";
  return null;
}

function buildChecks(elId, values, group) {
  const el = document.getElementById(elId);
  if (!values.length) { el.closest(".filter-group").style.display = "none"; return; }
  el.innerHTML = values.map(v =>
    `<label class="check"><input type="checkbox" data-group="${group}" value="${v}" onchange="applyFilters()"> ${v}</label>`).join("");
}

function checkedValues(group) {
  return [...document.querySelectorAll(`input[data-group="${group}"]:checked`)].map(i => i.value);
}

function initFilters() {
  const cats = CATEGORIAS.filter(c => !qsTipo || c.tipo === qsTipo);
  document.getElementById("fCat").innerHTML = cats.map(c =>
    `<label class="check"><input type="checkbox" data-group="cat" value="${c.id}" ${c.id === qsCat ? "checked" : ""} onchange="applyFilters()"> ${c.nome}</label>`).join("");
  buildChecks("fMarca", uniques(p => p.marca), "marca");
  buildChecks("fTam", [...new Set(PRODUTOS.flatMap(p => p.tamanhos))].filter(t => !t.startsWith("Único")).sort(), "tam");
  buildChecks("fAro", uniques(p => p.specs.aro), "aro");
  buildChecks("fMat", uniques(matClass), "mat");
  buildChecks("fCor", uniques(p => (p.cores || [])[0]), "cor");
  buildChecks("fMod", uniques(p => p.specs.modalidade), "mod");
  buildChecks("fSusp", uniques(suspClass), "susp");
  buildChecks("fFreio", uniques(freioClass), "freio");
  buildChecks("fMarchas", uniques(marchasClass), "marchas");
  if (qsPromo) document.getElementById("fPromo").checked = true;
  document.getElementById("fMin").addEventListener("input", debounce(applyFilters));
  document.getElementById("fMax").addEventListener("input", debounce(applyFilters));
}

let debTimer;
const debounce = fn => () => { clearTimeout(debTimer); debTimer = setTimeout(fn, 350); };

function clearFilters() {
  document.querySelectorAll("#filters input[type=checkbox]").forEach(i => i.checked = false);
  document.querySelector("input[name=fAval][value='0']").checked = true;
  document.getElementById("fMin").value = "";
  document.getElementById("fMax").value = "";
  applyFilters();
}

function applyFilters() {
  const cats = checkedValues("cat"), marcas = checkedValues("marca"), tams = checkedValues("tam"),
        aros = checkedValues("aro"), mats = checkedValues("mat"), cores = checkedValues("cor"),
        mods = checkedValues("mod"), susps = checkedValues("susp"), freios = checkedValues("freio"),
        marchas = checkedValues("marchas");
  const min = +document.getElementById("fMin").value || 0;
  const max = +document.getElementById("fMax").value || Infinity;
  const soEstoque = document.getElementById("fEstoque").checked;
  const soPromo = document.getElementById("fPromo").checked;
  const minAval = +document.querySelector("input[name=fAval]:checked").value;

  let list = PRODUTOS.filter(p => {
    const cat = getCategoria(p.categoria);
    if (qsTipo && cat.tipo !== qsTipo) return false;
    if (!qsTipo && !qsCat && !qsQ && cat.tipo !== "bike" && !cats.length) { /* padrão: mostra tudo */ }
    if (qsQ && !(p.nome + " " + p.marca + " " + cat.nome).toLowerCase().includes(qsQ)) return false;
    if (cats.length && !cats.includes(p.categoria)) return false;
    if (marcas.length && !marcas.includes(p.marca)) return false;
    if (tams.length && !p.tamanhos.some(t => tams.includes(t))) return false;
    if (aros.length && !aros.includes(p.specs.aro)) return false;
    if (mats.length && !mats.includes(matClass(p))) return false;
    if (cores.length && !p.cores.some(c => cores.includes(c))) return false;
    if (mods.length && !mods.includes(p.specs.modalidade)) return false;
    if (susps.length && !susps.includes(suspClass(p))) return false;
    if (freios.length && !freios.includes(freioClass(p))) return false;
    if (marchas.length && !marchas.includes(marchasClass(p))) return false;
    if (p.preco < min || p.preco > max) return false;
    if (soEstoque && p.estoque <= 0) return false;
    if (soPromo && !p.precoAntigo) return false;
    if (minAval && p.avaliacao < minAval) return false;
    return true;
  });

  const sort = document.getElementById("sortSel").value;
  const sorters = {
    menor: (a, b) => a.preco - b.preco,
    maior: (a, b) => b.preco - a.preco,
    vendidos: (a, b) => b.vendidos - a.vendidos,
    lancamento: (a, b) => (b.lancamento - a.lancamento) || b.vendidos - a.vendidos,
    avaliacao: (a, b) => b.avaliacao - a.avaliacao || b.numAvaliacoes - a.numAvaliacoes,
    relev: (a, b) => (b.avaliacao * Math.log(b.vendidos + 1)) - (a.avaliacao * Math.log(a.vendidos + 1))
  };
  list.sort(sorters[sort] || sorters.relev);

  document.getElementById("grid").innerHTML = list.length
    ? list.map(productCard).join("")
    : `<div class="no-results"><h3>Nenhum produto encontrado 😕</h3><p>Tente remover alguns filtros ou <a href="${waLink('Olá! Procuro um produto que não encontrei no site.')}" target="_blank" rel="noopener" style="color:var(--neon);text-decoration:underline">fale com a gente no WhatsApp</a>.</p></div>`;
  document.getElementById("resultCount").textContent = `${list.length} produto${list.length !== 1 ? "s" : ""} encontrado${list.length !== 1 ? "s" : ""}`;
}

document.addEventListener("DOMContentLoaded", () => {
  /* título conforme contexto */
  const title = document.getElementById("pageTitle"), crumb = document.getElementById("crumbHere"), sub = document.getElementById("pageSub");
  if (qsQ) { title.textContent = `Busca: “${params.get("q")}”`; crumb.textContent = "Busca"; }
  else if (qsCat) { const c = getCategoria(qsCat); if (c) { title.textContent = c.nome; crumb.textContent = c.nome; sub.textContent = c.desc + "."; } }
  else if (qsTipo === "acessorio") { title.textContent = "Acessórios e Equipamentos"; crumb.textContent = "Acessórios"; sub.textContent = "Capacetes, peças, roupas e tudo para o seu pedal."; }
  initFilters();
  applyFilters();
});

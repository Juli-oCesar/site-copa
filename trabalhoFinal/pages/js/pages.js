// menu hamburger
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("nav-open");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("nav-open");
    });
  });
}

// barra de busca
const input = document.querySelector(".barra-de-busca input");

if (input) {
  input.addEventListener("input", () => {
    const valor = input.value.toLowerCase();

    document.querySelectorAll(".card").forEach((card) => {
      const nomeEl = card.querySelector("h3");
      if (!nomeEl) return;
      const nome = nomeEl.textContent.toLowerCase();
      card.style.display = nome.includes(valor) ? "grid" : "none";
    });
  });
}

// filtro
const select = document.querySelector(".filtro select");
const container = document.querySelector(".grid");

if (select && container) {
  select.addEventListener("change", () => {
    const tipo = select.value;
    const cards = Array.from(container.querySelectorAll(".card"));

    cards.sort((a, b) => {
      if (tipo === "Nome") return a.dataset.nome.localeCompare(b.dataset.nome);
      if (tipo === "Participações")
        return (
          Number(b.dataset.participacoes) - Number(a.dataset.participacoes)
        );
      if (tipo === "Títulos")
        return Number(b.dataset.titulos) - Number(a.dataset.titulos);
      return 0;
    });

    cards.forEach((card) => {
      const participacoes = Number(card.dataset.participacoes);
      const titulos = Number(card.dataset.titulos);

      if (tipo === "Títulos" && titulos === 0) {
        card.style.display = "none";
      } else if (tipo === "Participações" && participacoes === 0) {
        card.style.display = "none";
      } else {
        card.style.display = "grid";
      }

      container.appendChild(card);
    });
  });
}

// nevegacao paises da europa

function ale() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/europa/paises/ale.html";
}
function aus() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/europa/paises/aus.html";
}
function bel() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/europa/paises/bel.html";
}
function bos() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/europa/paises/bos.html";
}
function cro() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/europa/paises/cro.html";
}
function esc() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/europa/paises/esc.html";
}
function esp() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/europa/paises/esp.html";
}
function fra() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/europa/paises/fra.html";
}
function hol() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/europa/paises/hol.html";
}
function ing() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/europa/paises/ing.html";
}
function nor() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/europa/paises/nor.html";
}
function por() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/europa/paises/por.html";
}
function rep() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/europa/paises/rep.html";
}
function sue() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/europa/paises/sue.html";
}
function sui() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/europa/paises/sui.html";
}
function tur() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/europa/paises/tur.html";
}

//nevegação paises America Sul


function bra() { window.location.href = '/trabalhoFinal/pages/continentes/americaSul/paises/brasil.html'; }
function uru() { window.location.href = '/trabalhoFinal/pages/continentes/americaSul/paises/uruguai.html'; }
function col() { window.location.href = '/trabalhoFinal/pages/continentes/americaSul/paises/colombia.html'; }
function equ() { window.location.href = '/trabalhoFinal/pages/continentes/americaSul/paises/equador.html'; }
function par() { window.location.href = '/trabalhoFinal/pages/continentes/americaSul/paises/paraguai.html'; }
function arg() { window.location.href = '/trabalhoFinal/pages/continentes/americaSul/paises/argentina.html'; }

// navegação paises Asia
function ara() { window.location.href = '/trabalhoFinal/pages/continentes/asia/paises/arabia/arabia.html'; }
function cat() { window.location.href = '/trabalhoFinal/pages/continentes/asia/paises/catar/catar.html'; }
function chi() { window.location.href = '/trabalhoFinal/pages/continentes/asia/paises/china/china.html'; }
function cos() { window.location.href = '/trabalhoFinal/pages/continentes/asia/paises/coreiaSul/coreiaSul.html'; }
function con() { window.location.href = '/trabalhoFinal/pages/continentes/asia/paises/coreiaNorte/coreiaNorte.html'; }
function emi() { window.location.href = '/trabalhoFinal/pages/continentes/asia/paises/emirados/emirados.html'; }
function ind() { window.location.href = '/trabalhoFinal/pages/continentes/asia/paises/indonesia/indonesia.html'; }
function ira() { window.location.href = '/trabalhoFinal/pages/continentes/asia/paises/ira/ira.html'; }
function irq() { window.location.href = '/trabalhoFinal/pages/continentes/asia/paises/iraque/iraque.html'; }
function jap() { window.location.href = '/trabalhoFinal/pages/continentes/asia/paises/japao/japao.html'; }
function kuw() { window.location.href = '/trabalhoFinal/pages/continentes/asia/paises/kuwait/kuwait.html'; }

// navegação paises Africa
function Marrocos() { window.location.href = '/trabalhoFinal/pages/continentes/africa/paisesAfrica/Marrocos.html'; }
function AfricaS() { window.location.href = '/trabalhoFinal/pages/continentes/africa/paisesAfrica/AfricaS.html'; }
function Argelia() { window.location.href = '/trabalhoFinal/pages/continentes/africa/paisesAfrica/Argelia.html'; }
function CaboVerde() { window.location.href = '/trabalhoFinal/pages/continentes/africa/paisesAfrica/CaboVerde.html'; }
function CostadoMarfim() { window.location.href = '/trabalhoFinal/pages/continentes/africa/paisesAfrica/CostadoMarfim.html'; }
function Egito() { window.location.href = '/trabalhoFinal/pages/continentes/africa/paisesAfrica/Egito.html'; }
function RdCongo() { window.location.href = '/trabalhoFinal/pages/continentes/africa/paisesAfrica/RdCongo.html'; }
function Senegal() { window.location.href = '/trabalhoFinal/pages/continentes/africa/paisesAfrica/Senegal.html'; }
function Tunisia() { window.location.href = '/trabalhoFinal/pages/continentes/africa/paisesAfrica/Tunisia.html'; }

// Navegação paises Oceania
function NovaZelandia() { window.location.href = '/trabalhoFinal/pages/continentes/oceania/paisesOceania/NovaZelandia.html'; }


const funcoes = {
    ale: ale,
    aus: aus,
    bel: bel,
    bos: bos,
    cro: cro,
    esc: esc,
    esp: esp,
    fra: fra,
    hol: hol,
    ing: ing,
    nor: nor,
    por: por,
    rep: rep,
    sue: sue,
    sui: sui,
    tur: tur,
    bra: bra,
    uru: uru,
    col: col,
    equ: equ,
    par: par,
    arg: arg,
    ara: ara,
    cat: cat,
    chi: chi,
    cos: cos,
    con: con,
    emi: emi,
    ind: ind,
    ira: ira,
    irq: irq,
    jap: jap,
    kuw: kuw,
    Marrocos: Marrocos,
    AfricaS: AfricaS,
    Argelia: Argelia,
    CaboVerde: CaboVerde,
    CostadoMarfim: CostadoMarfim,
    Egito: Egito,
    RdCongo: RdCongo,
    Senegal: Senegal,
    Tunisia: Tunisia,
    NovaZelandia: NovaZelandia
}
function bra() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/americaSul/paises/brasil.html";
}
function uru() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/americaSul/paises/uruguai.html";
}
function col() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/americaSul/paises/colombia.html";
}
function equ() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/americaSul/paises/equador.html";
}
function par() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/americaSul/paises/paraguai.html";
}
function arg() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/americaSul/paises/argentina.html";
}

// navegação paises Asia
function ara() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/asia/paises/arabia/arabia.html";
}
function cat() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/asia/paises/catar/catar.html";
}
function chi() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/asia/paises/china/china.html";
}
function cos() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/asia/paises/coreiaSul/coreiaSul.html";
}
function con() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/asia/paises/coreiaNorte/coreiaNorte.html";
}
function emi() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/asia/paises/emirados/emirados.html";
}
function ind() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/asia/paises/indonesia/indonesia.html";
}
function ira() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/asia/paises/ira/ira.html";
}
function irq() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/asia/paises/iraque/iraque.html";
}
function jap() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/asia/paises/japao/japao.html";
}
function kuw() {
  window.location.href =
    "/trabalhoFinal/pages/continentes/asia/paises/kuwait/kuwait.html";
}

const funcoes = {
  ale: ale,
  aus: aus,
  bel: bel,
  bos: bos,
  cro: cro,
  esc: esc,
  esp: esp,
  fra: fra,
  hol: hol,
  ing: ing,
  nor: nor,
  por: por,
  rep: rep,
  sue: sue,
  sui: sui,
  tur: tur,
  bra: bra,
  uru: uru,
  col: col,
  equ: equ,
  par: par,
  arg: arg,
  ara: ara,
  cat: cat,
  chi: chi,
  cos: cos,
  con: con,
  emi: emi,
  ind: ind,
  ira: ira,
  irq: irq,
  jap: jap,
  kuw: kuw,
};

document.querySelectorAll(".card_botao").forEach((botao) => {
  botao.addEventListener("click", () => {
    const pais = botao.dataset.pais;
    funcoes[pais]?.(); // chama a função correspondente
  });
});

const btn = document.getElementById("btnAproveitamento");
const card = document.getElementById("cardAproveitamento");
const resultado = document.getElementById("resultadoAproveitamento");

if (btn && card) {
  btn.addEventListener("click", () => {
    const jogos = Number(document.getElementById("jogos").textContent);
    const vitorias = Number(document.getElementById("vitorias").textContent);
    const empates = Number(document.getElementById("empates").textContent);

    const pontosObtidos = vitorias * 3 + empates;
    const pontosPossiveis = jogos * 3;

    const aproveitamento = (pontosObtidos / pontosPossiveis) * 100;

    resultado.innerHTML = `<strong>Aproveitamento:</strong> ${aproveitamento.toFixed(2)}%`;

    if (card.style.display === "table-row") {
      card.style.display = "none";
      btn.textContent = "Ver Aproveitamento";
    } else {
      card.style.display = "table-row";
      btn.textContent = "Ocultar Aproveitamento";
    }
  });
}

const btnConvocacao = document.getElementById("btnConvocacao");
const cardConvocacao = document.getElementById("cardConvocacao");

if (btnConvocacao && cardConvocacao) {
  btnConvocacao.addEventListener("click", () => {
    if (cardConvocacao.style.display === "block") {
      cardConvocacao.style.display = "none";
      btnConvocacao.textContent = "Ver Convocados";
    } else {
      cardConvocacao.style.display = "block";
      btnConvocacao.textContent = "Ocultar Convocados";
    }
  });
}

// carrossel

(function () {
  const lista = document.getElementById("cidades-lista");
  const dotsEl = document.getElementById("carrossel-dots");
  const items = lista.querySelectorAll(".cidade-item");
  const PER_PAGE = 4;
  const total = items.length;
  const pages = Math.ceil(total / PER_PAGE);
  let current = 0;

  dotsEl.innerHTML = "";
  for (let i = 0; i < pages; i++) {
    const d = document.createElement("span");
    d.className = "dot" + (i === 0 ? " ativo" : "");
    d.addEventListener("click", () => goTo(i));
    dotsEl.appendChild(d);
  }

  function goTo(page) {
    current = Math.max(0, Math.min(page, pages - 1));

    /* largura real de um item + gap */
    const itemW = items[0].getBoundingClientRect().width;
    const gap = 12;
    const shift = current * PER_PAGE * (itemW + gap);

    lista.style.transform = `translateX(-${shift}px)`;

    dotsEl.querySelectorAll(".dot").forEach((d, i) => {
      d.classList.toggle("ativo", i === current);
    });
  }

  let startX = 0;
  lista.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
    },
    { passive: true },
  );

  lista.addEventListener(
    "touchend",
    (e) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (diff > 40) goTo(current + 1);
      if (diff < -40) goTo(current - 1);
    },
    { passive: true },
  );

  /* ── teclado (acessibilidade) ── */
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") goTo(current + 1);
    if (e.key === "ArrowLeft") goTo(current - 1);
  });
})();

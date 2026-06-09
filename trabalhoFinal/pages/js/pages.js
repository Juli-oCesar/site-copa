// menu hamburger
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('nav-open');
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('nav-open');
        });
    });
}



// barra de busca
const input = document.querySelector('.barra-de-busca input');

if (input) {
    input.addEventListener('input', () => {
        const valor = input.value.toLowerCase();

        document.querySelectorAll('.card').forEach(card => {
            const nomeEl = card.querySelector('h3');
            if (!nomeEl) return;
            const nome = nomeEl.textContent.toLowerCase();
            card.style.display = nome.includes(valor) ? 'grid' : 'none';
        });
    });
}

// filtro
const select = document.querySelector('.filtro select');
const container = document.querySelector('.grid');

if (select && container) {
    select.addEventListener('change', () => {
        const tipo = select.value;
        const cards = Array.from(container.querySelectorAll('.card'));

        cards.sort((a, b) => {
            if (tipo === 'Nome') return a.dataset.nome.localeCompare(b.dataset.nome);
            if (tipo === 'Participações') return Number(b.dataset.participacoes) - Number(a.dataset.participacoes);
            if (tipo === 'Títulos') return Number(b.dataset.titulos) - Number(a.dataset.titulos);
            return 0;
        });

        cards.forEach(card => {
            const participacoes = Number(card.dataset.participacoes);
            const titulos = Number(card.dataset.titulos);

            if (tipo === 'Títulos' && titulos === 0) {
                card.style.display = 'none';
            } else if (tipo === 'Participações' && participacoes === 0) {
                card.style.display = 'none';
            } else {
                card.style.display = 'grid';
            }

            container.appendChild(card);
        });
    });
}


// nevegacao paises da europa

function ale() { window.location.href = '/trabalhoFinal/pages/continentes/europa/paises/ale.html'; }
function aus() { window.location.href = '/trabalhoFinal/pages/continentes/europa/paises/aus.html'; }
function bel() { window.location.href = '/trabalhoFinal/pages/continentes/europa/paises/bel.html'; }
function bos() { window.location.href = '/trabalhoFinal/pages/continentes/europa/paises/bos.html'; }
function cro() { window.location.href = '/trabalhoFinal/pages/continentes/europa/paises/cro.html'; }
function esc() { window.location.href = '/trabalhoFinal/pages/continentes/europa/paises/esc.html'; }
function esp() { window.location.href = '/trabalhoFinal/pages/continentes/europa/paises/esp.html'; }
function fra() { window.location.href = '/trabalhoFinal/pages/continentes/europa/paises/fra.html'; }
function hol() { window.location.href = '/trabalhoFinal/pages/continentes/europa/paises/hol.html'; }
function ing() { window.location.href = '/trabalhoFinal/pages/continentes/europa/paises/ing.html'; }
function nor() { window.location.href = '/trabalhoFinal/pages/continentes/europa/paises/nor.html'; }
function por() { window.location.href = '/trabalhoFinal/pages/continentes/europa/paises/por.html'; }
function rep() { window.location.href = '/trabalhoFinal/pages/continentes/europa/paises/rep.html'; }
function sue() { window.location.href = '/trabalhoFinal/pages/continentes/europa/paises/sue.html'; }
function sui() { window.location.href = '/trabalhoFinal/pages/continentes/europa/paises/sui.html'; }
function tur() { window.location.href = '/trabalhoFinal/pages/continentes/europa/paises/tur.html'; }


//nevegação paises America Sul

function bra() { window.location.href = '/trabalhoFinal/pages/continentes/americaSul/paises/brasil.html'; }
function uru() { window.location.href = '/trabalhoFinal/pages/continentes/americaSul/paises/uruguai.html'; }
function col() { window.location.href = '/trabalhoFinal/pages/continentes/americaSul/paises/colombia.html'; }
function equ() { window.location.href = '/trabalhoFinal/pages/continentes/americaSul/paises/equador.html'; }
function par() { window.location.href = '/trabalhoFinal/pages/continentes/americaSul/paises/paraguai.html'; }
function arg() { window.location.href = '/trabalhoFinal/pages/continentes/americaSul/paises/argentina.html'; }


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
    arg: arg
}

document.querySelectorAll('.card_botao').forEach((botao) => {
  botao.addEventListener('click', () => {
    const pais = botao.dataset.pais
    funcoes[pais]?.() // chama a função correspondente
  });
});


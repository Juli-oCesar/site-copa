// menu hamburger
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('nav-open');
    });

    // Fecha o menu ao clicar em um link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('nav-open');
        });
    });
}

// continentes
function continenteAF() {
    window.location.href = '/trabalhoFinal/pages/continentes/africa/africa.html';
}

function continenteNA() {
    window.location.href = '/trabalhoFinal/pages/continentes/americaNorte/americaNorte.html';
}

function continenteSA() {
    window.location.href = '/trabalhoFinal/pages/continentes/americaSul/americaSul.html';
}

function continenteAS() {
    window.location.href = '/trabalhoFinal/pages/continentes/asia/asia.html';
}

function continenteEU() {
    window.location.href = '/trabalhoFinal/pages/continentes/europa/europa.html';
}

function continenteOC() {
    window.location.href = '/trabalhoFinal/pages/continentes/oceania/oceania.html';
}

function home() {
    window.location.href = '/trabalhoFinal/index.html';
}


const funcoes = {
    AF: continenteAF,
    NA: continenteNA,
    SA: continenteSA,
    AS: continenteAS,
    EU: continenteEU,
    OC: continenteOC,
}

document.querySelectorAll('.card_botao').forEach((botao) => {
  botao.addEventListener('click', () => {
    const continente = botao.dataset.continente
    funcoes[continente]?.() // chama a função correspondente
  });
});
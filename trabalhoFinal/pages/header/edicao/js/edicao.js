// botao para abrir a page dos grupos

function abrirGrupos () { window.location.href = "/trabalhoFinal/pages/grupos/grupos.html"; }

const botaoGrupos = document.getElementById('btngrupos');

if (botaoGrupos) {
  botaoGrupos.addEventListener("click", () => {
    window.location.href = "/trabalhoFinal/pages/grupos/grupos.html";
  });
}
function abrirCidades () { window.location.href ="/trabalhoFinal/pages/cidades/cidades.html"; }


// botao para abrir a page das cidades

const botaoCidades = document.getElementById('btncidades');

if (botaoCidades) {
  botaoCidades.addEventListener("click", () => {
    window.location.href = "/trabalhoFinal/pages/cidades/cidades.html";
  });
}


// botao para abrir a pagina fifa

const botaoSiteFifa = document.getElementById('btnsitefifa');

if (botaoSiteFifa) {
  botaoSiteFifa.addEventListener("click", () => {
    window.open("https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026", "_blank");
  });
}






const funcoes = {
  atlanta:      () => window.location.href = '/trabalhoFinal/pages/cidades/estadios/atlanta.html',
  boston:       () => window.location.href = '/trabalhoFinal/pages/cidades/estadios/boston.html',
  cidadeMexico: () => window.location.href = '/trabalhoFinal/pages/cidades/estadios/cidmex.html',
  dallas:       () => window.location.href = '/trabalhoFinal/pages/cidades/estadios/dallas.html',
  guadalajara:  () => window.location.href = '/trabalhoFinal/pages/cidades/estadios/guada.html',
  houston:      () => window.location.href = '/trabalhoFinal/pages/cidades/estadios/houston.html',
  novaYork:     () => window.location.href = '/trabalhoFinal/pages/cidades/estadios/ny-nj.html',
  losAngeles:   () => window.location.href = '/trabalhoFinal/pages/cidades/estadios/la.html',
  toronto:      () => window.location.href = '/trabalhoFinal/pages/cidades/estadios/toronto.html',
  kansas:       () => window.location.href = '/trabalhoFinal/pages/cidades/estadios/kansas.html',
  vancouver:    () => window.location.href = '/trabalhoFinal/pages/cidades/estadios/vanc.html',
  monterrey:    () => window.location.href = '/trabalhoFinal/pages/cidades/estadios/monte.html',
  miami:        () => window.location.href = '/trabalhoFinal/pages/cidades/estadios/miami.html',
  filadelfia:   () => window.location.href = '/trabalhoFinal/pages/cidades/estadios/fila.html',
  sanFrancisco: () => window.location.href = '/trabalhoFinal/pages/cidades/estadios/sanf.html',
  seattle:      () => window.location.href = '/trabalhoFinal/pages/cidades/estadios/seattle.html',
};

document.querySelectorAll('.cidade-estadio').forEach((botao) => {
  botao.addEventListener('click', () => {
    const cidade = botao.dataset.cidade;
    funcoes[cidade]?.();
  });
});




// carrossel 

    (function () {
      const lista    = document.getElementById('cidades-lista');
      const dotsEl   = document.getElementById('carrossel-dots');
      const items    = lista.querySelectorAll('.cidade-item');
      const PER_PAGE = 4;
      const total    = items.length;
      const pages    = Math.ceil(total / PER_PAGE);
      let   current  = 0;
 
      dotsEl.innerHTML = '';
      for (let i = 0; i < pages; i++) {
        const d = document.createElement('span');
        d.className = 'dot' + (i === 0 ? ' ativo' : '');
        d.addEventListener('click', () => goTo(i));
        dotsEl.appendChild(d);
      }
 
      function goTo(page) {
        current = Math.max(0, Math.min(page, pages - 1));
 
        /* largura real de um item + gap */
        const itemW = items[0].getBoundingClientRect().width;
        const gap   = 12;
        const shift = current * PER_PAGE * (itemW + gap);
 
        lista.style.transform = `translateX(-${shift}px)`;
 
        dotsEl.querySelectorAll('.dot').forEach((d, i) => {
          d.classList.toggle('ativo', i === current);
        });
      }
 
      let startX = 0;
      lista.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
      }, { passive: true });
 
      lista.addEventListener('touchend', e => {
        const diff = startX - e.changedTouches[0].clientX;
        if (diff >  40) goTo(current + 1);
        if (diff < -40) goTo(current - 1);
      }, { passive: true });
 
      /* ── teclado (acessibilidade) ── */
      document.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight') goTo(current + 1);
        if (e.key === 'ArrowLeft')  goTo(current - 1);
      });
    })();


    
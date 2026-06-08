// barra de busca
const input = document.querySelector(".barra-de-busca input");
const cards = document.querySelectorAll(".card");

input.addEventListener("input", () => {

    const valor = input.value.toLowerCase();

    cards.forEach(card => {

        const nome = card.querySelector("h3").textContent.toLowerCase();

        if (nome.includes(valor)) {
            card.style.display = "grid";
        } else {
            card.style.display = "none";
        }

    });

});

// filtro
const select = document.querySelector(".filtro select");
const container = document.querySelector(".grid");
const valorPart = document.querySelector(".data-participacoes");
const valorTit = document.querySelector(".data-titulos");

select.addEventListener("change", () => {

    const tipo = select.value;

    const cards = Array.from(document.querySelectorAll(".card"));

    cards.sort((a, b) => {

        if (tipo === "Nome") {
            return a.dataset.nome.localeCompare(b.dataset.nome);
        }

        if (tipo === "Participações") {
            return b.dataset.participacoes - a.dataset.participacoes;
        }

        if (tipo === "Títulos") {
            return b.dataset.titulos - a.dataset.titulos;
        }

        if (valorPart === 0 || valorTit === 0) {
            card.style.display = "none";
        }

    });

    

    cards.forEach(card => {

        const participacoes = Number(card.dataset.participacoes);
        const titulos = Number(card.dataset.titulos);

        // exemplo: esconder se títulos for 0
        if (tipo === "Títulos" && titulos === 0) {
            card.style.display = "none";
        } else if (tipo === "Participações" && participacoes === 0) {
            card.style.display = "none";
        } else {
            card.style.display = "grid";
        }

    });



    // reordenar na tela
    cards.forEach(card => container.appendChild(card));

});


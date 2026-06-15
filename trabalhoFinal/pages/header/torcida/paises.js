// Lista das 48 seleções confirmadas na Copa do Mundo 2026
// Cada país possui nome de exibição e o ícone/bandeira correspondente
const paisesCopa2026 = [
    { nome: "África do Sul", bandeira: "icons/africaSul.png" },
    { nome: "Alemanha", bandeira: "icons/alemanha.png" },
    { nome: "Arábia Saudita", bandeira: "icons/arabia.png" },
    { nome: "Argélia", bandeira: "icons/argelia.png" },
    { nome: "Argentina", bandeira: "icons/argentina.png" },
    { nome: "Austrália", bandeira: "icons/australia.png" },
    { nome: "Áustria", bandeira: "icons/austria.png" },
    { nome: "Bélgica", bandeira: "icons/belgica.png" },
    { nome: "Bósnia e Herzegovina", bandeira: "icons/bosnia.png" },
    { nome: "Brasil", bandeira: "icons/brasil.png" },
    { nome: "Cabo Verde", bandeira: "icons/caboVerde.png" },
    { nome: "Canadá", bandeira: "icons/canada.png" },
    { nome: "Catar", bandeira: "icons/catar.png" },
    { nome: "Colômbia", bandeira: "icons/colombia.png" },
    { nome: "Coreia do Sul", bandeira: "icons/coreiaSul.png" },
    { nome: "Costa do Marfim", bandeira: "icons/costaMarfim.png" },
    { nome: "Croácia", bandeira: "icons/croacia.png" },
    { nome: "Curaçao", bandeira: "icons/curacao.png" },
    { nome: "Egito", bandeira: "icons/egito.png" },
    { nome: "Equador", bandeira: "icons/equador.png" },
    { nome: "Escócia", bandeira: "icons/escocia.png" },
    { nome: "Espanha", bandeira: "icons/espanha.png" },
    { nome: "Estados Unidos", bandeira: "icons/eua.png" },
    { nome: "França", bandeira: "icons/franca.png" },
    { nome: "Gana", bandeira: "icons/gana.png" },
    { nome: "Haiti", bandeira: "icons/haiti.png" },
    { nome: "Holanda", bandeira: "icons/holanda.png" },
    { nome: "Inglaterra", bandeira: "icons/inglaterra.png" },
    { nome: "Irã", bandeira: "icons/ira.png" },
    { nome: "Iraque", bandeira: "icons/iraque.png" },
    { nome: "Japão", bandeira: "icons/japao.png" },
    { nome: "Jordânia", bandeira: "icons/jordania.png" },
    { nome: "Marrocos", bandeira: "icons/marrocos.png" },
    { nome: "México", bandeira: "icons/mexico.png" },
    { nome: "Noruega", bandeira: "icons/noruega.png" },
    { nome: "Nova Zelândia", bandeira: "icons/novaZel.png" },
    { nome: "Panamá", bandeira: "icons/panama.png" },
    { nome: "Paraguai", bandeira: "icons/paraguai.png" },
    { nome: "Portugal", bandeira: "icons/portugal.png" },
    { nome: "RD Congo", bandeira: "icons/congo.png" },
    { nome: "Senegal", bandeira: "icons/senegal.png" },
    { nome: "Suécia", bandeira: "icons/suecia.png" },
    { nome: "Suíça", bandeira: "icons/suica.png" },
    { nome: "Tchéquia", bandeira: "icons/tchequia.png" },
    { nome: "Tunísia", bandeira: "icons/tunisia.png" },
    { nome: "Turquia", bandeira: "icons/turquia.png" },
    { nome: "Uruguai", bandeira: "icons/uruguai.png" },
    { nome: "Uzbequistão", bandeira: "icons/uzbequistao.png" }
];

// remove acentos para facilitar a busca (ex: "a" encontra "á", "ã", etc.)
function normalizar(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

const inputPais = document.getElementById("inputPais");
const listaSugestoes = document.getElementById("listaSugestoes");
const bandeiraSelecionada = document.getElementById("bandeiraSelecionada");
const paisEscolhidoInput = document.getElementById("paisEscolhido");
const avisoPais = document.getElementById("avisoPais");

function fecharSugestoes() {
    listaSugestoes.innerHTML = "";
    listaSugestoes.classList.remove("ativo");
}

function selecionarPais(pais) {
    inputPais.value = pais.nome;
    paisEscolhidoInput.value = pais.nome;
    bandeiraSelecionada.src = pais.bandeira;
    bandeiraSelecionada.alt = "Bandeira de " + pais.nome;
    bandeiraSelecionada.style.display = "inline-block";
    avisoPais.textContent = "";
    fecharSugestoes();
}

inputPais.addEventListener("input", () => {
    const termo = normalizar(inputPais.value.trim());

    // limpa seleção anterior enquanto o usuário digita
    paisEscolhidoInput.value = "";
    bandeiraSelecionada.style.display = "none";

    if (termo.length === 0) {
        fecharSugestoes();
        avisoPais.textContent = "";
        return;
    }

    const resultados = paisesCopa2026.filter((pais) =>
        normalizar(pais.nome).startsWith(termo)
    );

    listaSugestoes.innerHTML = "";

    if (resultados.length === 0) {
        avisoPais.textContent = "Nenhuma das 48 seleções da Copa 2026 começa com esse nome.";
        fecharSugestoes();
        return;
    }

    avisoPais.textContent = "";

    resultados.forEach((pais) => {
        const item = document.createElement("li");
        item.classList.add("item-sugestao");

        const img = document.createElement("img");
        img.src = pais.bandeira;
        img.alt = "Bandeira de " + pais.nome;

        const span = document.createElement("span");
        span.textContent = pais.nome;

        item.appendChild(img);
        item.appendChild(span);

        item.addEventListener("click", () => selecionarPais(pais));

        listaSugestoes.appendChild(item);
    });

    listaSugestoes.classList.add("ativo");
});

// fecha a lista de sugestões ao clicar fora
document.addEventListener("click", (evento) => {
    if (!evento.target.closest(".grupo-pais")) {
        fecharSugestoes();
    }
});

// validação e exibição da mensagem de sucesso ao enviar o formulário
const formTorcida = document.getElementById("formTorcida");
const nomeCompletoInput = document.getElementById("nomeCompleto");

const overlaySucesso = document.getElementById("overlaySucesso");
const nomeConfirmado = document.getElementById("nomeConfirmado");
const bandeiraConfirmada = document.getElementById("bandeiraConfirmada");
const paisConfirmado = document.getElementById("paisConfirmado");
const fecharModal = document.getElementById("fecharModal");
const btnFecharSucesso = document.getElementById("btnFecharSucesso");

function abrirModalSucesso() {
    const pais = paisesCopa2026.find((p) => p.nome === paisEscolhidoInput.value);

    nomeConfirmado.textContent = nomeCompletoInput.value.trim().split(" ")[0];
    paisConfirmado.textContent = paisEscolhidoInput.value;

    if (pais) {
        bandeiraConfirmada.src = pais.bandeira;
        bandeiraConfirmada.alt = "Bandeira de " + pais.nome;
    }

    overlaySucesso.classList.add("ativo");
    document.body.style.overflow = "hidden";
}

function fecharModalSucesso() {
    overlaySucesso.classList.remove("ativo");
    document.body.style.overflow = "";
}

if (formTorcida) {
    formTorcida.addEventListener("submit", (evento) => {
        evento.preventDefault();

        if (!paisEscolhidoInput.value) {
            avisoPais.textContent = "Selecione um país da lista de sugestões (apenas seleções da Copa 2026).";
            inputPais.focus();
            return;
        }

        if (!nomeCompletoInput.value.trim()) {
            nomeCompletoInput.focus();
            return;
        }

        abrirModalSucesso();
    });
}

if (fecharModal) fecharModal.addEventListener("click", fecharModalSucesso);
if (btnFecharSucesso) btnFecharSucesso.addEventListener("click", () => {
    fecharModalSucesso();
    formTorcida.reset();
    bandeiraSelecionada.style.display = "none";
});

overlaySucesso.addEventListener("click", (evento) => {
    if (evento.target === overlaySucesso) {
        fecharModalSucesso();
    }
});

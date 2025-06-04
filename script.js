/* ------------ Construção da parte de experiências --------- */
const botoes = {
    experiencias: document.querySelector(".experiencias"),
    formacao: document.querySelector(".formacao"),
    habilidades: document.querySelector(".habilidades"),
    sobreMim: document.querySelector(".sobreMim"),
};

const conteudos = {
    experiencias: document.querySelector(".hide-exp"),
    formacao: document.querySelector(".hide-formacao"),
    habilidades: document.querySelector(".hide-habilidades"),
    sobreMim: document.querySelector(".hide-sobreMim"),
};

// Esconde todos os conteúdos ao carregar a página
Object.values(conteudos).forEach((conteudo) => {
    if (conteudo) conteudo.style.display = "none";
});

const toggleConteudo = (tipo) => {
    const conteudoSelecionado = conteudos[tipo];

    if (!conteudoSelecionado) return;

    // Se o conteúdo já estiver visível, ocultá-lo
    if (conteudoSelecionado.style.display !== "none") {
        conteudoSelecionado.style.display = "none";
        return;
    }

    // Esconde todos os conteúdos antes de exibir o novo
    Object.values(conteudos).forEach((conteudo) => {
        if (conteudo) conteudo.style.display = "none";
    });

    // Mostra apenas o conteúdo relacionado ao botão clicado
    conteudoSelecionado.style.display =
        tipo === "sobreMim" ? "inline" : "inline-grid";
};

// Adiciona eventos aos botões
Object.keys(botoes).forEach((tipo) => {
    if (botoes[tipo]) {
        botoes[tipo].addEventListener("click", () => toggleConteudo(tipo));
    }
});

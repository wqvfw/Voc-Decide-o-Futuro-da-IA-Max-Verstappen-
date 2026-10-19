const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A Inteligência Artificial começou na década de 1950 como um sonho de cientistas em laboratórios. Após décadas de evolução silenciosa, ela se tornou real e hoje transforma o mundo... Olhando para essa jornada da mente digital, qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador",
                id: "btn-assustador",
                afirmacao: "No início, ficou com medo do que essa tecnologia pode fazer e achou assustador pensar na velocidade com que a inteligência artificial está avançando."
            },
            {
                texto: "Isso é maravilhoso",
                id: "btn-maravilhoso",
                afirmacao: "Quis logo saber como usar a IA no seu dia a dia e pensou em como ela pode ajudar e facilitar as tarefas da sua vida."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.classList.add("botao");
        botaoAlternativas.id = alternativa.id; // Mantém os IDs para aplicar o CSS do Verstappen
        
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.classList.add("escondido");
    caixaAlternativas.classList.add("escondido");
    caixaResultado.classList.remove("escondido");
    textoResultado.textContent = historiaFinal;
}

// Inicializa o quiz
mostraPergunta();

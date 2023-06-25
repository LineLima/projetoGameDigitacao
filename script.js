// vetor de palavras que serão pedidas no jogo
let palavras = ["programação", "computador", "linguagem", "terminal", "imagem",
"internet", "navegador", "windows", "linux", "desenvolvedor", "desenvolvimento",
"javascript", "treinamento", "digitação", "web", "professor", "aluno", "escola", "faculdade",
"trabalho", "docente", "projeto", "ensino"];

// Variáveis do jogo
var palavraAtual = "";
var pontos = 0;

// Seleciona aleatoriamente uma palavra do array
function pegaPalavraAleatoria() {
  return palavras[Math.floor(Math.random() * palavras.length)];
}

// Exibe uma palavra no display-area
function mostraPalavra() {
  palavraAtual = pegaPalavraAleatoria();
  let areaDisplay = document.getElementById("displayPalavra");
  areaDisplay.textContent = palavraAtual;
}

// Verifica a entrada do jogador
function checkInput() {
  var campoInput = document.getElementById("campoInput");
  var usuarioInput = campoInput.value;

  // Verifica cada caractere digitado pelo usuário
  for (let i = 0; i < usuarioInput.length; i++) {
    if (usuarioInput[i] !== palavraAtual[i]) {
      // Caractere digitado incorretamente
      campoInput.value = usuarioInput.substring(0, i); // Mantém apenas os caracteres corretos digitados até agora
      gameOver(); // Chama a função gameOver()
      campoInput.value = "";
      return; // Interrompe a função
    }
  }

  // Se todos os caracteres foram digitados corretamente até o final da palavra
  if (usuarioInput === palavraAtual) {
    campoInput.value = "";
    pontos++;
    mostraPalavra();
  }
}

// Exibe a pontuação atual do jogador
function mostraPontos() {
  let scoreElement = document.getElementById("pontos");
  scoreElement.textContent = "Pontuação: " + pontos;
}

// Função de fim de jogo
function gameOver() {
  alert("Incorreto! Fim de jogo. Pontuação: " + pontos);
  pontos = 0;
  mostraPalavra();
  mostraPontos();
  mostraRestartButton();
}

// Reinicia o jogo
function restartGame() {
  mostraPalavra();
  mostraPontos();
}

// Exibe o botão de reiniciar
function mostraRestartButton() {
  var restartButton = document.getElementById("restart-button");
  restartButton.style.display = "block";
}

// Event listener para capturar a entrada do jogador
let campoInput = document.getElementById("campoInput");
campoInput.addEventListener("input", checkInput);

// Event listener para o botão de reiniciar
var restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", restartGame);

// Inicializa o jogo
mostraPalavra();
mostraPontos();
mostraRestartButton();

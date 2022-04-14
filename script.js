const paleta = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const elem = document.getElementsByClassName('selected');
const localBotao = document.getElementById('botao');
const pixelBoard2 = document.getElementsByClassName('pixel');
const localBotao2 = document.getElementById('botao2');

// questão 12 usei como referência o site https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript.

function gerarCorAleatoria() {
  const divs = document.createElement('div');
  divs.className = 'color';
  divs.style.backgroundColor = 'black';
  paleta.appendChild(divs);
  for (index = 0; index < 3; index += 1) {
    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);
    let cores = `rgb(${r}, ${g}, ${b})`;
    let divs = document.createElement('div');
    divs.className = 'color';
    divs.style.backgroundColor = cores;
    paleta.appendChild(divs);
  }
}
gerarCorAleatoria();
for (let index = 1; index < 26; index += 1) {
  const divBoard = document.createElement('div');
  divBoard.className = 'pixel';
  divBoard.style.backgroundColor = 'white';
  pixelBoard.appendChild(divBoard);
}
function pegarCor(event) {
  elem[0].classList.remove('selected');
  const elementTarget = event.target;
  elementTarget.classList.add('selected');
}

const primeiraPaleta = paleta.children[0];
primeiraPaleta.classList.add('selected');
paleta.addEventListener('click', pegarCor);

function colocandoCor(event2) {
  const event = event2.target;
  if (event.id !== 'pixel-board') {
    const selected = document.querySelector('.selected');
    const cor = selected.style.backgroundColor;
    event.style.backgroundColor = cor;
  }
}
pixelBoard.addEventListener('click', colocandoCor);

function criarBotao() {
  const botao = document.createElement('button');
  const text = document.createTextNode('Limpar');
  botao.appendChild(text);
  botao.id = 'clear-board';
  localBotao.appendChild(botao);
}
function tirandoCor() {
  for (let index = 0; index < pixelBoard2.length; index += 1) {
    pixelBoard2[index].style.backgroundColor = 'white';
  }
}
criarBotao();
const botaoLimpar = document.getElementById('clear-board');
botaoLimpar.addEventListener('click', tirandoCor);

function criandoBotaoInput() {
  const input = document.createElement('input');
  input.type = 'number';
  input.min = '1';
  input.id = 'board-size';
  input.placeholder = ' Tamanho do Quadro';
  localBotao2.appendChild(input);
  const botao2 = document.createElement('button');
  const text2 = document.createTextNode('VQV');
  botao2.appendChild(text2);
  botao2.id = 'generate-board';
  localBotao2.appendChild(botao2);
}
criandoBotaoInput();

function aumentandoPixel() {
    for (let i = 0; i < pixelBoard.children.length; i += 1) {
      pixelBoard.removeChild(pixelBoard.lastElementChild);
    }
    if (Number(pegaInput.value) > 4 && Number(pegaInput.value) < 50) {
      criarNovoQuadro(pegaInput.value);
    } else if (Number(pegaInput.value) > 0 && Number(pegaInput.value) < 5) {
      criarNovoQuadro(5);
    } else if (Number(pegaInput.value) >= 50) {
      criarNovoQuadro(50);
    } else {
      alert('Board inválido!');
    }
  }
const pegandobotao2 = document.getElementById('generate-board');
pegandobotao2.addEventListener('click', aumentandoPixel);

const pegaInput = document.getElementById('board-size');
// Me inspirei na refatoração através da ajuda do Emerson Alves.
function criarNovoQuadro(quant) {
  const vezes = quant * quant;
  const board = `${(quant * 42)}px`;
  for (let index = 0; index < vezes; index += 1) {
    const divExtra = document.createElement('div');
    divExtra.className = 'pixel';
    divExtra.style.backgroundColor = 'white';
    pixelBoard.style.width = board;
    pixelBoard.style.height = board;
    pixelBoard.appendChild(divExtra);
  }
}

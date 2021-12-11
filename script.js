let paleta = document.getElementById('color-palette');
//questão 12 usei como referência o site https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript. 
function gerarCorAleatoria() {
    let divs = document.createElement('div');
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
let pixelBoard = document.getElementById('pixel-board');
for (index = 1; index < 26; index += 1) {
    let divBoard = document.createElement('div');
    divBoard.className = 'pixel';
    divBoard.style.backgroundColor = 'white';
    pixelBoard.appendChild(divBoard);

}
let primeiraPaleta = paleta.children[0];
console.log(primeiraPaleta);
primeiraPaleta.classList.add('selected');

let elemPaleta = document.getElementById('color-palette')

elemPaleta.addEventListener('click', pegarCor);

function pegarCor(event) {
    console.log('entrou na função');
    let elem = document.getElementsByClassName('selected')
    elem[0].classList.remove('selected');
    console.log('removeu');
    elementTarget = event.target;
    elementTarget.classList.add('selected');

}

let elemPixel = document.getElementById('pixel-board');
elemPixel.addEventListener('click', colocandoCor);

function colocandoCor(event2) {
    let selected = document.querySelector('.selected');
    let cor = selected.style.backgroundColor;
    console.log(cor);
    event2.target.style.backgroundColor = cor;

}
let localBotao = document.getElementById('botao');
function criarBotao(botao) {
    botao = document.createElement('button');
    let text = document.createTextNode('Limpar');
    botao.appendChild(text);
    botao.id = 'clear-board';
    localBotao.appendChild(botao);
}
criarBotao();
let botaoLimpar = document.getElementById('clear-board')
botaoLimpar.addEventListener('click', tirandoCor)

function tirandoCor() {
    let pixelBoard2 = document.getElementsByClassName('pixel');
    console.log(pixelBoard2);
    for (index = 0; index < pixelBoard2.length; index += 1) {
        pixelBoard2[index].style.backgroundColor = 'white';
    }
}
let localBotao2 = document.getElementById('botao2')
function criandoBotaoInput(botao2, input) {
    input = document.createElement('input');
    input.type = 'number';
    input.min = '1'
    input.id = 'board-size';

    localBotao2.appendChild(input)
    botao2 = document.createElement('button');
    let text2 = document.createTextNode('VQV');
    botao2.appendChild(text2);
    botao2.id = 'generate-board';
    localBotao2.appendChild(botao2);
}
criandoBotaoInput()

let pegandobotao2 = document.getElementById('generate-board');
pegandobotao2.addEventListener('click', aumentandoPixel)

let pegaInput = document.getElementById('board-size');
let quadro = document.getElementById('pixel-board');
//Me inspirei na refatoração através da ajuda do Emerson Alves.
function criarNovoQuadro(quant) {
    N = (quant * 42);
    let vezes = quant * quant
    let board = N + 'px';
    for (index = 0; index < vezes; index += 1) {
        let divExtra = document.createElement('div');
        divExtra.className = 'pixel';
        divExtra.style.backgroundColor = 'white';
        quadro.style.width = quadro.style.height = board;
        pixelBoard.appendChild(divExtra);
    }
}
function aumentandoPixel() {
    let quadroTamanho = quadro.children.length
    console.log(quadroTamanho);
    for (i = 0; i < quadroTamanho; i += 1) {
        quadro.removeChild(quadro.lastElementChild);
    }
    let textInput = pegaInput.value;
    if (Number(textInput) > 4 && Number(textInput) < 50) {
        criarNovoQuadro(textInput);
    } else if (Number(textInput) > 0 && Number(textInput) < 5) {
        criarNovoQuadro(5);

    } else if (Number(textInput) >= 50) {
        criarNovoQuadro(50);
    } else {
        alert('Board inválido!');
    }
}

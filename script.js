let paleta = document.getElementById('color-palette');
let arrayColor = ['black', 'red', 'green', 'blue'];
for (index = 0; index < 4; index += 1) {
    let divs = document.createElement('div');
    divs.className = 'color';
    divs.style.backgroundColor = arrayColor[index];
    paleta.appendChild(divs);
}
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

function aumentandoPixel() {
    let quadro = document.getElementById('pixel-board');
    let pegaInput = document.getElementById('board-size');
    let divlength = document.getElementsByClassName('pixel');
    let removeChild = 0;
    let quadroTamanho = quadro.children.length
    console.log(quadroTamanho);
    for (i = 0; i < quadroTamanho; i += 1) { 
        removeChild = quadro.removeChild(quadro.lastElementChild);
    }
    let n = 0;
    let N = 0;
    let quant = 0;
    let textInput = pegaInput.value;
    if (Number(textInput) > 0) {
        n = Number(textInput);
        N = (n * 47);
        quant = n * n
        let border = N + 'px';
        for (index = 1; index < quant + 1; index += 1) {
            let divExtra = document.createElement('div');
            divExtra.className = 'pixel';
            divExtra.style.backgroundColor = 'white';
            quadro.style.width = border;
            quadro.style.height = border;
            pixelBoard.appendChild(divExtra);
        }
    } else {
        alert('Board inválido!');
    }
}
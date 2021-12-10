let paleta = document.getElementById('color-palette');
let arrayColor = ['black','red', 'green', 'blue'];
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

function pegarCor (event) {
console.log('entrou na função');
let elem = document.getElementsByClassName('selected')
 elem[0].classList.remove('selected');
 console.log('removeu');
 elementTarget = event.target;
 elementTarget.classList.add('selected');
 
}

let elemPixel = document.getElementById('pixel-board');
elemPixel.addEventListener('click',colocandoCor);

function colocandoCor (event2) {
    let selected = document.querySelector('.selected');
    let cor = selected.style.backgroundColor;
    console.log(cor);
    event2.target.style.backgroundColor = cor;
    
}
let localBotao = document.getElementById('botao');
function criarBotao (botao) {
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
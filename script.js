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
primeiraPaleta.classList.add('selected')


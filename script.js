let palavras = [];
let alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let acentos = ['´', '~', '^', '-'];

// PALAVRA
let tentativas = document.querySelector('div.tentativas');
for (let x = 5; x >= 1; x--) {
    let palavra = document.createElement('div');
    palavra.className = 'palavra';

    for (let x = 5; x >= 1; x--) {
        let letr = document.createElement('p');
        letr.textContent = `X`;
        letr.className = 'letr';
        palavra.appendChild(letr);
    }

    tentativas.appendChild(palavra);
}

// TECLADO
let teclado = document.querySelector('div.botoes');
for (element of alfabeto) {
    let label = document.createElement('label');
    label.setAttribute('for', element);
    label.textContent = element;
    
    let input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'letras');
    input.id = element;
    
    teclado.appendChild(input);
    teclado.appendChild(label);
}

let palavras = [];
let alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let acentos = ['´', '~', '^', '-'];

let teclado = document.querySelector('div.botoes');

for (element of alfabeto) {
    let label = document.createElement('label');
    label.setAttribute('for', element);
    label.textContent = element;
    
    let input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'letras');
    input.id = element;
    
    teclado.appendChild(label);
    teclado.appendChild(input);
}

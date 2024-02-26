let palavras = ['FEUDO', 'RAPEL', 'AIPOS', 'dócil', 'fúria', 'grato', 'haste', 'ímpar', 'líder', 'móvel', 'nobre', 'régua', 'sábio', 'gênio', 'hábil', 'ídolo', 'lírio', 'túnel'];
let alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let sortword = palavras[Math.floor(Math.random() * ((palavras.length - 1) - 0 + 1)) + 0];

let cliques = 0;
// PALAVRA
let tentativas = document.querySelector('div.tentativas');
for (let x = 5; x >= 1; x--) {
    let palavra = document.createElement('div');
    palavra.className = 'palavra';

    for (let x = 0; x < 5; x++) {
        let letr = document.createElement('p');
        letr.className = 'letr';
        letr.id = sortword.toUpperCase().split('')[x];
        palavra.appendChild(letr);
    }

    tentativas.appendChild(palavra);
}
sortword = sortword.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase().split('') // retira os acentos

// TECLADO
let teclado = document.querySelector('div.botoes');
for (element of alfabeto) {
    let label = document.createElement('label');
    label.setAttribute('for', element);
    label.textContent = element;
    label.className = 'teclas';

    let input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'letras');
    input.id = element;

    teclado.appendChild(input);
    teclado.appendChild(label);
}

// TENTATIVAS
let letrasTec = document.querySelectorAll('label.teclas');
let acertos = 0;
console.log(sortword)
letrasTec.forEach((item) => {
    item.addEventListener('click', () => {
        if (cliques % 5 == 0) {
            acertos = 0;
        }
        if (cliques == 24 && acertos < 4) {
            window.alert('perdeu');
        }

        let letrasIn = document.querySelectorAll('p.letr');
        let lc = letrasIn[cliques];
        letrasIn.textContent = item.textContent;

        if (item.style.backgroundColor != 'red') {
            if (sortword.includes(item.textContent)) {
                if (lc.id.normalize('NFD').replace(/[\u0300-\u036f]/g, "") == item.textContent) {
                    lc.textContent = lc.id;
                    lc.style.backgroundColor = 'green';

                    if (acertos == 4) {
                        window.alert('venceu!');
                    } else {
                        acertos++;
                    }

                } else {
                    lc.textContent = item.textContent;
                    lc.style.backgroundColor = 'yellow';

                    acertos = 0;
                }

            } else {
                lc.textContent = item.textContent;
                lc.style.backgroundColor = 'red';
                item.style.opacity = '20%';
                item.style.cursor = 'auto';

                acertos = 0;
            }
            item.style.border = '2px solid cadetblue';

            cliques++;
        }
    });
});

let letrasIn = document.querySelectorAll('p.letr');

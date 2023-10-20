const maior = 100;
const menor = 1;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random()* maior + 1);
}

console.log(numeroSecreto);

const elementoMenor = document.getElementById('menor-valor');
elementoMenor.innerHTML = menor;

const elementoMaior = document.getElementById('maior-valor');
elementoMaior.innerHTML = maior;

/* the funni code
const numeroDitto = document.getElementById('said');
numeroDitto.innerHTML = numeroSecreto;
*/
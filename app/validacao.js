function removerponto(chute) {
    while(chute.charAt(chute.length-1) == '.') {
        chute = chute.substr(0, chute.length-1);
    }
    return chute;
}
function verificaSeChuteEValido(chute) {
    const numero = +chute

    if (naoENumero(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
    }

    if (numeroForaDaRange(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Diga um número entre ${menor} e ${maior}</div>`
    }
}

function naoENumero(numero) {
    return Number.isNaN(numero)
}

function numeroForaDaRange(numero) {
    return numero > maior || numero < menor; 
}
function removerponto(chute) {
    while(chute.charAt(chute.length-1) == '.') {
        chute = chute.substr(0, chute.length-1);
    }
    return chute;
}
function verificaSeChuteEValido(chute) {
    const numero = +chute

    if (naoENumero(numero)) {
        console.log("Valor inválido")
    }

    if (numeroForaDaRange(numero)) {
        console.log(`valor invalido: o numero secreto precisa estar entre ${menor} e ${maior}`)
    }
}

function naoENumero(numero) {
    return Number.isNaN(numero)
}

function numeroForaDaRange(numero) {
    return numero > maior || numero < menor; 
}
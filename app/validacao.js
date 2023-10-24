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
        return
    }

    if (numeroForaDaRange(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Diga um número entre ${menor} e ${maior}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você venceu!</h2>
        <h3>O número secreto era ${numeroSecreto}!</h3>
        
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += '<div>O número secreto é menor  <i class="fa-solid fa-angle-down"></i></div> '
    } else {
        elementoChute.innerHTML += '<div>O número secreto é maior  <i class="fa-solid fa-angle-up"></i></div>'
    }
}

function naoENumero(numero) {
    return Number.isNaN(numero)
}

function numeroForaDaRange(numero) {
    return numero > maior || numero < menor; 
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
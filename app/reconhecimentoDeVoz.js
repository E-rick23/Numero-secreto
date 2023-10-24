window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start();

recognition.addEventListener('result', onSpeak)

const numeroDitto = document.getElementById('said');
var chute;

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    chute = removerponto(chute);
    console.log(chute);
    numeroDitto.innerHTML = chute;
    verificaSeChuteEValido(chute);
}



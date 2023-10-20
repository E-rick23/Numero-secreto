window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start();

recognition.addEventListener('result', onSpeak)

const numeroDitto = document.getElementById('said');

function onSpeak(e) {
    numeroDitto.innerHTML = e.results[0][0].transcript;
    console.log(e.results[0][0].transcript);
}



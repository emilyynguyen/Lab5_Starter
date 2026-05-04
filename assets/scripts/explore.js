// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select'); // adjust id if needed
  const talkButton = document.querySelector('button');
  const textArea = document.querySelector('textarea');
  const faceImage = document.querySelector('img');

  // speech synthesizer
  const synth = window.speechSynthesis;
  let voices = [];

  // load voices
  function loadVoices() {
    voices = synth.getVoices();

    voiceSelect.innerHTML = ''; 

    voices.forEach(function(voice) {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();
  synth.addEventListener('voiceschanged', loadVoices);

  //button click
  talkButton.addEventListener('click', function() {
    const text = textArea.value;

    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);

    // selected voice
    const selectedVoiceName = voiceSelect.value;
    utterance.voice = voices.find(v => v.name === selectedVoiceName);

    // swap to open mouth while speaking
    utterance.onstart = function() {
      faceImage.src = 'assets/images/smiling-open.png'; 
    };
    // swap back
    utterance.onend = function() {
      faceImage.src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);
  });
}

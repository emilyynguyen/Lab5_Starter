// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('img');
  const audio = document.querySelector('audio');
  const volumeSlider = document.querySelector('input[type="range"]');
  const volumeIcon = document.querySelector('.volume-icon'); 
  const playButton = document.querySelector('button');

  // select horn
  hornSelect.addEventListener('change', function() {
    const selected = hornSelect.value; 

    hornImage.src = `assets/images/${selected}.svg`;
    audio.src = `assets/audio/${selected}.mp3`;
  });


  // volume slider 
  volumeSlider.addEventListener('input', function() {
    const vol = parseInt(volumeSlider.value);
    audio.volume = vol / 100;

    if (vol === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (vol < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (vol < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  // button 
  playButton.addEventListener('click', function() {
    audio.play();

    if (hornSelect.value === 'party-horn') {
      confetti(); 
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
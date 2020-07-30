import { audio } from './radioPlayer.js';

export const addZero = n => n < 10 ? '0' + n : n;

export const allOff = () => {
  const videoPlayer = document.querySelector('.video-player');
  const audioPlayer = document.querySelector('.audio-player');

  if(!videoPlayer.paused) videoPlayer.pause();

  if(!audioPlayer.paused){
    audioPlayer.pause();
    document.querySelector('.audio').classList.remove('play');
    document.querySelector('.audio-button__play').classList.add('fa-play');
    document.querySelector('.audio-button__play').classList.remove('fa-pause');
  }

  if(!audio.paused){
    audio.pause();
    document.querySelector('.radio').classList.remove('play');
    document.querySelector('.radio-stop').classList.add('fa-play');
    document.querySelector('.radio-stop').classList.remove('fa-stop');
  }
}

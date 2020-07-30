import { addZero, allOff } from './sub.js';

export const videoPlayerInit = () => {
  const videoPlayer = document.querySelector('.video-player');
  const videoButtonPlay = document.querySelector('.video-button__play');
  const videoButtonStop = document.querySelector('.video-button__stop');
  const videoProgress = document.querySelector('.video-progress');
  const videoTimePassed = document.querySelector('.video-time__passed');
  const videoTimeTotal = document.querySelector('.video-time__total');

  const toggleIcon = () => {
    if (videoPlayer.paused) {
      videoButtonPlay.classList.remove('fa-pause');
      videoButtonPlay.classList.add('fa-play');
    }else {
      videoButtonPlay.classList.add('fa-pause');
      videoButtonPlay.classList.remove('fa-play');
    }
  }

  const togglePlay = () => {
    if(videoPlayer.paused){
      allOff();
      videoPlayer.play();
    }else videoPlayer.pause();
  }

  const stopPlay = () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  }

  videoPlayer.addEventListener('click', togglePlay);
  videoPlayer.addEventListener('play', toggleIcon);
  videoPlayer.addEventListener('pause', toggleIcon);

  videoPlayer.addEventListener('timeupdate', () => {
    const currentTime = videoPlayer.currentTime;
    const duration = videoPlayer.duration;

    let minutesPassed = addZero(Math.floor( currentTime/60 ));
    let secondsPassed = addZero(Math.floor( currentTime%60 ));

    let minutesTotal = addZero(Math.floor( duration/60 ));
    let secondsTotal = addZero(Math.floor( duration%60 ));

    videoTimePassed.textContent = minutesPassed + ":" + secondsPassed;
    videoTimeTotal.textContent = minutesTotal + ":" + secondsTotal;
    videoProgress.value = (currentTime / duration) * 100;
  });

  videoButtonStop.addEventListener('click', stopPlay);
  videoButtonPlay.addEventListener('click', togglePlay);

  videoProgress.addEventListener('change', () => {
    const duration = videoPlayer.duration;
    const value = videoProgress.value;

    videoPlayer.currentTime = (value * duration) / 100;
  });
}

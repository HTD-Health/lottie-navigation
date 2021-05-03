const animation = lottie.loadAnimation({
  container: document.getElementById('container'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'json/nav.json'
});

const onLottieLoad = () => {
  animation.goToAndStop(animation.totalFrames, true);
  const onMenuClicked = (startFrame) => () => changeMenu(startFrame);
  
  const home = document.getElementById("home");
  const myBooks = document.getElementById("mybooks");
  const notifications = document.getElementById("notifications");
  
  home.addEventListener('click', onMenuClicked(0));
  myBooks.addEventListener('click', onMenuClicked(120));
  notifications.addEventListener('click', onMenuClicked(240));
};

animation.addEventListener("DOMLoaded", onLottieLoad);

let previousAnimationStart = -1;

const changeMenu = (currentAnimationStart) => {
  const animationDuration = 30;
  const exitAnimationDuration = 15;
  const currentAnimationEnd = currentAnimationStart + animationDuration;
  const currentAnimationRepeatStart = currentAnimationEnd + 10;
  const currentAnimationRepeatEnd = currentAnimationRepeatStart + animationDuration;
  const previousAnimationExitStart = previousAnimationStart + 90;
  const previousAnimationExitEnd = previousAnimationExitStart + exitAnimationDuration;
   
  if (previousAnimationStart !== -1) {
    animation.playSegments([previousAnimationExitStart, previousAnimationExitEnd], true); 
  }
  
  if (previousAnimationStart === currentAnimationStart) {
    animation.playSegments([currentAnimationRepeatStart, currentAnimationRepeatEnd], true);
  } else {
    animation.playSegments([currentAnimationStart, currentAnimationEnd], false);    
  }
        
  previousAnimationStart = currentAnimationStart;
};
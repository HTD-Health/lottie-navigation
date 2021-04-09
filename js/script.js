var navBar = lottie.loadAnimation({
  container: document.getElementById('container'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'json/nav.json'
});

var currentActiveFrame = 0;
var lastActiveFrame = 0;

function changeMenu(currentFrame, lastFrame, animStart, animEnd, repeatAnimStart, repeatAnimEnd, goToFrame, exitAnimDuration) {

  // repeat animation
  if (lastFrame === animEnd) {
    navBar.playSegments([repeatAnimStart, repeatAnimEnd], false);
  // exit + entry animation
  } else if (currentFrame !== 0) {
    navBar.playSegments([currentFrame, currentFrame + exitAnimDuration], false);
    navBar.playSegments([animStart, animEnd], false);
  // entry animation
  } else {
    navBar.playSegments([animStart, animEnd], true);
  };

  lastActiveFrame = animEnd;
  currentActiveFrame = goToFrame;

};

window.onload = function (){

  // go to first frame of nav bar
  navBar.goToAndStop(0,true);
  
  var home = document.getElementById("home");
  var mybooks = document.getElementById("mybooks");
  var notifications = document.getElementById("notifications");

  home.addEventListener('click', function(){
    changeMenu(currentActiveFrame, lastActiveFrame, 0, 30, 40, 70, 90, 15);
  }, false);

  mybooks.addEventListener('click', function(){
    changeMenu(currentActiveFrame, lastActiveFrame, 120, 150, 160, 190, 210, 15);
  }, false);

  notifications.addEventListener('click', function(){
    changeMenu(currentActiveFrame, lastActiveFrame, 240, 270, 280, 310, 330, 15);
  }, false);

};
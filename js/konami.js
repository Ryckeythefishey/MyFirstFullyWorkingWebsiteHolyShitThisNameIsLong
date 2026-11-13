// Source - https://stackoverflow.com/a/31627191
// Posted by w.stoettinger, modified by community. See post 'Timeline' for change history
// Retrieved 2026-11-06, License - CC BY-SA 3.0

// a key map of allowed keys
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function (e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
  var newTab = window.open("./video/its MARIO.mp4", "_blank");

  if (newTab) {
    newTab.focus();
    newTab.onload = function () {
      newTab.document.title = "I'ts Mario";
    };
    setTimeout(function () {
      if (newTab.document) {
        newTab.document.title = "I'ts Mario";
      }
    }, 200);

  } else {
    alert("pls allow popups :(");
  }
}
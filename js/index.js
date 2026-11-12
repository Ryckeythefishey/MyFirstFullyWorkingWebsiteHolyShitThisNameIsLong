window.secretAudio = new Audio("./audio/one piece intro.mp3");
window.secretAudio.preload = "auto";

window.sansAudio = new Audio("./audio/sans phase 2.mp3");
window.sansAudio.preload = "auto";

console.log(
  "%c🏴‍☠️     GOL D. RYCKEY     🏴‍☠️", 
  "color: gold; font-size: 20px; font-weight: bold; background-color: black; padding: 5px 10px; border-radius: 5px;"
);

console.log(
  "%cYou want my treasure? You can have it! I left everything I gathered together in one place. Now you just have to find it!", 
  "color: #f1c40f; font-size: 14px; font-style: italic; font-weight: bold;"
);

console.log(
  "Type  %csecretAudio.play()%c  and press Enter to find the ONE PIECE!", 
  "color: red; font-weight: bold; font-size: 14px;", 
  "color: inherit; font-weight: normal;"
);

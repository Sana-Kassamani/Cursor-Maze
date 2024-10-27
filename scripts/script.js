//launch the game
//O(1)
function play() {
  var startBtn = document.getElementById("start");
  startBtn.addEventListener("mouseover", start);
}

// mouse passed over the start button
// O(1)
function start() {
  changeStatus("Here You Go! Be Careful...");
  manageTouchingWalls(false);
  manageCheating(false);
  reachEnd();
}

// add event on mouse reaching the end
//O(1)
function reachEnd() {
  var end = document.getElementById("end");
  end.addEventListener("mouseover", win);
}

play();

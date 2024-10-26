function play() {
  var startBtn = document.getElementById("start");
  startBtn.addEventListener("mouseover", start);
}

function start() {
  changeStatus("Here You Go! Be Careful...");
  manageTouchingWalls(false);
  manageCheating(false);
  reachEnd();
}

function reachEnd() {
  var end = document.getElementById("end");
  end.addEventListener("mouseover", win);
}

play();

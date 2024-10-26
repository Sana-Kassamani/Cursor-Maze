var startBtn = document.getElementById("start");
startBtn.addEventListener("mouseover", start);

var walls = document.querySelectorAll(".boundary");
for (var i = 0; i < walls.length; i++) {
  walls[i].addEventListener("mouseover", function () {
    turnWallsRed(walls);
  });
}

function start() {}
function turnWallsRed(walls) {
  for (var i = 0; i < walls.length; i++) {
    walls[i].classList.add("highlighted");
  }
}
function preventCheating() {
  var game_canvas = document.getElementById("game");
  game_canvas.addEventListener("mouseleave", function () {
    turnWallsRed(walls);
  });
}

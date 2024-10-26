var startBtn = document.getElementById("start");
startBtn.addEventListener("mouseover", start);

function start() {
  //   windows.location.reload();
  var walls = document.querySelectorAll(".boundary");
  preventTouchingWalls(walls);
  preventCheating();
  reachEnd();
}
function preventTouchingWalls(walls) {
  for (var i = 0; i < walls.length; i++) {
    walls[i].addEventListener("mouseover", function () {
      turnWallsRed(walls);
    });
  }
}

function preventCheating() {
  var game_canvas = document.getElementById("game");
  game_canvas.addEventListener("mouseleave", turnWallsRed);
}
function turnWallsRed(walls) {
  var walls = document.querySelectorAll(".boundary");
  for (var i = 0; i < walls.length; i++) {
    walls[i].classList.add("highlighted");
  }
  changeStatus(false);
}
function removeCheatingRestriction(walls) {
  var game_canvas = document.getElementById("game");

  game_canvas.removeEventListener("mouseleave", turnWallsRed);
}

function reachEnd() {
  var end = document.getElementById("end");
  end.addEventListener("mouseover", function () {
    changeStatus(true);
    removeCheatingRestriction();
  });
}

function changeStatus(result) {
  var status = document.getElementById("status");
  if (result) {
    status.innerHTML = "Congrats!! You Won!";
  } else {
    status.innerHTML = "Oops!! Try Again...";
  }
}

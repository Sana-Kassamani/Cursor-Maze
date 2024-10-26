function changeStatus(updated_status) {
  var status = document.getElementById("status");
  status.innerHTML = updated_status;
}

function turnWallsRed() {
  var walls = document.querySelectorAll(".boundary");
  for (var i = 0; i < walls.length; i++) {
    walls[i].classList.add("highlighted");
  }
  lose();
}
function manageTouchingWalls(allow) {
  var walls = document.querySelectorAll(".boundary");
  if (allow) {
    for (var i = 0; i < walls.length; i++) {
      walls[i].removeEventListener("mouseover", turnWallsRed);
    }
  } else {
    for (var i = 0; i < walls.length; i++) {
      walls[i].addEventListener("mouseover", turnWallsRed);
    }
  }
}

function manageCheating(allow) {
  var game_canvas = document.getElementById("game");
  if (allow) {
    game_canvas.removeEventListener("mouseleave", turnWallsRed);
  } else {
    game_canvas.addEventListener("mouseleave", turnWallsRed);
  }
}
function lose() {
  var startBtn = document.getElementById("start");
  var end = document.getElementById("end");
  changeStatus("Oops!! Reload to Try Again...");
  startBtn.removeEventListener("mouseover", start);
  end.removeEventListener("mouseover", win);
}
function win() {
  changeStatus("Congrats!! You Won!");
  manageCheating(true);
  manageTouchingWalls(true);
}

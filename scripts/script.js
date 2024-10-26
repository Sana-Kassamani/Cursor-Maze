var startBtn = document.getElementById("start");
startBtn.addEventListener("mouseover", start);

function start() {
  //   windows.location.reload();
  manageTouchingWalls(false);
  manageCheating(false);
  reachEnd();
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
function turnWallsRed() {
  var walls = document.querySelectorAll(".boundary");
  for (var i = 0; i < walls.length; i++) {
    walls[i].classList.add("highlighted");
  }
  changeStatus(false);
}

function reachEnd() {
  var end = document.getElementById("end");
  end.addEventListener("mouseover", function () {
    changeStatus(true);
    manageCheating(true);
    manageTouchingWalls(true);
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

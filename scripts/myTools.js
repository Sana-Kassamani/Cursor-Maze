// change the h2 element in html to show status
// O(1)
function changeStatus(updated_status) {
  var status = document.getElementById("status");
  status.innerHTML = updated_status;
}

// select all walls and change color
// O(n), n being number of walls of class boundary in html
function turnWallsRed() {
  var walls = document.querySelectorAll(".boundary");
  for (var i = 0; i < walls.length; i++) {
    walls[i].classList.add("highlighted");
  }
  lose();
}

// add or remove the ability to touch walls
// O(n), n being number of walls of class boundary in html
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

// add or remove the ability to go out of the maze
// O(1)
function manageCheating(allow) {
  var game_canvas = document.getElementById("game");
  if (allow) {
    game_canvas.removeEventListener("mouseleave", turnWallsRed);
  } else {
    game_canvas.addEventListener("mouseleave", turnWallsRed);
  }
}
// diplay that game is over and remove events
//O(1)
function lose() {
  var startBtn = document.getElementById("start");
  var end = document.getElementById("end");
  changeStatus("Oops!! Reload to Try Again...");
  startBtn.removeEventListener("mouseover", start);
  end.removeEventListener("mouseover", win);
}
// diplay that player has won and remove events of red walls
//O(1)
function win() {
  changeStatus("Congrats!! You Won!");
  manageCheating(true);
  manageTouchingWalls(true);
}

var startBtn = document.getElementById("start");
startBtn.addEventListener("mouseover", start);

function start() {
  turnWallsRed();
}
function turnWallsRed() {
  var walls = document.querySelectorAll(".boundary");
  for (var i = 0; i < walls.length; i++) {
    walls[i].addEventListener("mouseover", function () {
      for (var i = 0; i < walls.length; i++) {
        walls[i].classList.add("highlighted");
      }
    });
  }
}

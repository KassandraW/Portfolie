window.addEventListener("load", start);

let points = 0;
// let lives = 3;

function start() {
  printPoints();
  // Adding eventlisteners to objects
  document
    .querySelector("#apple_container1")
    .addEventListener("mousedown", hitApple);
  document
    .querySelector("#flask_container1")
    .addEventListener("mousedown", hitFlask);
  // Adding classes to containers
  document.querySelector("#apple_container1").classList.add("falling");
  document.querySelector("#apple_container1").classList.add("pos1");
  document.querySelector("#flask_container1").classList.add("flying");
  document.querySelector("#flask_container1").classList.add("flypos1");
}

function hitApple() {
  console.log("hitApple");
  document
    .querySelector("#apple_container1")
    .removeEventListener("mousedown", hitApple);
  document.querySelector("#apple_container1").classList.add("freeze");
  document.querySelector("#apple_sprite1").classList.add("disAppear");
  document
    .querySelector("#apple_container1")
    .addEventListener("animationend", restartApple);

  addPoint();
  printPoints();
}

function addPoint() {
  points = points + 1;
  // hvis points er større end 25 afspil fanfare
}

function printPoints() {
  document.querySelector("#points").textContent = points;
}

function restartApple() {
  console.log("restartApple");
  document.querySelector("#apple_container1").classList = "";
  document.querySelector("#apple_sprite1").classList = "";
  document.querySelector("#apple_sprite1").offsetHeight;

  let rndNum = generateRandomNumber(8);

  document.querySelector("#apple_container1").classList.add("pos" + rndNum);

  document.querySelector("#apple_container1").classList.add("falling");
  document
    .querySelector("#apple_container1")
    .addEventListener("mousedown", hitApple);
}

function hitFlask() {
  //console.log("hitFlask");
  document
    .querySelector("#flask_container1")
    .removeEventListener("mousedown", hitFlask);
  document.querySelector("#flask_container1").classList.add("freeze");
  document.querySelector("#flask_sprite1").classList.add("disAppear");
  document
    .querySelector("#flask_container1")
    .addEventListener("animationend", restartFlask);
}

function restartFlask() {
  console.log("restartFlask");
  document.querySelector("#flask_container1").classList = "";
  document.querySelector("#flask_sprite1").classList = "";

  document.querySelector("#flask_sprite1").offsetHeight;

  document.querySelector("#flask_container1").classList.add("flying");

  let rndNum = generateRandomNumber(4);

  document.querySelector("#flask_container1").classList.add("flypos" + rndNum);

  document
    .querySelector("#flask_container1")
    .addEventListener("mousedown", hitFlask);
}

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#timeglas_container").addEventListener("click", startSpillet);
}

function startSpillet() {
  console.log("startSpillet - tiden er startet");

  //Starter timer-animationen
  document.querySelector("#timeglas_sprite").classList.add("time");

  //Når animationen er færdig kaldes stopSpillet()
  document.querySelector("#timeglas_sprite").addEventListener("animationend", stopSpillet);
}

function stopSpillet() {
  console.log("stopSpillet - tiden er gået");

  //...til levelComplete eller gameOver
}

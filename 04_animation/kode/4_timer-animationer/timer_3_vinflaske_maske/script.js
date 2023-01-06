// når siden er loadet går man til funktionen sidenVises
window.addEventListener("load", sidenVises);

function sidenVises() {
  // Skriv ud i konsollen hvor langt vi er nået
  console.log("sidenVises");

  // Når der klikkes på flasken skal man gå til funktionen startSpillet
  document.querySelector("#time_container").addEventListener("click", startSpillet);
}

function startSpillet() {
  // Skriv ud i konsollen hvor langt vi er nået
  console.log("startSpillet - tiden er startet");

  //Starter timer-animationen på masken
  document.querySelector("#vin").classList.add("flasketimer");

  // når timeranimationen er færdig kaldes funktionen stopSpillet()
  document.querySelector("#vin").addEventListener("animationend", stopSpillet);
}

function stopSpillet() {
  // Skriv ud i konsollen hvor langt vi er nået
  console.log("stopSpillet - tiden er gået");

  //...til levelComplete eller gameOver
}

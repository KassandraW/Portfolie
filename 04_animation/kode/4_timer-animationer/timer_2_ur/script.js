// når siden er loadet går man til funktionen sidenVises
window.addEventListener("load", sidenVises);

function sidenVises() {
  // Skriv ud i konsollen hvor langt vi er nået
  console.log("sidenVises");

  // Når der klikkes på uret skal man gå til funktionen startSpillet
  document.querySelector("#time_container").addEventListener("click", startSpillet);
}

function startSpillet() {
  // Skriv ud i konsollen hvor langt vi er nået
  console.log("startSpillet - tiden er startet");
  // fjerner click-eventlistener
  document.querySelector("#time_container").removeEventListener("click", startSpillet);

  //Starter timeren (ur-animationen)
  document.querySelector("#minut_viser").classList.add("minut_animation");
  document.querySelector("#time_viser").classList.add("time_animation");

  //Når animationen er færdig kaldes stopSpillet()
  document.querySelector("#minut_viser").addEventListener("animationend", stopSpillet);
}

function stopSpillet() {
  // Skriv ud i konsollen hvor langt vi er nået
  console.log("stopSpillet - tiden er gået");

  //...til levelComplete eller gameOver
}

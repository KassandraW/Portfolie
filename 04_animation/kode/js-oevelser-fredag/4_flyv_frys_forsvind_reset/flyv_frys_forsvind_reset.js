window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("funktionen siden vises");

  document.querySelector("#red_container").classList.add("pos1");
  document.querySelector("#red_container").classList.add("flyv");
  document.querySelector("#red_container").addEventListener("mousedown", clickRed);
}

function clickRed() {
  console.log("funktionen clickRed");
  document.querySelector("#red_container").removeEventListener("mousedown", clickRed);

  document.querySelector("#red_container").classList.add("frys");
  document.querySelector("#red_sprite").classList.add("forsvind");

  document.querySelector("#red_container").addEventListener("animationend", genstartRed);
}

function genstartRed(){
  console.log("funktion genstartRed");
  document.querySelector("#red_container").removeEventListener("animationend", genstartRed);
  
  // fjerner alle klasser fra container og sprite
  document.querySelector("#red_container").classList="";
  document.querySelector("#red_sprite").classList="";

  document.querySelector("#red_container").offsetLeft;
//giver container flyve animation og position2
  document.querySelector("#red_container").classList.add("pos2");
  document.querySelector("#red_container").classList.add("flyv");

  document.querySelector("#red_container").addEventListener("mousedown", clickRed);


}
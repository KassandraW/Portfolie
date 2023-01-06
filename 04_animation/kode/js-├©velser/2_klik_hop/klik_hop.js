window.addEventListener("load",sidenVises);

function sidenVises(){
    console.log("sidenVises tiptop");

    document.querySelector("#blomst_container2").addEventListener("click",blomstHopper);
}

function blomstHopper(){
    console.log("blomst hopper nu");

    document.querySelector("#blomst_container2").classList.add("hop");
}

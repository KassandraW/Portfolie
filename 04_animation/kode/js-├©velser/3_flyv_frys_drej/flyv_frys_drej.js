window.addEventListener("load",sidenVises);

function sidenVises(){
    console.log("sidenVises tiptop");

    document.querySelector("#blomst_container1").classList.add("flyv");
    document.querySelector("#blomst_container1").addEventListener("click",blomstFrysDrej);
}

function blomstFrysDrej(){
    console.log("blomst stopper og bla");

    document.querySelector("#blomst_container1").classList.add("frys");
    document.querySelector("#blomst_sprite1").classList.add("drej");
}

window.addEventListener("load",sidenVises);

function sidenVises(){
    console.log("sidenVises tiptop");

    document.querySelector("#blomst_container1").addEventListener("click",blomstForsvinder);
}

function blomstForsvinder(){
    console.log("blomst forsvinder nu");

    document.querySelector("#blomst_container1").classList.add("forsvind");
}
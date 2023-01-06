window.addEventListener("load",startSpil);

let lives =3;

let point=0;

let number = Math.floor(Math.random()*5)+1;


printLiv();
printPoint();

function startSpil(){
    console.log("Spillet er loadet")

    //ulv bevæger sig
    document.querySelector("#ulv_container").classList.add("move_ulv");
    document.querySelector("#ulv_sprite").classList.add("run");

    //kylling bevæger sig
    document.querySelector("#kylling_container").classList.add("move_kylling");
    document.querySelector("#kylling_sprite").classList.add("run_kylling");

    //event click ulv
    document.querySelector("#ulv_container").addEventListener("mousedown", clickUlv);

    //event click kylling
    document.querySelector("#kylling_container").addEventListener("mousedown", clickKylling);
    
    
}

//kyllinge funktioner ---------------------------------------

function clickKylling(){
    console.log("clickKylling")
    document.querySelector("#kylling_container").removeEventListener("mousedown", clickKylling);

    //få point
    console.log("gainPoint");

    point=point+1;
    printPoint();

    if(point===3){
        victory();
    } else{
        //event genstart efter animation
    document.querySelector("#kylling_container").addEventListener("animationend", genstartKylling);

    

    //tilføj classes
    document.querySelector("#kylling_container").classList.add("frys");


   
    document.querySelector("#kylling_sprite").classList.add("flyv_ud");

    //event genstart efter animation
    document.querySelector("#kylling_container").addEventListener("animationend", genstartKylling);
    } 
    
}

function genstartKylling(){
    console.log("genstartKylling")
    document.querySelector("#kylling_container").removeEventListener("animationend", genstartKylling);

    //fjern classes
    document.querySelector("#kylling_container").classList="";
    document.querySelector("#kylling_sprite").classList="";

    document.querySelector("#ulv_container").offsetLeft;

    //kylling bevæger sig
    document.querySelector("#kylling_container").classList.add("move_kylling");
    document.querySelector("#kylling_sprite").classList.add("run_kylling");

    //event klick kylling
    document.querySelector("#kylling_container").addEventListener("mousedown", clickKylling);

}



// ulve funktioner ------------------------------

function clickUlv(){
    console.log("clickUlv")
    document.querySelector("#ulv_container").removeEventListener("mousedown", clickUlv);

    

    //tilføj classes
    document.querySelector("#ulv_container").classList.add("frys");
    document.querySelector("#ulv_sprite").classList.add("stor");
    

    
    console.log("loseLife")
    lives = lives -1;
    printLiv();
    if(lives<=0){
        gameOver();
    } 
    else{
         //genstart
        document.querySelector("#ulv_container").addEventListener("animationend", genstartUlv);
    }

}

function genstartUlv(){
    console.log("genstartUlv");

    //fjern classes
    document.querySelector("#ulv_container").classList="";
    document.querySelector("#ulv_sprite").classList="";

    document.querySelector("#ulv_container").offsetLeft;

    //ulv bevæger sig
    document.querySelector("#ulv_container").classList.add("move_ulv");
    document.querySelector("#ulv_sprite").classList.add("run");

    document.querySelector("#ulv_container").addEventListener("mousedown", clickUlv);


}



// force reflow mellem animation restart/class reset
// document.querySelector("selector").offsetLeft; i midten af .remove class og .add class




function printLiv() {
    document.querySelector("#currentLiv").textContent = lives;
}

function printPoint(){
    document.querySelector("#antal").textContent = point;
}


function gameOver(){
    console.log("Game Over")
    document.querySelector("#game_over").classList.remove("hide")
}

function victory(){
    console.log("victory")
    document.querySelector("#level_complete").classList.remove("hide")

}
//når siden er loadet viser jeg funktionen sidenVises
window.addEventListener("load",sidenVises);

windowResize();

window.addEventListener("resize",windowResize);

function windowResize(){
    console.log("resize")
    let widthScreen = document.querySelector("#screen").clientWidth;

    let myFontInProcent = 3;
    let myFont = (widthScreen / 100)*myFontInProcent;
    document.querySelector("#point").style.fontSize = myFont +"px";
    document.querySelector("#currentLiv").style.fontSize = myFont +"px";
}

let point=0;
let liv =3;


function sidenVises(){
    console.log("sidenVises")

    // skjul andre skærme
    document.querySelector("#game_over").classList.add("hide");
    document.querySelector("#level_complete").classList.add("hide");
    document.querySelector("#infopopup").classList.add("hide");

    //vis startskærm
    document.querySelector("#start").classList.remove("hide");

    //når der klikkes på start_knap, går vi til funktion startSpil
    document.querySelector("#start_knap").addEventListener("click", infoPopup)

}

function infoPopup(){
    console.log("infoPopup")

    //skjul titelskærm og ui og game elements
    document.querySelector("#start").classList.add("hide")
    document.querySelector("#game_ui").classList.add("hide")
    document.querySelector("#game_elements").classList.add("hide")

    //add blur til spilskærm
    document.querySelector("#game").classList.add("blur")

    //musik starter
    document.querySelector("#bg_music").volume=0.03;
    document.querySelector("#bg_music").play();

    //vis infopopup
    document.querySelector("#infopopup").classList.remove("hide");

    // klikker på ok knap
    document.querySelector("#info_ok").addEventListener("click", startSpil)
}


function startSpil(){
    console.log("startSpil")

    document.querySelector("#bg_music").volume=0.03;


    //fjern victory og gameover lyde
    document.querySelector("#victory_audio").pause();
    document.querySelector("#victory_audio").current =0 ;
    document.querySelector("#gameover_audio").pause();
    document.querySelector("#gameover_audio").current =0 ;

    //skjul infopopup og vis ui
    document.querySelector("#game_over").classList.add("hide");
    document.querySelector("#infopopup").classList.add("hide");
    document.querySelector("#game_ui").classList.remove("hide");
    document.querySelector("#level_complete").classList.add("hide");
    document.querySelector("#game_elements").classList.remove("hide");

    //fjern blur
    document.querySelector("#game").classList.remove("blur")

    //nulstil point og liv
    point=0;
    liv=3;

    //skriv point og liv ud
    printLiv()
    printPoint()

    //start timer animation
    document.querySelector("#time_sprite").classList.add("shrink")

    //random position kylling
    let rndNumk = generateRandomNumber(4);
    document.querySelector("#kylling_container").classList.add("pos"+rndNumk);

    let rndNumk2 = generateRandomNumber(4);
    document.querySelector("#kylling_container2").classList.add("pos"+rndNumk2);

    let rndNumk3 = generateRandomNumber(4);
    document.querySelector("#kylling_container3").classList.add("pos"+rndNumk3);

    //random position ulv
    let rndNumu = generateRandomNumber(4);
    document.querySelector("#ulv_container").classList.add("pos"+rndNumu);
    let rndNumuu = generateRandomNumber(4);
    document.querySelector("#ulv_container2").classList.add("pos"+rndNumuu);

    // start bevægelsesanimationer
    //ulv
    let rndNumau = generateRandomNumber(2);
    document.querySelector("#ulv_container").classList.add("move_ulv"+rndNumau);
    document.querySelector("#ulv_sprite").classList.add("run");

    let rndNumauu = generateRandomNumber(2);
    document.querySelector("#ulv_container2").classList.add("move_ulv"+rndNumauu);
    document.querySelector("#ulv_sprite2").classList.add("run");

    //kylling
    let rndNuma = generateRandomNumber(2);
    document.querySelector("#kylling_container").classList.add("move_kylling"+rndNuma);
    document.querySelector("#kylling_sprite").classList.add("run_kylling");
    let rndNumaa = generateRandomNumber(2);
    document.querySelector("#kylling_container2").classList.add("move_kylling"+rndNumaa);
    document.querySelector("#kylling_sprite2").classList.add("run_kylling");

    let rndNumaaa = generateRandomNumber(2);
    document.querySelector("#kylling_container3").classList.add("move_kylling"+rndNumaaa);
    document.querySelector("#kylling_sprite3").classList.add("run_kylling");

    //klik kylling
    document.querySelector("#kylling_container").addEventListener("mousedown", clickKylling);
    document.querySelector("#kylling_container2").addEventListener("mousedown", clickKylling);
    document.querySelector("#kylling_container3").addEventListener("mousedown", clickKylling);

    //kylling genstart
    document.querySelector("#kylling_container").addEventListener("animationend", kyllingGenstart);
    document.querySelector("#kylling_container2").addEventListener("animationend", kyllingGenstart);
    document.querySelector("#kylling_container3").addEventListener("animationend", kyllingGenstart);
   
    //ulv genstart
    document.querySelector("#ulv_container").addEventListener("animationend", ulvGenstart);
    document.querySelector("#ulv_container2").addEventListener("animationend", ulvGenstart);

    //klik ulv
    document.querySelector("#ulv_container").addEventListener("mousedown", clickUlv);
    document.querySelector("#ulv_container2").addEventListener("mousedown", clickUlv);

    document.querySelector("#time_sprite").addEventListener("animationend", gameOver)

    //lyd afspiller kylling
    document.querySelector("#kylling_container").addEventListener("mousedown", spilLyd);
    document.querySelector("#kylling_container2").addEventListener("mousedown", spilLyd);
    document.querySelector("#kylling_container3").addEventListener("mousedown", spilLyd);

    //lyd afspiller ulv
    document.querySelector("#ulv_container").addEventListener("mousedown", spilLydUlv);
    document.querySelector("#ulv_container2").addEventListener("mousedown", spilLydUlv);
   
}

function spilLyd(){
    console.log("spilLyd")

    document.querySelector("#point_lyd2").volume=0.5;
    document.querySelector("#point_lyd").volume=0.5;
    if (Math.random()<0.5){
        document.querySelector("#point_lyd").currentTime=0;
    document.querySelector("#point_lyd").play();
    } else{
        document.querySelector("#point_lyd2").currentTime=0;
        document.querySelector("#point_lyd2").play();
    }
}



function spilLydUlv(){
    document.querySelector("#mistliv_lyd").volume=0.3;
    document.querySelector("#mistliv_lyd").currentTime=0;
    document.querySelector("#mistliv_lyd").play();

    
}

function clickKylling(){
    console.log("clickKylling")
    this.removeEventListener("mousedown", clickKylling);



    //få et point
    point=point+1;
    //udskriv point
    printPoint()

    //afspil lyd

    //frys animation og flyv ud
    this.classList.add("frys");
    this.firstElementChild.classList.add("flyv_ud");

    if(point===10){
        level_complete();
    } else{
        //event genstart efter animation
    this.addEventListener("animationend", kyllingGenstart);}
}

function kyllingGenstart(){
    console.log("kyllingGenstart")
    this.removeEventListener("animationend", kyllingGenstart);

    //fjern classes
    this.classList="";
    this.firstElementChild.classList="";

    this.offsetLeft;

    //ny random position
    let rndNumu = generateRandomNumber(4)
    this.classList.add("pos"+rndNumu);

    //genstart bevægelsesanimationer
    let rndNuma = generateRandomNumber(2)
    this.classList.add("move_kylling"+rndNuma);
    this.firstElementChild.classList.add("run_kylling");

    //klik kylling
    this.addEventListener("mousedown", clickKylling);
    this.addEventListener("animationend", kyllingGenstart);

}

function clickUlv(){
    console.log("clickUlv")
    document.querySelector("#ulv_container").removeEventListener("mousedown", clickUlv);
    document.querySelector("#ulv_container2").removeEventListener("mousedown", clickUlv);

    //mist et liv
    liv=liv-1;

    //udskriv liv
    printLiv()

    //afspil lyd

    //frys container og tilføj stor class til sprite
    this.classList.add("frys")
    this.firstElementChild.classList.add("stor")

    if(liv<=0){
        gameOver();
    } 
    else{
         //genstart
        this.addEventListener("animationend", ulvGenstart);
    }

}

function ulvGenstart(){
    console.log("ulvGenstart")
    this.removeEventListener("animationend", ulvGenstart);

    //fjern classes
    this.classList="";
    this.firstElementChild.classList="";

    this.offsetLeft;

    //ny random position
    let rndNumu = generateRandomNumber(4)
    this.classList.add("pos"+rndNumu);

    //tilføj bevægelsesanimationer
    let rndNumau = generateRandomNumber(2)
    this.classList.add("move_ulv"+rndNumau);
    this.firstElementChild.classList.add("run");

    //klik på ulv
    this.addEventListener("mousedown", clickUlv);
    this.addEventListener("animationend", ulvGenstart);
}


//udksriv liv
function printLiv() {
    document.querySelector("#currentLiv").textContent = liv;
}

// udskriv point
function printPoint(){
    document.querySelector("#antal").textContent = point;
}

function generateRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }

function gameOver(){
console.log("Game Over")

//spil lyd
document.querySelector("#bg_music").volume=0.01;
gameoverLyd()

//vis gameover
document.querySelector("#game_over").classList.remove("hide")

//fjern alle animationer
//ulv
document.querySelector("#ulv_container").classList="";
document.querySelector("#ulv_sprite").classList="";

document.querySelector("#ulv_container2").classList="";
document.querySelector("#ulv_sprite2").classList="";

//kylling
document.querySelector("#kylling_container").classList="";
document.querySelector("#kylling_sprite").classList="";

document.querySelector("#kylling_container2").classList="";
document.querySelector("#kylling_sprite2").classList="";

//timer
document.querySelector("#time_sprite").classList="";

//klik på genstart
document.querySelector("#gameover_genstart").addEventListener("click",startSpil)
}

function level_complete(){
    console.log("levelcomplete")
    document.querySelector("#level_complete").classList.remove("hide")

//afspil lyd
document.querySelector("#bg_music").volume=0.01;
victoryLyd()



//fjern alle animationer

//timer
    document.querySelector("#time_sprite").classList="";
 //ulv
 document.querySelector("#ulv_container").classList="";
 document.querySelector("#ulv_sprite").classList="";

 document.querySelector("#ulv_container2").classList="";
document.querySelector("#ulv_sprite2").classList="";

 //kylling
 document.querySelector("#kylling_container").classList="";
 document.querySelector("#kylling_sprite").classList="";

 document.querySelector("#kylling_container2").classList="";
 document.querySelector("#kylling_sprite2").classList="";

//klik på genstart
document.querySelector("#levelcomplete_genstart").addEventListener("click",startSpil)


}
  
function victoryLyd(){
    document.querySelector("#victory_audio").play();

    document.querySelector("#victory_audio").addEventListener("ended",victoryLyd);
}

function gameoverLyd(){
    console.log("lyd")
    document.querySelector("#gameover_audio").play();

    document.querySelector("#gameover_audio").addEventListener("ended",gameoverLyd);
}
// let name1 = "Fritz";
// let name2 = "Gertrude";

// greeting(name1);
// greeting(name2);

// function greeting(na){
//     console.log(`Hej ${na}`)
// }



let tal1= 5;
let tal2= 3;
let result;
result = addNumbers(tal1, tal2);

 console.log("i script " + result);

 function addNumbers(num1, num2){
     let r = num1 + num2;
     console.log("i funktionen " + r);
     return r;
 }

 function udskriv(){
    document.querySelector("#udskriv").textContent ="Resultatet er " + result;
 }

 udskriv()

// game() 

// let gameIsOver = false;

// document.querySelector("#game").addEventListener("click", death)

// function death (){
//     gameIsOver = true;
//     game()
// }

// function game (){
//     if (gameIsOver === true){
//         console.log("GAME OVER");
//     } else{
//         console.log ("STILL RUNNING")
//     }
// }


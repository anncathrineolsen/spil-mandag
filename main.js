let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let arr = [ //multidimensionelt array
    [0,4,0,0,0,0,0,0,0,0,0],
    [0,1,3,1,0,1,1,1,1,1,0],
    [0,1,0,1,2,1,0,1,0,1,0],
    [0,1,1,1,0,0,0,3,1,1,0],
    [0,1,0,3,0,0,1,1,1,0,0],
    [0,1,1,1,0,0,1,0,1,0,0],
    [0,3,0,1,1,0,1,2,1,1,0],
    [0,1,0,0,1,0,3,0,0,1,0],
    [0,2,1,1,1,1,1,1,1,3,0],
    [0,1,0,1,1,0,0,0,0,1,0],
    [0,1,0,1,2,1,1,1,0,1,1],
    [0,1,1,1,0,1,0,3,1,1,2],
    [0,1,0,1,1,1,0,1,0,0,1],
    [0,1,2,1,0,1,0,1,1,0,1],
    [0,0,3,0,1,1,1,1,1,0,1],
    [0,1,1,1,0,0,0,0,1,1,1],
    [0,1,0,1,1,0,3,1,1,0,1],
    [0,2,0,0,1,0,1,0,0,0,1],
    [0,1,1,1,1,1,1,2,1,1,1],
    [0,0,0,1,0,0,1,0,0,1,0],
    [0,1,1,1,3,1,1,1,1,1,0],
    [0,1,0,0,1,0,1,0,1,0,0],
    [0,1,1,2,1,0,1,1,1,2,0],
    [0,0,0,0,0,0,0,0,0,0,0]
];

let wall = 0;
let way = 1;
let skat = 2;
let fire = 3;
let player = 4;
let playerPosition = {x:0, y:0}
let point = 0;
let pointResultat = document.getElementById("point");
let flag = false;

//laver en variable til vores billede
let play = new Image();
play.src = 'play.png';

let ild = new Image();
ild.src = 'ild.png';

let gold = new Image();
gold.src = 'gold.png';

function pointVis(){
    pointResultat.innerText = "Du har " + point + " point"
}

function drawMaxe(){

// looper igennem array
for(let x = 0; x < arr.length; x++){
    //loop igen inden i array for at få skrevet talene ud
    for(let y = 0; y < arr[x].length; y++){

        if(arr[x][y] == wall){
            ctx.fillStyle = "black";
            ctx.fillRect(x*50,y*50,50,50);
            
        }
        else if(arr[x][y] == way){
            ctx.fillStyle = "green";
            ctx.fillRect(x*50,y*50,50,50);
            
        }
        else if(arr[x][y] == skat){
            ctx.fillStyle = "green";
            ctx.fillRect(x*50,y*50,50,50);
            ctx.drawImage(gold,x*50,y*50,50,50);
        }
        else if(arr[x][y] == fire){

            ctx.fillStyle = "green";
            ctx.fillRect(x*50,y*50,50,50);
            ctx.drawImage(ild,x*50,y*50,50,50);
        }
        else if(arr[x][y] == player){
            playerPosition.x = x;
            playerPosition.y = y;
            //ctx.fillStyle = "pink";
            //ctx.fillRect(x*50,y*50,50,50);
            ctx.drawImage(play,x*50,y*50,50,50);

            
            
        }
    }
}
}

document.addEventListener("keyup", function(event){


    switch (event.keyCode) {
    case 37:
        if (arr[playerPosition.x -1][playerPosition.y] == way) {
            arr[playerPosition.x -1][playerPosition.y] = player
            arr[playerPosition.x][playerPosition.y] = way
            waySound();
           
        }
        else if (arr[playerPosition.x -1][playerPosition.y] == fire){
            deadSound();
            setInterval(function(){
                location.reload();  
             },1500)
            arr[playerPosition.x][playerPosition.y] = way
            arr[0][1] = player;
            drawMaxe();
        }
        else if (arr[playerPosition.x -1][playerPosition.y] == skat){
            skatSound();
            arr[playerPosition.x -1][playerPosition.y] = player
            arr[playerPosition.x][playerPosition.y] = way
            point++
            pointVis()
        }
        drawMaxe();

        
        break;
    case 38:
        if (arr[playerPosition.x][playerPosition.y -1] == way) {
            arr[playerPosition.x][playerPosition.y -1] = player
            arr[playerPosition.x][playerPosition.y] = way
            waySound();
            
        }
        else if (arr[playerPosition.x][playerPosition.y -1] == fire) {
            deadSound();
            setInterval(function(){
                location.reload();  
             },1500)
            arr[playerPosition.x][playerPosition.y] = way
            arr[0][1] = player;
            drawMaxe();
        }
        else if (arr[playerPosition.x][playerPosition.y -1] == skat) {
            skatSound();
            arr[playerPosition.x][playerPosition.y -1] = player
            arr[playerPosition.x][playerPosition.y] = way
            point++
            pointVis()
        }
        drawMaxe();
       
        break;
    case 39:
        if (arr[playerPosition.x +1][playerPosition.y] == way) {
            arr[playerPosition.x +1][playerPosition.y] = player
            arr[playerPosition.x][playerPosition.y] = way
            waySound();
            
        }
        else if (arr[playerPosition.x +1][playerPosition.y] == fire){
            deadSound();
            setInterval(function(){
                location.reload();  
             },1500)

            arr[playerPosition.x][playerPosition.y] = way
            arr[0][1] = player;
            drawMaxe();
        }
        else if (arr[playerPosition.x +1][playerPosition.y] == skat){
            skatSound();
            arr[playerPosition.x +1][playerPosition.y] = player
            arr[playerPosition.x][playerPosition.y] = way
            point++
            pointVis()
        }
        drawMaxe();
        
        break;
    case 40:
        if (arr[playerPosition.x][playerPosition.y +1] == way) {
            arr[playerPosition.x][playerPosition.y +1] = player
            arr[playerPosition.x][playerPosition.y] = way
            waySound();
            
        }
        else if (arr[playerPosition.x][playerPosition.y +1] == fire) {
            deadSound();
            setInterval(function(){
               location.reload();  
            },1500)
           
            arr[playerPosition.x][playerPosition.y] = way
            arr[0][1] = player;
            drawMaxe();
        }
        else if (arr[playerPosition.x][playerPosition.y +1] == skat) {
            skatSound();
            arr[playerPosition.x][playerPosition.y +1] = player
            arr[playerPosition.x][playerPosition.y] = way
            point++
            pointVis()
        }
        drawMaxe();
        
        break;

    default:
        break;
}
    /*
    left: 37 
    up: 38
    right: 39
    down: 40
    */
})

drawMaxe(); 

function waySound(){
    let gameSound = new Audio('retro-game.wav')
    gameSound.play();
}
function deadSound(){
    let gameDead = new Audio('Gameover.wav')
    gameDead.play();
}
function skatSound(){
    let gameSkat = new Audio('gold.wav')
    gameSkat.play();
}
function goalSound(){
    let gamegoal = new Audio('indijones.mp3')
    gamegoal.play();
}


let timer = 45;
let timerElementDiv = document.querySelector("#timer");
// tæller op
let startSpil = addEventListener.event
if (startSpil == 37) {
  alert ("spillet starter");}
function startSpilNu(){
setInterval(function(){
timer--;
timerElementDiv.innerText = "Tid tilbage: " + timer;

if(timer == 0){
    deadSound();
    window.addEventListener("load", drawMaxe);
    alert("GAME OVER! Du nåede ikke ind til skatten");
    location.reload();
    arr[playerPosition.x][playerPosition.y] = way
    arr[0][1] = player;
    timer = 45;
    drawMaxe();
}
if (point == 10) {
    skatSound();
    window.addEventListener("load", drawMaxe);
    alert("TILLYKKE! Du fandt alle guldbarene");
    point = 0
    location.reload();  
     arr[playerPosition.x][playerPosition.y] = way
     arr[0][1] = player;
    drawMaxe();

}   
}, 1000);
}
//
document.addEventListener("keydown", function(event){
    if(!flag){
          startTimer(event);
          
    }
});

  
function startTimer(event) {
    if(event.keyCode == 39){
        startSpilNu();
        flag = true;
    }
}

pointVis();
window.addEventListener("load", drawMaxe);

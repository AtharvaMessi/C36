var gameState = 0, database;
var playerCount,form,player,game;

var database;
function setup(){

  createCanvas(500,500);
  database = firebase.database();
  console.log(database);
  
  game = new Game();
  game.getState();
  console.log("hi")
  game.start();


}

function draw(){
  background("white");
  
  
}

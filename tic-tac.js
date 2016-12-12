var array =[0,0,0,0,0,0,0,0,0]
var player =0
var playerTurn = 1
var sequence=[]
var gameNumber = 0

function isGameOver(){
  var sum=0
  for(var i=0;i<array.length;i++){
    sum+=array[i]
  }
  if(sum===0){
    return false
  }
  if(array[0]===array[1] && array[1]===array[2]){
    if (array[0]!=0) {
      if(array[0]===1){
        player=1
      }
      else if(array[0]===2){
        player=2
      }
      return true
    }
  }
  else if (array[3]===array[4] && array[4]===array[5]){
    if (array[3]!=0){
      if(array[3]===1){
        player=1
      }
      else if(array[3]===2){
        player=2
      }
      return true
    }
  }
  else if (array[6]===array[7] && array[7]===array[8]){

    if (array[6]!=0){
      if(array[6]===1){
        player=1
      }
      else if(array[6]===2){
        player=2
      }
      return true
    }
  }
  else if(array[0]===array[3] && array[3]===array[6]){

    if (array[0]!=0){
      if(array[0]===1){
        player=1
      }
      else if(array[0]===2){
        player=2
      }
      return true
    }
  }
  else if(array[1]===array[4] && array[4]===array[7]){

    if (array[1]!=0){
      if(array[1]===1){
        player=1
      }
      else if(array[1]===2){
        player=2
      }
      return true
    }
  }
  else if(array[2]===array[5] && array[5]===array[8]){

    if (array[2]!=0){
      if(array[2]===1){
        player=1
      }
      else if(array[2]===2){
        player=2
      }
      return true
    }
  }
  else if(array[0]===array[4] && array[4]===array[8]){

    if (array[0]!=0){
      if(array[0]===1){
        player=1
      }
      else if(array[0]===2){
        player=2
      }
      return true
    }
  }
  else if(array[6]==array[4] && array[4]===array[2]){

    if (array[6]!=0){
      if(array[6]===1){
        player=1
      }
      else if(array[6]===2){
        player=2
      }
      return true
    }
  }
  else if(array.every(elem=> elem!=0)){
    return true
  }
  else {
    return false
  }
}

function whoWon() {
  if (isGameOver() === false) {
    return 0
  }
  else if (isGameOver() === true){
    if (player === 1) {
      return 1
    }
    else if (player === 2){
      return 2
    }
    else {
      return 3
    }
  }
}

function restart() {
  array = [0,0,0,0,0,0,0,0,0]
  playerTurn=1
  player=0
  sequence=[]
  gameNumber+=1
}

function playTurn(index) {

  if (array[index] === 0) {
      sequence.push(index)
      console.log("The player playing is "+ playerTurn + " and the tile clicked is " + index);
      console.log("The game is in progress");
    array[index]=playerTurn
    if(playerTurn===1){
      playerTurn=2
    }
    else{
      playerTurn=1
    }
    return true
  } else if (isGameOver()){
    return false
  }
  else{
    return false
  }
}
function printResults() {
  console.log(whoWon() + ": this player won the game");
  console.log("The sequence: " +sequence);
  console.log("Game number is " + gameNumber);
}

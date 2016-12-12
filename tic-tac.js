var array =[0,0,0,0,0,0,0,0,0]
var player =0
var playerTurn = 1

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
      console.log("test");
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
      console.log("test");
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
      console.log("test");
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
      console.log("test");
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
      console.log("test");
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
      console.log("test");
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
      console.log("test");
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
      console.log("test");
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
}

function playTurn(index) {
  if (array[index] === 0) {
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

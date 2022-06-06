/*-------------------------------- Constants --------------------------------*/
//5a. 8 possible winning combinations as an array of arrays
const winningCombos = [
  [0, 1, 2], 
  [0, 4, 8], 
  [0, 3, 6], 
  [3, 4, 5], 
  [6, 7, 8], 
  [1, 4, 7], 
  [2, 5, 8], 
  [2, 4, 6]
];

/*---------------------------- Variables (state) ----------------------------*/
//1. Define the required varibles used to track the state of the game

let board;

let turn;

let winner;
/*------------------------ Cached Element References ------------------------*/
//2. Store cached element references.

const squareEls = document.querySelectorAll("div.sq")

const messageEl = document.querySelector("#message")

const resetBtnEl = document.querySelector("#reset-button")
/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(square=> {
  square.addEventListener('click', handleClick)
}) 

resetBtnEl.addEventListener('click', init)
/*-------------------------------- Functions --------------------------------*/
//3. Upon loading, the game state should be initialized, and a funciton should be called to render this game state

init()

function init () {
  board = [null, null, null, null, null, null, null, null, null]
  
  turn = 1
  
  winner = null
  
  render()
}
//4a. Create a function called render

function render () {
  let sqIndex

  board.forEach(function(element, index){
    sqIndex = squareEls[index]
    if (element === 1) {
      sqIndex.textContent = "X"
      return
    } else if (element === -1) {
      sqIndex.textContent = "O"
      return
    } else {
      sqIndex.textContent = null
    }
  })
    if (winner === null) {
      messageEl.textContent = "It is Player " + playerName() + "'s turn!"
    } else if (winner === "T") {
      messageEl.textContent = `It's a tie!`
    } else {
      messageEl.textContent = "Player " + winnerName() + " has won!"
    }

}

function playerName () {
  let name

  if (turn === 1) {
    name = "X"
  } else if (turn === -1) {
    name = "O"
  } return name
}

function winnerName () {
  let winName

  if (winner === 1) {
    winName = "X"
  } else if (winner === -1) {
    winName = "O"
  } return winName
}

//6a. Create a function called handleClick, it will have an event parameter

function handleClick(evt) {
  let sqIdx = evt.target.id.substring(2) 
  if (board[(evt.target.id.substring(2))] !== null) {
    return
  } else if (winner !== null) {
    return
  } else {
    board[sqIdx] = turn
  }
  turn = turn * -1
  winner = getWinner()
  render()
}

//7. Build the getWinner function

function getWinner () {
  for (let i=0; i < winningCombos.length; i++) {
    if (board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] === 3) {
      return 1
    } else  if (board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] === -3) {
      return -1
    }
  }
  if (!board.includes(null)){
    return "T"
  } 
return null
}
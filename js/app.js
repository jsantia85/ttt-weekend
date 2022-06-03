/*-------------------------------- Constants --------------------------------*/
//5. Define required constants
//5a. define the 8 possible winning combinations as an array of arrays
const winningCombos = [
  [0, 1, 2], [0, 4, 8], [0, 3, 6], [3, 4, 5], [6, 7, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6]
];

/*---------------------------- Variables (state) ----------------------------*/
//1. Define the required varibles used to track the state of the game
//1a. varible named board to represent the state of the squares on the board.
let board;
//1b. varible to track whose turn it is.
let turn;
//1c. varible to represent if anyone has won yet, or if a tie has occured.
let winner;
/*------------------------ Cached Element References ------------------------*/
//2. Store cached element references.
//2a. Constant used to store the nine elements representing the squares on the page.
const squareEls = document.querySelectorAll("div.sq")
//2b. store the element that displays the game's status on the page.
const messageEl = document.querySelector("#message")
//8b. Reset button constant
const resetBtnEl = document.querySelector("#reset-button")
/*----------------------------- Event Listeners -----------------------------*/
//6b. Add event listener to game board. On the 'click' event, it should call the candle click function. First, create gameboard and set it to the HTML element that has all the squares on the board.
squareEls.forEach(square=> {
  square.addEventListener('click', handleClick)
}) 
/*-------------------------------- Functions --------------------------------*/
//3. Upon loading, the game state should be initialized, and a funciton should be called to render this game state
//3a. Create init funciton
//3b. Call the init funciton when app loads, sanity check works.
init()

function init () {
  //console.log('sanity check')
  //3c. Set board varible to an arrary containing nine nulls to represent empty squares
  board = [null, null, null, null, null, null, null, null, null]
  // console.log(board)
  //3d. Set the turn to 1 which sill represent player X
  turn = 1
  //console.log(turn)
  //3e. Set winner to null
  winner = null
  //console.log(winner)
  //3f. call render function at end of init function.
  render()
  // console.log(render)
}
//4a. Create a function called render

function render () {
  //4b.(1) loop over board and for each element: use the current index of the iteration to access the coressponding square in the squareEls array. 
  let sqIndex

  board.forEach(function(element, index){
    //4b.(2) Style that square however you wish, dependent on the value contained in the current cell being iterated over (-1, 1, or null)
    // console.log(element)
    // console.log(index)
    //set up conditional that will determine what style to put
    sqIndex = squareEls[index]
    if (element === 1) {
      sqIndex.textContent = "X"
      return
    } else if (element === -1) {
      sqIndex.textContent = "O"
      return
    } else {
      null
    }
  })
  //4c. Render a message based on the current game state
    if (winner === null) {
      messageEl.textContent = `It is player ${turn}'s turn!`
    } else if (winner === "T") {
      messageEl.textContent = `It's a tie!`
    } else {
      messageEl.textContent = `Player ${winner} has won!`
    }

}

//6. Handle a player clicking a square with a handleClick function
//6a. Create a function called handleClick, it will have an event parameter

function handleClick(evt) {
  // console.log('called handleClick')
  // console.log(evt)
  // console.log(evt.target)
  // console.log(evt.target.id)
  // console.log(evt.target.id.substring(2))
  //6c., 6d., 6e.,6g., 6h.
  let sqIdx = evt.target.id.substring(2) 
  if (board[(evt.target.id.substring(2))] !== null) {
    return
  } else if (winner !== null) {
    return
  } else {
    board[sqIdx] = turn
  }
  turn = turn * -1
  getWinner()
  render()
}

//7. Build the getWinner function

function getWinner () {
  //7b1., 7c., 7d.
  console.log('board array:', board)
  winningCombos.forEach(combo => {
    if (Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]]) === 3) {
      console.log('hello')
      winner = turn
    } else if (!board.includes(null)) {
    console.log('yer')
    winner = "T"
    } else {
      console.log('taco')
      return null
    }
  })
}

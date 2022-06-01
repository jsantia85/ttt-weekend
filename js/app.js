/*-------------------------------- Constants --------------------------------*/



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
const squareEls = document.querySelectorAll("div.sqEl0, div.sqEl1, div.sqEl2, div.sqEl3, div.sqEl4, div.sqEl5, div.sqEl6, div.sqEl7, div.sqEl8")
//2b. store the element that displays the game's status on the page.
const messageEl = document.querySelector("#message")
/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
//3. Upon loading, the game state should be initialized, and a funciton should be called to render this game state
//3a. Create init funciton
//3b. Call the init funciton when app loads, sanity check works.
init()

function init () {
  //console.log('sanity check')
  //3c. Set board varible to an arrary containing nine nulls to represent empty squares
  board = [null, null, null, null, null, null, null, null, null]
  //console.log(board)
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



}
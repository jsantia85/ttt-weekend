/*-------------------------------- Constants --------------------------------*/
//5. Define required constants
//5a. define the 8 possible winning combinations as an array of arrays
const winningCombos = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
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
/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
//3. Upon loading, the game state should be initialized, and a funciton should be called to render this game state
//3a. Create init funciton
//3b. Call the init funciton when app loads, sanity check works.
init()

function init () {
  //console.log('sanity check')
  //3c. Set board varible to an arrary containing nine nulls to represent empty squares
  board = [1, -1, null, null, null, null, null, null, null]
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
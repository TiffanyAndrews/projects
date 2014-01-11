
/*function init() { 
	alert("Hi, Adam!");
	var cells = document.getElementsByClassName("square X O");
	for (var i in cells) {
		cells [i].onclick = function() {
			var row = this.id[3];
			var cell = this.id[4];
			alert ("Working!" + row + " " + cell);
			this.innerHTML = "X";
			}
		}
}
*/

var playerTurn = ("O");
function init() { 
	var cells = document.getElementsByClassName("square X O");
	for (var i in cells) {
		cells [i].onclick = takeTurn;
		}
	}
	function takeTurn () {
		cell = this.id[4];
		playerTurn = (playerTurn == "X"?"O":"X");
		this.innerHTML = playerTurn;
	}
	
// initially will be X
var X = true;
// Array of id names of divs/cells
var nums = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
// Array of spaces that will change/square
var square = [[null,null,null],[null,null,null],[null,null,null]];
// for loop, loops through each cell (9 of them) by name

for(var i in nums) 
  // when you click, finds cell by name and makes it clickable and calls the clickstuff function
document.getElementById(nums[i]).onclick = clickstuff();

// defines function
function clickstuff(){
  // makes sure there is nothing in cell
  // this = "THE DIV" -- whatever is assigned on line 11
  // if you had set line 11 = image, "this" would refer to "THE IMAGE"
  alert("u here?")
  if (this.innerHTML== ""){ 
  if (X)
  {
  this.innerHTML="X";
  // checks each variable in nums to see which one was clicked
  for(var i in nums) {
  if (this.id == nums[i]){
      // figures out which row and column [][], referencing the var square and saves as x
      square [Math.floor(i / 3)][i % 3] = "X";
  }
}
// after putting image to olive, switches to mushroom
X = false; 
}
    // if not olive, then mushroom
    else {
    this.innerHTML='O';

    for(var i in nums) {

    if (this.id == nums[i]) {
    square [Math.floor(i / 3)][i % 3] = "O";
    }
    }
  // after mushroom, next one will be olive
  X = true;
}
}
else {
alert("nope");
}
// checkWin function is called
checkWin();
}

function checkWin(){
  if (square [0][0]=="x" && square [1][0]=="x" && square [2][0]=="x"){
    alert("X wins!")}
  else if (square [0][1]=="x" && square [1][1]=="x" && square [2][1]=="x"){
    alert("X wins!")}  
  else if (square [0][2]=="x" && square [1][2]=="x" && square [2][2]=="x"){
    alert("X wins!")}
  else if (square [0][0]=="o" && square [1][0]=="o" && square [2][0]=="o"){
    alert("O wins!")}
  else if (square [0][1]=="o" && square [1][1]=="o" && square [2][1]=="o"){
    alert("O wins!")}
  else if (square [0][2]=="o" && square [1][2]=="o" && square [2][2]=="o"){
    alert("O wins!")}
  else if (square [0][0]=="x" && square [0][1]=="x" && square [0][2]=="x"){
    alert("X wins!")}
  else if (square [1][0]=="x" && square [1][1]=="x" && square [1][2]=="x"){
    alert("X wins!")}
  else if (square [2][0]=="x" && square [2][1]=="x" && square [2][2]=="x"){
    alert("X wins!")}
  else if (square [0][0]=="o" && square [0][1]=="o" && square [0][2]=="o"){
    alert("O wins!")}
  else if (square [1][0]=="o" && square [1][1]=="o" && square [1][2]=="o"){
    alert("O wins!")}
  else if (square [2][0]=="o" && square [2][1]=="o" && square [2][2]=="o"){
    alert("O wins!")}
  else if (square [0][0]=="o" && square [1][1]=="o" && square [2][2]=="o"){
    alert("O wins!")}
  else if (square [2][0]=="o" && square [1][1]=="o" && square [0][2]=="o"){
    alert("O wins!")}
}
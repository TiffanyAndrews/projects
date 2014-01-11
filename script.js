
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
	
/*
var X = true
// Array of  id names of div/cells
var nums = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
// Array of spaces that will change.
var moves = [[null,null,null],[null,null,null],[null,null,null]]
//for loop loops through cell (9 of them) by name
for (var i in nums) 
// when you click, finds cell by name and makes it clickable and calls
	document.getElementsById(nums[i]).onclick = clickStuff;


function clickStuff(){
//defines function, 
	if (this.innerHTML == " "){
//makes sure there is nothing in cell
//this =" THE DIV" --what is assigned on line 38
// if you had set line 38 = image, "this" would refer to "THE IMAGE"
		if (X)
		{
			this.innerHTML = "X";
			for(var i in nums)
			{
				if (this.id == nums[i])
					moves [Math.floor(i/3)][i % 3] = "x"
// after putting image to X, switches to O	.Math.floor(i/3)] lets you what row.[i % 3]tells you what column.			
				X = true
// after X, next O
			}
		}
		else {
			this.innerHTML = "O";
			for(var i in nums)
			{
				if(this.id == nums[i])
// for all the nine space it is checking to see which one has been click.
					moves[MAth.floor(i/3)][i % 3] = "o"
				O =false;
			}
		}
	}

}
else {
	alert("nope");
}
checkWin();
}

function checkWin(){
  if (moves [0][0]=="x" && moves [1][0]=="x" && moves [2][0]=="x")
    alert("X wins!")
  if (moves [0][1]=="x" && moves [1][1]=="x" && moves [2][1]=="x")
    alert("X wins!")
  if (moves [0][2]=="x" && moves [1][2]=="x" && moves [2][2]=="x")
    alert("X wins!")

  if (moves [0][0]=="o" && moves [1][0]=="o" && moves [2][0]=="o")
    alert("O wins!")
  if (moves [0][1]=="o" && moves [1][1]=="o" && moves [2][1]=="o")
    alert("O wins!")
  if (moves [0][2]=="o" && moves [1][2]=="o" && moves [2][2]=="o")
    alert("O wins!")

  if (moves [0][0]=="x" && moves [0][1]=="x" && moves [0][2]=="x")
    alert("X wins!")
  if (moves [1][0]=="x" && moves [1][1]=="x" && moves [1][2]=="x")
    alert("X wins!")
  if (moves [2][0]=="x" && moves [2][1]=="x" && moves [2][2]=="x")
    alert("X wins!")

  if (moves [0][0]=="o" && moves [0][1]=="o" && moves [0][2]=="o")
    alert("O wins!")
  if (moves [1][0]=="o" && moves [1][1]=="o" && moves [1][2]=="o")
    alert("O wins!")
  if (moves [2][0]=="o" && moves [2][1]=="o" && moves [2][2]=="o")
    alert("O wins!")

  if (moves [0][0]=="o" && moves [1][1]=="o" && moves [2][2]=="o")
    alert("O wins!")
  if (moves [2][0]=="o" && moves [1][1]=="o" && moves [0][2]=="o")
    alert("O wins!")

 
}
}
*/
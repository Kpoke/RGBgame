var numSquares = 3;
var colors = arrRandom(numSquares);
var displayedColour = document.querySelector("#display");
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var mark = document.querySelector("#mark");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var veryhard = document.querySelector("#veryhard");

difficulty(numSquares);
addMarginEasyHard();
var pickedColour = pickdisplay();


reset.addEventListener("click",function(){
	colors = arrRandom(numSquares);
	pickedColour = pickdisplay();
	h1.style.backgroundColor = "steelblue";
	changeSquares(numSquares);
	displayedColour.textContent = pickedColour;
	reset.textContent = "New Colours";
	mark.textContent = "";
})

easy.addEventListener("click",function(){
	numSquares = 3;	
	difficulty(numSquares);
	addMarginEasyHard();
	easy.classList.add("selected");
	hard.classList.remove("selected");
	veryhard.classList.remove("selected");
})

hard.addEventListener("click",function(){
	numSquares = 6;
	difficulty(numSquares);
	addMarginEasyHard();
	hard.classList.add("selected");
	easy.classList.remove("selected");
	veryhard.classList.remove("selected");
})

veryhard.addEventListener("click",function(){
	numSquares = 20;	
	difficulty(numSquares);
	removeMarginEasyHard();
	veryhard.classList.add("selected");
	easy.classList.remove("selected");
	hard.classList.remove("selected");
})



displayedColour.textContent = pickedColour;
changeSquares(6);
colorsEqual();



function randomColour(){
	return "rgb(" + random()+ ", "+ random()+ ", "+ random() + ")";
}
function random(){
	return Math.floor(Math.random() * 256);
}
function pickdisplay(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function arrRandom(number){
	var ranColors = [];
	for (var i = 0; i < number; i++) {
		ranColors[i] = randomColour();
	}
	return ranColors;
}
function changeSquares(num){
	for (var i = 0; i < num; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
}
function colorsEqual(){
	for (var i = 0; i < colors.length; i++) {
		squares[i].addEventListener("click",function(){
			var clickedcolour = this.style.backgroundColor;
			if(clickedcolour === pickedColour){
				for (var i = 0; i < colors.length; i++) {
					squares[i].style.backgroundColor = pickedColour;
				}
				h1.style.backgroundColor = pickedColour;
				mark.textContent = "Correct";
				reset.textContent = "Play Again?";
			}else{
				this.style.backgroundColor = "black";
				mark.textContent = "Try Again";
			}
		});

	}
}

function setBlack(num){
	for (var i = num; i < squares.length; i++) {
	 	squares[i].style.backgroundColor = "black";
	 }	
}

function addMarginEasyHard(){
	for (var i = 0; i < squares.length; i++) {
	 	squares[i].classList.add("squareEasyHard");
	 }	
}

function removeMarginEasyHard(){
	for (var i = 0; i < squares.length; i++) {
	 	squares[i].classList.remove("squareEasyHard");
	 }	
}

function difficulty(no){
	h1.style.backgroundColor = "steelblue";
	colors = arrRandom(no);
	changeSquares(no);
	pickedColour = pickdisplay();
	colorsEqual();
	displayedColour.textContent = pickedColour;
	setBlack(no)
}

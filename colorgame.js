var numSquare = 6;
var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");

var picked = colors[rand()];
var colorDis = document.getElementById("colorDisplay");
colorDis.textContent = picked;

var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

for(var i = 0; i < squares.length; ++i){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
    	var curr = this.style.backgroundColor;
    	
    	if(curr === picked){
              messageDisplay.textContent = "Correct!";
              //console.log(curr);
              resetButton.textContent = "play again?"
              changeColors(curr);
              h1.style.backgroundColor = picked;
    	}else{
    		this.style.backgroundColor = "#232323";
              messageDisplay.textContent = "Try again!";
    	}
	
});
}

function changeColors(color){
    for(var i = 0; i < colors.length; ++i){
        squares[i].style.backgroundColor = color;
    }

}


function rand(){
	return Math.floor(colors.length * Math.random());
}

function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; ++i){
        arr.push(randomColor());
    }
    return arr;
}


function randomColor(){
    //pick a red,green,blue from 0 to 255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function(){
    this.textContent = "NEW colors";
	colors = generateRandomColors(numSquare);
	picked = colors[rand()];
	colorDis.textContent = picked;
	h1.style.backgroundColor = "steelblue";

	    for(var i = 0; i < squares.length; ++i){
        squares[i].style.backgroundColor = colors[i];
    }
});





var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function(){
	numSquare = 3;
   easy.classList.add("selected");
   hard.classList.remove("selected");
   colors = generateRandomColors(3);
   picked = colors[rand()];
   colorDis.textContent = picked;
   	 for(var i = 0; i < 3; ++i){
        squares[i].style.backgroundColor = colors[i];
    }

     for(var i = 3; i < 6; ++i){
        squares[i].style.display = "none";
    }

});

hard.addEventListener("click", function(){
	numSquare = 6;
   hard.classList.add("selected");
   easy.classList.remove("selected");
    colors = generateRandomColors(numSquare);
   picked = colors[rand()];
   colorDis.textContent = picked;
     for(var i = 3; i < 6; ++i){
        squares[i].style.display = "block";
    }
   	 for(var i = 0; i < 6; ++i){
        squares[i].style.backgroundColor = colors[i];
    }

});



var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]
var numSquares=6;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var pickedcolor = pickColor();
colorDisplay.textContent = pickedcolor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");


easybtn.addEventListener("click", function () {
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    numSquares=3;
    colors = generateRandomColor(numSquares);
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor;
    for (i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardbtn.addEventListener("click", function () {
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    numSquares=6;
    colors = generateRandomColor(numSquares);
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor;
    for (i = 0; i < squares.length; i++) {
       
            squares[i].style.background = colors[i];
            squares[i].style.background = "block";
        
    }
});

resetbutton.addEventListener("click", function () {

    //generate all new colors
    colors = generateRandomColor(numSquares);
    //pick a new random color from array
    var pickedcolor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedcolor;
    this.textContent="New colors"
    messageDisplay.textContent="";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
})

for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.background = colors[i];
    //add click listeners to square
    squares[i].addEventListener("click", function () {
        //grab color of clicked square
        var clickedcolor = this.style.background;
        //compare color to pickedcolor
        console.log(clickedcolor, pickedcolor);
        if (clickedcolor === pickedcolor) {
            messageDisplay.textContent = "correct!";
            changeColors(clickedcolor);
            h1.style.background = clickedcolor;
        }
        else {
            this.style.background = "#232323";
            messageDisplay.textContent = "try again";
        }
    });
}
function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num) {
    var arr = []
    for (i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
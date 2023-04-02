

const squares= document.querySelectorAll(".sq");
const colorDisplay = document.getElementById("colorDisplay");
const message = document.getElementById("message");
const title = document.querySelector("h1");
const resetButton = document.getElementById("resetButton");
const modeButton = document.querySelectorAll(".mode");
// const easyButton = document.getElementById("easyButton");
// const hardButton = document.getElementById("hardButton");


const generateRandomColor = ()=>{
    const r= Math.floor(Math.random()*256);
    const g= Math.floor(Math.random()*256);
    const b= Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
} 

const generateRandomColors =(num) =>{
    const output = [];
    for(let i=0;i<num;i++)
    {
        output[i] = generateRandomColor();
    }
    return output;
}


const pickColor = ()=>{
    const random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

const changeColor = (color)=>{
    squares.forEach((sq) => {
        sq.style.backgroundColor=color;
    });
}

const reset = ()=>{
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    title.style.backgroundColor = "steelblue";
    message.textContent=" ";
    resetButton.textContent = "change color";

    for(let i =0; i<squares.length;i++)
    {
        if(colors[i])
        {
            console.log("y");
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.backgroundColor = "black"
        }
    }
}


//main 
let numSquares = squares.length;
var colors = generateRandomColors(numSquares);
let pickedColor = pickColor();
colorDisplay.textContent=pickedColor;

resetButton.addEventListener("click",reset);

for(let i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener('click',function(){
        const clickedcolor = this.style.backgroundColor;
        console.log(clickedcolor);
        if(clickedcolor === pickedColor)
        {
            message.textContent = "YOU WIN";
            changeColor(pickedColor);
            title.style.backgroundColor=pickedColor;
            resetButton.textContent="TRY again?"
        }
        else
        {
            this.style.backgroundColor="black";
            message.textContent = "WRONG!";
        }
    })
}

modeButton.forEach((button)=>{
    button.addEventListener("click",function(){
        modeButton[0].classList.remove("selected");
        modeButton[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent === "Easy")
        numSquares = 3;
        else
        numSquares = 6;
        reset();
    });
});



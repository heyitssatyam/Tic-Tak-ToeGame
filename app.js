let boxes= document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turnO = true; //playerX playerY
let count = 0;


const play = ()=>{
    if(turnO === true){
        box.append("O");
        turnO=false;
    }else{
        box.append("X");
        turnO=true;
    }
}
const winPatterns= [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    ];
boxes.forEach((box) =>{
    const play = ()=>{
        if(turnO === true){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;
    }
    box.addEventListener("click", play)
    
})


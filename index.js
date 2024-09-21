let boxes= document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container")
let msg= document.querySelector("#msg");


let turnO = true;
let count=0;
const resetGame = () =>{
    turnO = true;
    count=0;
    enableBtns();
    msgContainer.classList.add('hide');
}


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame )
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
            ;
            turnO=true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        if(count ===9 && !isWinner){
            gameDraw();
        }
    }
    box.addEventListener("click", play)
})

const gameDraw= () =>{
    disableBtns();
    msg.innerText=`Draw`;
    msgContainer.classList.remove("hide");
}
const disableBtns = () => {
    for(let box of boxes){
        box.disabled = true;
}
}

const enableBtns = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
}
}
const showWinner = (winner)=>{
    disableBtns();
    msg.innerHTML=`The Winner is ${winner}`;
    msgContainer.classList.remove('hide'); 
}
const checkWinner = () =>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let pos1Val= boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText;
        let pos3Val= boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val != ""){
        if (pos1Val === pos2Val && pos2Val=== pos3Val){
            console.log(`${pos1Val} is the winner`);
            
            showWinner(pos1Val);
            }
        }
    }
} 

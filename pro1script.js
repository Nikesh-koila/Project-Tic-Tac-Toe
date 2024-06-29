let boxes=document.querySelectorAll(".box");
let winner_Popup=document.querySelector(".winner-popup");
let Winner=document.querySelector("#Winner");
let new_btn=document.querySelector(".new-btn");
let reset_btn=document.querySelector(".reset-btn");
let clickMusic= new Audio("click sound.wav");
let winMusic= new Audio("winsound.wav");
let turn0=true;
let clicks=0;
let winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
     
      if(turn0){
        box.innerText="O";
        box.style.color="red";
        turn0=false;
      }
      else{
        box.innerText="X";
        box.style.color="blue";
        turn0=true;
      }
      box.disabled=true;
      checkwinner();
      clicks++;
      checkClicks();
      clickMusic.play();
    })
})
const checkwinner=()=>{
 for(pattern of winpatterns){
   let pos1Val=boxes[pattern[0]].innerText;
   let pos2Val=boxes[pattern[1]].innerText;
   let pos3Val=boxes[pattern[2]].innerText;
   if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
     if(pos1Val===pos2Val&&pos2Val===pos3Val){
        showwinner(pos1Val);
      }
    }  
  }
};
const checkClicks=()=>{
  if(clicks==9){
    winner_Popup.classList.remove("hide");
    Winner.innerText="Match is Drawn!!";
    reset_btn.disabled=true;
    clickMusic.muted=true;
    winMusic.play();
  }
};
const showwinner=(winner)=>{
  Winner.innerText=`Congratulations, Winner is ${winner} `;
  winner_Popup.classList.remove("hide");
  disableboxes();
  reset_btn.disabled=true;
  clickMusic.muted=true;
  winMusic.play();
};
const disableboxes=()=>{
  for(box of boxes){
    box.disabled=true;
  }
};
const enableboxes=()=>{
  for(box of boxes){
    box.disabled=false;
  }
};
const newgame=()=>{
  for(box of boxes){
    box.innerText="";
    turn0=true;
    enableboxes();
    winner_Popup.classList.add("hide");
    reset_btn.disabled=false;
    clickMusic.muted=false;
    clicks=0;
  }
};
new_btn.addEventListener("click",newgame);
reset_btn.addEventListener("click",newgame);
let user=0;
let comp=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscore=document.querySelector("#user-score");
const compscore=document.querySelector("#comp-score");
const drawGame=()=>{
    
    msg.innerText="GAME WAS DRAW PLAY AGAIN";
    msg.style.backgroundColor = "#081b31";
     msg.style.color="white";
};

const showwinner=(userwin,userchoice,compchoice)=>{
 if(userwin)
 {
    user++;
    userscore.innerText=user;
   
    msg.innerText=` YOU WIN.!!  YOUR ${userchoice} BEATS ${compchoice}`;
    msg.style.backgroundColor="orange";
 }
 else {
    comp++;
    compscore.innerText=comp;
   
   msg.innerText= msg.innerText=` YOU LOOSE..! ${compchoice} BEATS  YOUR  ${userchoice}`;;
   msg.style.backgroundColor="red";
 }
}

const gencompchoice =()=>{
//rock,paper,scissors
let options=["ROCK","PAPER","SCISSORS"];
const randidx=Math.floor(Math.random()*3);
return options[randidx];
}

const playgame=(userchoice)=>{
    console.log("user choice =",userchoice);
//generate computer choice
const compchoice =gencompchoice();
console.log("comp choice =",compchoice);
if(userchoice===compchoice)
{
    //Draw
    drawGame();
}
else{

     let userwin= true;
     if(userchoice==="ROCK"){
        //comp choice paper or scissors
        userwin=compchoice==="PAPER" ?false : true;
     } else if(userchoice==="PAPER"){
    //rock scissors
       userwin= compchoice==="SCISSORS" ? false : true;
         
     }
     else{
        //comp have papper or rock
        userwin=compchoice==="ROCK" ?false : true ;
     }
     showwinner(userwin, userchoice,compchoice);
}
};


choices.forEach((choice)=>{
    
    choice.addEventListener(("click"),()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})
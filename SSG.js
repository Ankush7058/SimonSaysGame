let gameSeq =[];
let userSeq =[];
let btns=["yellow","red","purple","blue"];

let started=false;
let level=0;
let  h2=document.querySelector("h2");

document.addEventListener("keypress", function (){
    if(started==false){
    console.log("game started");
    started=true;
    
    levelup();
    }

});


function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){ btn.classList.remove('flash');},250 );
}



function userFlash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){ btn.classList.remove('userflash');},250 );
}

function levelup() {
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    

    let randIdx =Math.floor(Math.random() * 3);
    let randColr=btns[randIdx];
    let randBtn=document.querySelector(`.${randColr}`);
    //console.log(randBtn);
    //console.log(randColr);
    //console.log(randIdx);
    gameSeq.push(randColr);
    console.log(gameSeq);

    gameFlash(randBtn);
    

}



function checkAns(idx){
    //console.log("curr value :" , level);


    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout( levelup, 1000);           

        }
        //console.log("same value");

    }else{
        h2.innerHTML=`Game over!  Your Score was <b> ${level} </b> <br> Press any key to Restart `;

        document.querySelector("body").style.backgroundColor="red";

        setTimeout(function(){
            
        document.querySelector("body").style.backgroundColor="white";

        },250);

        reset();
    }
    




}
function btnPress() {
    let btn=this;
    userFlash(btn);
    
    userColor =btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length -1);
}
let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);

}

function reset(){
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;
}
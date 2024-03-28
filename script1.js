let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genCompChoice=() =>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=() =>
{
    console.log("game was draw");
    msg.innerText="game was Draw!";
}
const showWinner=(userWin)=>
{
    if(userWin){
        console.log("you win");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText="You Win!";
        
    }
    else{
        console.log("you loose");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText="You Loose!";
    }
}

const playgames=(userChoice)=>{
    console.log("user choice =",userChoice);  //Generate computer choice
    const compChoice=genCompChoice();
    console.log(" comp choice =", compChoice);

    if(userChoice==compChoice)
    {
        drawGame();

    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            if(compChoice=="paper")
            {
                userWin=false;
            }
            else{
                userWin=true;
            }
        }
        else 
        {
            if(userChoice=="paper")
            {
             if(compChoice=="rock")
                {
                userWin=true;
                }
            else{
                userWin=false;
                }
            }
            else{
                if(userChoice=="scissors")
                {
                    if(compChoice=="rock")
                    {
                        userWin=false;
                    }
                    else{
                        userWin=true;
                    }
                }
            }
        }
        showWinner(userWin);
        
        }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{

        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playgames(userChoice);
    });

});

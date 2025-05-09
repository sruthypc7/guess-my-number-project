

let truevalue=Math.trunc(Math.random()*20)+1
let score=20;
let highscore=0;
let displaymessage=function(message)
{
    document.querySelector('.message').textContent=message;
}


document.querySelector('.score').textContent=score;
document.querySelector('.highscore').textContent=highscore;

document.querySelector('.check').addEventListener('click',function()
{
    let guess=Number(document.querySelector('.guess').value);
    if(!guess)
    {
        //document.querySelector('.message').innerHTML="❌ No Number";
        displaymessage('❌ No Number');
    }
    else if(guess==truevalue)
    {
       // document.querySelector('.message').innerHTML="🎊 Correct number";
        displaymessage('🎊 Correct number');
        document.querySelector('.number').innerHTML=truevalue
        document.querySelector('body').style.backgroundColor="#60b347";
        document.querySelector('.number').style.width="20rem";
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;

        }
    }
    else if(guess!==truevalue){
        if(score>1)
            {
              displaymessage(guess>truevalue?"📈 Too High": "📉 Too Low");
              //document.querySelector('.message').textContent=guess>truevalue?"📈 Too High": "📉 Too Low";
              score--; 
              document.querySelector('.score').innerHTML=score;
            }
            else{
                displaymessage("You Lose the Game");
                //document.querySelector('message').innerHTML="You Lose the Game";
                document.querySelector('.score').textContent=0;
    
            }

    }
    /*else if(guess>truevalue)
    {
       
    }
    else if(guess<truevalue)
    {
        if(score>1)
        {
           document.querySelector('.message').textContent="";
           score--; 
           document.querySelector('.score').innerHTML=score;

        }
        else{
            document.querySelector('.message').innerHTML="You Lost the Game";
            document.querySelector('.score').textContent=0;

        }
        
    }*/
})
document.querySelector('.again').addEventListener('click',function()
{
    score=20;
    displaymessage("Start guessing....0");
    //document.querySelector('.message').textContent="Start guessing";
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor="black";
    document.querySelector('.number').innerHTML="?";
    document.querySelector('.guess').value=''
   

})

'use strict';
var inputGuess = document.querySelector('.guess');
var checkBtn = document.querySelector('.check');
var score = document.querySelector('.score');
var hightScore = document.querySelector('.highscore'); 
var againBtn = document.querySelector('.again');
var number = document.querySelector('.number');
var message = document.querySelector('.message');
var randomNumber = 0; 


const displayMessage = function(msg ){
    message.innerText=msg;

}
function initGame(){ 
    score.innerText = 20; 
    inputGuess.value = 0;
    randomNumber=Math.floor(Math.random() * 21);
    document.body.style.backgroundColor="#222";
    number.innerText ="?";
    message.innerText="Start guessing...";
    
    
}

initGame();

console.log(randomNumber);

againBtn.addEventListener('click',function(){
    initGame();
})

function checkScore(){
    if(score.innerText <= 0 )
    {
        document.body.style.backgroundColor="red";
        displayMessage("💥 You lost the game!");
    }else{
        inputGuess.value = 0; 
        score.innerText--;
    }
}

checkBtn.addEventListener('click', function()
{    
    console.log( inputGuess.value == randomNumber );
    if( inputGuess.value == randomNumber){
        document.body.style.backgroundColor="#60b347";
        number.style.width = '30rem';
        number.innerText = randomNumber;
        displayMessage("🎉 Correct Number!");
        if( score.innerText > hightScore.innerText)
        {
            hightScore.innerText = score.innerText;
        }

    }else {
        inputGuess.value < randomNumber ?  displayMessage("📉 Too low!") : displayMessage("📈 Too high!");
        checkScore();
    }
   
    
    
    
   
        

})


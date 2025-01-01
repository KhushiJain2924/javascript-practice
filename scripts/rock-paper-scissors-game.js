let resultElement = document.querySelector('.js-result');
let reason = document.querySelector('.js-moves');
let score={
  win: 0,
  lose: 0,
  tie:0
};
let savedScore = JSON.parse(localStorage.getItem('score'));
if(savedScore){
  score = savedScore;
}
updateScore();

function reset(){
  score={
  win: 0,
  lose: 0,
  tie:0
};
updateScore();
localStorage.removeItem('score');
}

let isAutoPlaying = false;
let intervalID;
function autoPlay(){
  if(!isAutoPlaying){
    intervalID = setInterval(function(){
      let playerMove = pickMove();
      playingGame(playerMove);
    },1000);
    isAutoPlaying = true;
  }
  else{
    clearInterval(intervalID);
    isAutoPlaying = false;
  }
}

document.querySelector('.js-rock-button').addEventListener('click',()=>{playingGame('rock')});

document.querySelector('.js-paper-button').addEventListener('click',()=>{playingGame('paper')});

document.querySelector('.js-scissors-button').addEventListener('click',()=>{playingGame('scissors')});

document.body.addEventListener('keydown',(event)=>{
  if(event.key === 'r'){
    playingGame('rock');
  }
  else if(event.key === 'p'){
    playingGame('paper');
  }
  else if(event.key === 's'){
    playingGame('scissors');
  }
  else{
    document.querySelector('.js-error-text').innerHTML = 'use correct keyword';
  }
})

function pickMove(){
  let randomNumber = Math.random();
  let computerMove;

  if(randomNumber<(1/3)){
    computerMove = 'rock';
  }
  else if(randomNumber<(2/3)){
    computerMove = 'paper';
  }
  else{
    computerMove='scissors';
  }
  return computerMove;
}


function playingGame(playerMove){
  let computerMove=pickMove();
  if(computerMove===playerMove){
    resultElement.innerHTML=`Tie.`;
    score.tie += 1;
  }
  else if(playerMove==='rock' && computerMove==='scissors'|| playerMove==='paper' && computerMove==='rock'|| playerMove==='scissors'&& computerMove==='paper'){
    resultElement.innerHTML=`You win.`;
    score.win +=1;
  }
  else{
    resultElement.innerHTML=`You lose.`;
        score.lose+=1;
  }
  reason.innerHTML =  `You <img src="images/${playerMove}-emoji.png" class="move-img"><img src="images/${computerMove}-emoji.png"class="move-img"> Computer`;
  updateScore();
  localStorage.setItem('score', JSON.stringify(score));
}
function updateScore(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.win} Losses: ${score.lose} Ties: ${score.tie}`
}

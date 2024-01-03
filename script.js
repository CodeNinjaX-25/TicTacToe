// Code written by Abraham Bishop 
// You may reuse this code. Credits to the owner will be very much appreciated 
// Company Name : CodeNest Solutions 
// You can send any improved version to our email : codenestsolutions@gmail.com
let aiImg = document.getElementById("ai");
let aiText = document.getElementById("ai_text");
let gameCondition = document.getElementById("condition");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let playerChoice = "";
let aiChoices = ["rock", "paper", "scissors"];
let aiImagesUrl = ['assets/rock_ai-removebg.png','assets/paper_ai-removebg.png','assets/scissors_ai-removebg.png']
let money = document.getElementById('cash')
cash = 300
money.textContent = `Cash : $${cash}`
var bgMusic = new Audio('assets/Miami (Original Mix).mp3')

// play audio when browser loads
window.onload(bgMusic.play())

// Creating a click function for rock
rock.addEventListener("click", () => {
    // play sound
    var audio = new Audio('assets/mixkit-bubble-pop-up-alert-notification-2357.wav');
    audio.play();

  let randomAiChoice = aiChoices[Math.floor(Math.random() * aiChoices.length)];
  playerChoice = "rock";
  aiText.textContent = `AI has choosen ${randomAiChoice}`;
  // add animation
  aiImg.classList.add('pop');
  setTimeout(()=>{
      aiImg.classList.remove('pop');
  },1000)
  // text animation
  gameCondition.classList.add('wobble');
  setTimeout(()=>{
      gameCondition.classList.remove('wobble')
  },1000)
    // second text animation
  aiText.classList.add('flash');
  setTimeout(()=>{
      aiText.classList.remove('flash')
  },1000)
  // game logic
  if (randomAiChoice == "rock") {
    gameCondition.textContent = "This round is a draw 🤝";
    aiImg.src = aiImagesUrl[0]
  } else if (randomAiChoice == "paper") {
    gameCondition.textContent = "You lost this round 😝";
    aiImg.src = aiImagesUrl[1]
    // deduct money
    cash = cash - 150;
    if (cash < 0){
        cash = 0;
    }
    money.textContent = `Cash : $${cash}`;
  } else {
    gameCondition.textContent = "You won this round 💪";
    aiImg.src = aiImagesUrl[2]
    // add money
    cash = cash + 100;
    money.textContent = `Cash : $${cash}`;
  }
});
// Click function for paper

paper.addEventListener("click", ()=>{
    // play sound
    var audio = new Audio('assets/mixkit-bubble-pop-up-alert-notification-2357.wav');
    audio.play();
    let randomAiChoice = aiChoices[Math.floor(Math.random()*aiChoices.length)];
    playerChoice = 'paper'
    aiText.textContent = `AI has choosen ${randomAiChoice}`
    // add animation
    aiImg.classList.add('pop');
    setTimeout(()=>{
        aiImg.classList.remove('pop');
    },1000)
    // text animation
    gameCondition.classList.add('wobble');
    setTimeout(()=>{
        gameCondition.classList.remove('wobble')
    },1000)
        // second text animation
    aiText.classList.add('flash');
    setTimeout(()=>{
        aiText.classList.remove('flash')
    },1000)
    // game logic
    if (randomAiChoice == 'rock'){
        gameCondition.textContent = 'You won this round 💪'
        aiImg.src = aiImagesUrl[0]
        // add money
        cash = cash + 100;
        money.textContent = `Cash : $${cash}`;
    } else if (randomAiChoice == 'paper'){
        gameCondition.textContent = 'This round is a draw 🤝'
        aiImg.src = aiImagesUrl[1]
    } else {
        gameCondition.textContent = 'You lost this round 😝'
        aiImg.src = aiImagesUrl[2]
        // deduct money
        cash = cash - 150;
        if (cash < 0){
            cash = 0;
        }
        money.textContent = `Cash : $${cash}`;
    }
})
// Click function for scissors
scissors.addEventListener("click", ()=>{
    // play sound
    var audio = new Audio('assets/mixkit-bubble-pop-up-alert-notification-2357.wav');
    audio.play();
    let randomAiChoice = aiChoices[Math.floor(Math.random()*aiChoices.length)];
    playerChoice = 'scissors'
    aiText.textContent = `AI has choosen ${randomAiChoice}`
    // add animation
    aiImg.classList.add('pop');
    setTimeout(()=>{
        aiImg.classList.remove('pop')
    },1000)
    // text animation
    gameCondition.classList.add('wobble');
    setTimeout(()=>{
        gameCondition.classList.remove('wobble')
    },1000)
       // second text animation
    aiText.classList.add('flash');
    setTimeout(()=>{
        aiText.classList.remove('flash')
    },1000)
    // game logic
    if (randomAiChoice == 'rock'){
        gameCondition.textContent = 'You lost this round 😝'
        aiImg.src = aiImagesUrl[0]
        // deduct money
        cash = cash - 150;
        if (cash < 0){
            cash = 0;
        }
        money.textContent = `Cash : $${cash}`;
    } else if (randomAiChoice == 'paper'){
        gameCondition.textContent = 'You won this round 💪'
        aiImg.src = aiImagesUrl[1]
        // add money
        cash = cash + 100;
        money.textContent = `Cash : $${cash}`;
    } else {
        gameCondition.textContent = 'This round is a draw 🤝'
        aiImg.src = aiImagesUrl[2]
    }
})
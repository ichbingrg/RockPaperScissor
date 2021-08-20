const game = () => {
  let pScore = 0;
  let cScore = 0;


  //Start the game
  const startGame=()=>{
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro") ; 
    const match = document.querySelector(".match") ; 

    playBtn.addEventListener("click", ()=>{
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });

    playMatch();
  };

  //Play Match

  const playMatch=()=>{
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll('.hands img') ; 

    //remove animation after every iteration, so that we can set it again and let it run after the button is pressed 
    hands.forEach(hand =>{
      hand.addEventListener('animationend',function(){
        this.style.animation = "";
      })
    })

    //Computer options (random generation)
    const computerOptions = ["rock", "paper", "scissors"];
    options.forEach((option)=>{
      option.addEventListener("click", function(){
        //computer Choice
        const computerNumber =  Math.floor(Math.random()*3);
        const computerChoice = computerOptions[computerNumber];
        //User Choice
        const userChoice = this.textContent;

        playerHand.style.animation = "shakePlayer 2s ease" ;
        computerHand.style.animation = "shakeComputer 2s ease" ;

        playerHand.src = `./assets/rock.png`;
        computerHand.src = `./assets/rock.png`;

        //Set a timeout on the change of hands s.t. the changes occur only after the shake finishes

        setTimeout(() => {
          //Update Images
        playerHand.src = `./assets/${userChoice}.png`;
        computerHand.src = `./assets/${computerChoice}.png`;
        
        //compare Who wins
        compareHands(userChoice,computerChoice);
        updateScore();
        
        }, 1800)
      })
    })
  }


  const updateScore = () => {
    document.querySelector(".computer-score p").textContent = cScore ;
    document.querySelector(".player-score p").textContent = pScore ;

  }

  const compareHands = (playerChoice, computerChoice) => {
    let winner = document.querySelector(".winner");
    if (playerChoice === computerChoice){
      winner.textContent = "It's a tie" ; 
      return ;
    }

    if(playerChoice === "rock"){
      if(computerChoice ==="scissors"){
        winner.textContent = "Player Wins" ; 
        pScore++;
      }else{
        winner.textContent = "Computer Wins";
        cScore++;
      }
      return ;
    }

    if(playerChoice === "paper"){
      if(computerChoice ==="scissors"){
        winner.textContent = "Computer Wins" ;
        cScore++; 
      }else{
        winner.textContent = "Player Wins";
        pScore++;
      }
      return ;
    }

    if(playerChoice === "scissors"){
      if(computerChoice ==="rock"){
        winner.textContent = "Computer Wins" ; 
        cScore++;
      }else{
        winner.textContent = "Player Wins";
        pScore++;
      }
      return ;
    }

  }

  //call all the inner functions
  startGame();
  //playMatch();
  //updateScore();

};

game();
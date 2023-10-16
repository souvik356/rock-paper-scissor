let userScore = 0;
let computerScore = 0;
let attempts = 5;
// console.log('hello');
const getComputerChoice = () =>{
    const choice = ['paper','scissor','stone'];
    const randomIndex = Math.floor(Math.random() *3);
    console.log(randomIndex);
    return choice[randomIndex];
}

const playRound = (userChoice) => {
    if (attempts > 0) {
        const computerChoice = getComputerChoice();
        document.getElementById('userChoice').innerHTML = userChoice;
        document.getElementById('computer-choice').innerHTML = computerChoice;

        let roundResult = determineWinner(userChoice, computerChoice);
        document.getElementById('roundResult').innerHTML = roundResult;

        if (roundResult === 'You win') {
            userScore++;
            attempts--;
        } else if (roundResult === 'You lose') {
            computerScore++;
            attempts--;
        }
        
        document.getElementById('attempts').innerHTML = attempts;
        document.getElementById('my-score').innerHTML = userScore;
        document.getElementById('computer-score').innerHTML = computerScore;

        if (attempts === 0) {
            showFinalResult();
        }
    }
};

let determineWinner = (userChoice,computerChoice) => {
    if(userChoice === computerChoice){
        return 'draw';
    }
    else if((userChoice === 'stone' && computerChoice === 'scissor') || 
    (userChoice ==='scissor' && computerChoice ==='paper') ||
    (userChoice ==='paper' && computerChoice ==='stone')
    ){
        return 'You win';
    }
    else{
        return 'You lose';
    }
}

const showFinalResult = () =>{
    let finalResult;
    if(userScore > computerScore){
        finalResult = "You won the Game";
    }
    else{
        finalResult = "You Loose the Game";
    }
    document.getElementById('finalResult').innerHTML = finalResult;
}

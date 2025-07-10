let userScore = 0;
let compScore = 0;
let para = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
let userscore = document.querySelector("#user-score");
let compscore = document.querySelector("#comp-score");

const genCompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor((Math.random()) * 3);
    return options[randIdx];
}
const drawGame = () => {
    para.innerText = "Draw! Play Again";
    para.style.backgroundColor = "blue";
}

const showWinner = (userwin, userChoice, compChoice) => {
    if (userwin) {
        userScore++;
        userscore.innerText = userScore;
        para.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        para.style.backgroundColor = "green";

    } else {
        compScore++;
        compscore.innerText = compScore;
        para.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        para.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {

    const compChoice = genCompchoice();


    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userwin = true;
        if (userChoice === "rock") {
            userwin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userwin = compChoice === "scissor" ? false : true;
        } else {
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener(("click"), () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
})
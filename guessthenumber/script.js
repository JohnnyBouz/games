
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

let bestScore = localStorage.getItem("bestScore");

if (bestScore) {
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("bestScore").textContent = bestScore;
    });
}

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = Number(document.getElementById("guessInput").value);
    const message = document.getElementById("message");

    attempts++;
    document.getElementById("attempts").textContent = attempts;

    if (!guess) {
        message.textContent = "Please enter a number!";
        message.style.color = "orange";
        return;
    }

    if (guess === secretNumber) {
        message.textContent = `Congratulations! You found the number in ${attempts} attempts!`;
        message.style.color = "green";
    } else if (guess < secretNumber) {
        message.textContent = "Too low!";
        message.style.color = "red";
    } else {
        message.textContent = "Too high!";
        message.style.color = "red";
    }
}
if (guess === secretNumber)
function newGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById("attempts").textContent = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("guessInput").value = "";
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}

if (!bestScore || attempts < bestScore) {
    bestScore = attempts;
    localStorage.setItem("bestScore", bestScore);
    document.getElementById("bestScore").textContent = bestScore;
}
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

let bestScore = localStorage.getItem("bestScore");

if (bestScore) {
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("bestScore").textContent = bestScore;
    });
    
startGame();
if (guess === secretNumber)
if (!bestScore || attempts < bestScore) {
    bestScore = attempts;
    localStorage.setItem("bestScore", bestScore);
    document.getElementById("bestScore").textContent = bestScore;
}
}let secretNumber;
let attempts;

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById("attempts").textContent = attempts;
    document.getElementById("message").textContent =
        "Καλή επιτυχία!";
    document.getElementById("guessInput").value = "";
}

function checkGuess() {
    const guess = Number(document.getElementById("guessInput").value);
    const message = document.getElementById("message");

    if (!guess || guess < 1 || guess > 100) {
        message.textContent =
            "Δώσε αριθμό από 1 έως 100!";
        return;
    }

    attempts++;
    document.getElementById("attempts").textContent = attempts;

    if (guess < secretNumber) {
        message.textContent = "📉 Πολύ μικρός!";
    } else if (guess > secretNumber) {
        message.textContent = "📈 Πολύ μεγάλος!";
    } else {
        message.textContent =
            `🎉 Μπράβο! Το βρήκες σε ${attempts} προσπάθειες!`;
    }
}

document
    .getElementById("guessBtn")
    .addEventListener("click", checkGuess);

document
    .getElementById("restartBtn")
    .addEventListener("click", startGame);

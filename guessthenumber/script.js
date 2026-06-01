let secretNumber;
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

startGame();
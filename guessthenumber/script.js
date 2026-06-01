javascript
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
function toggleTheme() {
    document.body.classList.toggle("dark");
}
function toggleTheme() {
    document.body.classList.toggle("dark");
}
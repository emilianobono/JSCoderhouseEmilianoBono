let summit = parseInt(prompt("Enter the maximum number"));
while (!summit) {
    summit = parseInt(prompt("Enter a correct number"));
}

const targetNum = Math.floor(Math.random() * summit) + 1;

let guess = parseInt(prompt("First guess"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = (prompt("Exceeds! Try again:"));
    } else {
        guess = (prompt("Too low! Try again:"));
    }
}
if (guess === 'q') {
    alert("Good bye!")
} else {
    alert(`You are a winner! It took you ${attempts} guesses`)
}

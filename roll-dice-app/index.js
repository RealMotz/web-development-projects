var player1 = document.getElementById('player-1');
var player2 = document.getElementById('player-2');

function setDiceImage(roll, element) {
    element.src = "img/" + roll.toString() + ".png";
}

function roll() {
    var dice = Math.random()*6;
    return Math.floor(dice) + 1;
}

function play(setup=false) {
    let rollP1 = roll();
    let rollP2 = roll();
    setDiceImage(rollP1, player1);
    setDiceImage(rollP2, player2);

    if(setup) return;

    let winner = document.getElementById('winner-name');
    winner.classList.remove("hidden");
    if(rollP1 > rollP2) {
        winner.querySelector("span").textContent = "Player 1!";
    } else if(rollP1 < rollP2) {
        winner.querySelector("span").textContent = "Player 2!";
    } else {
        winner.querySelector("span").textContent = "Draw!";
    }
}

play(true);
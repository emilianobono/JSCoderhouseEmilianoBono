alert("Welcome to the Mortal Kombat Tournament")
alert("The fighters are: Scorpio - Kitana - Kano - Milena")

let jugador = prompt ("Select your fighter:").toLowerCase()

// let jugador2 = prompt ("Ingresa el nombre del segundo jugador")

while ((jugador != 'scorpio') && (jugador != 'kano') && (jugador != 'milena') && (jugador != 'kitana')){
    jugador = prompt ("Select a valid fighter:").toLowerCase();
}


let scorpio = 1000;
let kano = 900;
let kitana = 850;
let milena = 850;

let sindel = 400;
let subzero = 450;
let reptile = 500;

let lifepoints = 0

alert("You procede to the first encounter: Sindel")

function encounter1() {
    switch (jugador) {
        case 'scorpio':
            lifepoints = (scorpio - sindel)
            alert("Your fighter's lifepoints are " + lifepoints)
            break;
        case 'kano':
            lifepoints = (kano - sindel)
            alert("Your fighter's lifepoints are " + lifepoints)
            break;
        case 'kitana':
            lifepoints = (kitana - sindel)
            alert("Your fighter's lifepoints are " + lifepoints)
            break;
        case 'milena':
            lifepoints = (milena - sindel)
            alert("Your fighter's lifepoints are " + lifepoints)
            break;
        default:
            alert("Not a valid fighter, start again.")
            break;
    }
}
encounter1()

alert("Victory! Now face the next fighter: Sub-Zero")

function encounter2() {
    switch (jugador) {
        case 'scorpio':
            lifepoints = (lifepoints - subzero)
            alert("Your fighter's lifepoints are " + lifepoints)
            break;
        case 'kano':
            lifepoints = (lifepoints - subzero)
            alert("Your fighter's lifepoints are " + lifepoints)
            break;
        case 'kitana':
            lifepoints = (lifepoints - subzero)
            alert("Your fighter's lifepoints are " + lifepoints)
            break;
        case 'milena':
            lifepoints = (lifepoints - subzero)
            alert("Your fighter's lifepoints are " + lifepoints)
            break;
        default:
            alert("Not a valid fighter, start again.")
            break;
    }
}
encounter2()

if (lifepoints <= 0) {
    alert("Game over! You lose!")
} else if (lifepoints >= 0){
    alert("Victory! Now face the next fighter: Reptile")
}

function encounter3() {
    switch (jugador) {
        case 'scorpio':
            lifepoints = (lifepoints - reptile)
            alert("Your fighter's lifepoints are " + lifepoints)
            break;
        case 'kano':
            lifepoints = (lifepoints - reptile)
            alert("Your fighter's lifepoints are " + lifepoints)
            break;
        default:
            alert("Not a valid fighter, start again.")
            break;
    }
}
encounter3()

if (lifepoints <= 0) {
    alert("Game over! You lose!")
} 

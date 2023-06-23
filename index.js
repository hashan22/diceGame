var randomNumber1 = Math.floor(Math.random() * 6 + 1); //1-6
var randomNumber2 = Math.floor(Math.random() * 6 + 1); //1-6 for 2nd dice

var randomDiceImage = "./images/dice" + randomNumber1 + ".png"; // ./images/dice1.png - ./images/dice6.png
var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png"; // ./images/dice1.png - ./images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
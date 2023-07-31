// left side Image

var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomnumber1 + ".png";
var randomImagSrc = "images/" + randomDiceImage;
document.querySelector("img.img1").setAttribute("src", randomImagSrc);

// Right side Image

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomnumber2 + ".png";
var randomImagSrc = "images/" + randomDiceImage;
document.querySelector("img.img2").setAttribute("src", randomImagSrc);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "🚩 Player1 Wins!";
}
else if(randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML = "Player2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
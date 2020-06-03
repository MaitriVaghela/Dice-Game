var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomDiceImg1 = "dice" + randomNumber1 + ".png";
var randomImgSrc1 = "images/" + randomDiceImg1;

var randomDiceImg2 = "dice" + randomNumber2 + ".png";
var randomImgSrc2 = "images/" + randomDiceImg2;

var image1 = document.querySelectorAll("img")[0];

var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImgSrc1);

image2.setAttribute("src", randomImgSrc2);

if(randomImgSrc1 > randomImgSrc2){
  document.querySelectorAll("h1")[0].innerHTML = "🚩Player 1 Wins!";
}else if (randomImgSrc1 < randomImgSrc2) {
  document.querySelectorAll("h1")[0].innerHTML = "Player 2 Wins!🚩";
}else{
  document.querySelectorAll("h1")[0].innerHTML = "Draw!";
}

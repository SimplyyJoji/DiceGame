//We need to create a random number for player 1 and player 2
var random1 = Math.floor(Math.random() * 6) + 1;
var random2 = Math.floor(Math.random() * 6) + 1;
//next we need to change the photo depending on 
var image1 = "imgs/" + "dice" + random1 + ".png";
var image2 = "imgs/" + "dice" + random2 + ".png"; 
document.querySelector(".dice .img1").setAttribute("src", image1);
document.querySelector(".dice .img2").setAttribute("src", image2);
//we need to change the h1


if (random1 > random2) {
  document.querySelector("h1").innerHTML = "PLAYER 1 WINS!";
} else if (random1 < random2) {
  document.querySelector("h1").innerHTML = "PLAYER 2 WINS!";
} else {
  document.querySelector("h1").innerHTML = "DRAW";
}


var randomNumber1;
randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "images/dice" + randomNumber1 + ".png";
var randomImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImage1);
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "🚩 Player 1 has Won!";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").textContent = "🚩 Player 2 has Won!";
}
else{
  document.querySelector("h1").textContent = "It is a Draw!";
}

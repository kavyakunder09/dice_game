var randomNumber=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomNumber+".png";
var randomImage="images/"+randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage);




var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png";
var randomImage2="images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);
//document.getElementsByTagName("img")[0].setAttribute("class", "democlass");
if(randomNumber > randomNumber2)
{
  document.querySelector("h1").innerHTML="Hurray...Player one wins!!!";
}
else if (randomNumber < randomNumber2 )
{
  document.querySelector("h1").innerHTML="Hurray...Player two wins!!!";

}
else{
  document.querySelector("h1").innerHTML="Oops...Its a tie!";

}

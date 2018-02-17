$(document).ready(function() {


var wins=0;
var losses=0;
var userScore=0;
var crystalValue=[];
var crystalImg=[]

for (var i=0; 1<.length; i++);

[Math.floor(Math.random()*12)+1]

[Math.floor(Math.random()* (120-19)+19]

	
}


// this creates a new div for the crystals
for (var i = 0, k = 0; i < imgSrc.length, k < 4; i++, k++) {
var imageCrystal = $("<img>");
imageCrystal.addClass("crystal-image");
imageCrystal.attr("src", imgSrc[i]);
numberOptions[k] = (Math.floor(Math.random() * 12) + 1);
imageCrystal.attr("data-crystalvalue", numberOptions[k]);
$("#crystals").append(imageCrystal);
}


function startNewGame (){

}

//Lets psuedo code and build our functions down here since we are starting with one activities code.
 //Firstly we need an initialize function that runs at start up and every time a game is won or lost.
   //the initialize function will generate a random between 19-121 for the targetNumber
   // It will also populate the numberOptions array with four new randoms between 1-12
   //counter wil reset to zero.
   //the dynamic displays must also be triggered here so the game sets and resets properly.
   //a loop is already being used above to create the crystals. this loop must be used to generate different images for the final game.
     // basically you ned you change the src in the imageCrystal thing above to an array call that holds four images.
 //Secondly we need to update our dynamic displays and our conditionals to support our desired functionlity
   //basically instead of alerts we will use dynamic html to display wins losses target nmber and counter.
   //also the conditionals need to increment wins and osses as well as correctly call intialize.

   // <img id="crystal1" class="crystals" src="assets/images/crystal1.png"/>
			// 	<img id="crystal2" class="crystals" src="assets/images/crystal2.png"/>
			// 	<img id="crystal3" class="crystals" src="assets/images/crystal3.png"/>
			// 	<img id="crystal4" class="crystals" src="assets/images/crystal4.png"/>
			// 	<img id="crystal5" class="crystals" src="assets/images/crystal5.png"/>
			// 	<img id="crystal6" class="crystals" src="assets/images/crystal6.png"/>
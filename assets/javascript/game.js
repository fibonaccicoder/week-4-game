$(document).ready(function() {

	//initialize variables to be used

var targetNumber;
var userScore=0;
var wins=0;
var losses=0;
var crystalValue=[];
var imageArr=["assets/images/crystal1.png","assets/images/crystal2.png","assets/images/crystal3.png","assets/images/crystal4.png","assets/images/crystal5.png","assets/images/crystal6.png"];
var crystalImg;

//functions to be called later


function newGame(){
	 userScore = 0;
    targetNumber = Math.floor(Math.random() * (120-19) + 19);
    $("#targetNumber").text(targetNumber);
    updateScore();

    for (var i = 0; i < imageArr.length; i++) {
        crystalImg = $("<img>");
        crystalImg.attr("src", imageArr[i]);
       }

     for (var x = 0; x<6; x++){
        crystalValue[x] = (Math.floor(Math.random() * 12) + 1);
        crystalImg.attr("data-crystalvalue", crystalValue[x]);
        $("#crystals").append(crystalImg);
    }
}


//

function updateScore(){
	$("#userScore").html(userScore);
}

//


function updateWins(){
	$("#wins").html(wins);
}

//

function updateLosses(){
	$("#losses").html(losses);
}





//call functions to run game

function newGame ();


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

}
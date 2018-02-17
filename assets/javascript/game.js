$(document).ready(function() {

	//initialize variables to be used

var targetNumber;
var userScore=0;
var wins=0;
var losses=0;
var crystalValue=[];
var imageArr=["assets/images/crystal1.png","assets/images/crystal2.png","assets/images/crystal3.png","assets/images/crystal4.png","assets/images/crystal5.png","assets/images/crystal6.png"];
var crystalImg;

//set up functions

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
        crystalImg.each("crystal-value", crystalValue[x]);
        $("#crystals").append(crystalImg);
    }
}


//how to add values of crystals to score 

 $("#crystals").on("click", function() {
    crystalValue = ($(this).attr("crystal-value"));
    crystalValue = parseInt(crystalValue);
    userScore += crystalValue;
});


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

//

//win condition

if (userScore===targetNumber){
	console.log("you win!");
	wins++;
	updateWins();
	newGame();

}else if (userScore>=targetNumber){
	console.log("you lose!");
	losses++;
	updateLosses();
	newGame();
}



//call functions to run game

newGame ();
updateScore();
updateWins();
updateLosses();

});
var buttoncolors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var randomNumber;
var randomChosenColour;
var nextSequence = () => {

    randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttoncolors[randomNumber];
    gamePattern.push(randomChosenColour);
}
$("#" + randomChosenColour).fadeTo(100, 0.3, function () {
    $(this).fadeTo(500, 1.0);
});
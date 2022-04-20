var buttoncolors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var randomNumber;
var randomChosenColour;
var level = 0;
var started = false

$(document).keypress(function () {
    if (!started) {
        nextSequence();
        started = true;
    }
});

$("[type=button]").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    nextSequence();
});

var playSound = (name) => {
    var audio = new Audio("sounds/" + name + ".mp3 ");
    audio.play();
}
var nextSequence = () => {

    randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttoncolors[randomNumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    $("h1").text("Level " + level);
    level++;

    $("#" + randomChosenColour).fadeTo(100, 0.3, function () {
        $(this).fadeTo(500, 1.0);
    });
}
var animatePress = (chosenColor) => {
    $("#" + chosenColor).addClass("pressed");
    setTimeout(() => {
        $("#" + chosenColor).removeClass("pressed");
    }, 100)
}
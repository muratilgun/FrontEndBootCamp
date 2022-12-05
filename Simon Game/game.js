var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){
  return Math.floor(Math.random() * 3);
}

var randomChosenColour =buttonColours[nextSequence()];

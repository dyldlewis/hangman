var Dino = require('./../js/dino.js').dinoModule;

var displayDinos = function(dino_paragraphs) {
  $('#output').append(dino_paragraphs + "<br>");
};
var displayRandom = function(dinoLetters) {
  letterIndex = 0;
  for (i = 0; i < dinoLetters.length; i ++) {
    $("#random").append("<span class='" + dinoLetters[i]+ "'>" + dinoLetters[i] + "<span>");
    letterIndex++;
  }
};

var showLetter = function(letter) {
  $({class : letter}).hide();
};

$(document).ready(function() {
  $('#get-dino').click(function() {
    var paragraphs = parseInt($('#paragraphs').val());
    var words = parseInt($('#words').val());
    newDino = new Dino(paragraphs, words);
    newDino.getDino();
    dinoLetters = newDino.randomDino(displayRandom);
    newDino.dinoParagraphs(displayDinos);
  });
  $("#letter-entry").submit(function(event) {
    event.preventDefault();
    var user_letter = $("#enter-letter").val();
    var compareArray = newDino.compareLetters(user_letter, dinoLetters, showLetter);
  });
});

var Dino = require('./../js/dino.js').dinoModule;

var displayDinos = function(dino_paragraphs) {
  $('#output').append(dino_paragraphs + "<br>");
};
var displayRandom = function(dinoLetters) {
  letterIndex = 0;
  for (i = 0; i < dinoLetters.length; i ++) {
    $("#random").append("<span class='letter'>" + dinoLetters[i] + "<span>");
    letterIndex++;
  }
};

$(document).ready(function() {
  $('#get-dino').click(function() {
    var paragraphs = parseInt($('#paragraphs').val());
    var words = parseInt($('#words').val());
    var newDino = new Dino(paragraphs, words);
    newDino.getDino();
    newDino.randomDino(displayRandom);
    newDino.dinoParagraphs(displayDinos);
  });
});

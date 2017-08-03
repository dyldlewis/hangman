var Dino = require('./../js/dino.js').dinoModule;

var displayDinos = function(dino_paragraphs) {
  $('#output').append(dino_paragraphs + "<br>");
};
var displayRandom = function(dinoLetters) {
  letterIndex = 0;
  for (i = 0; i < dinoLetters.length; i++) {
    $("#random").append("<span class='" + i + "'>" + dinoLetters[i] + "<span>");
    letterIndex++;
  }
};

var hideLetters = function(index_array) {
  console.log(index_array);
  for (j = 0; j < index_array.length; j++) {
    console.log(index_array[j]);
    var idx = "." + index_array[j];
    console.log(idx);
    $(idx).addClass("show-letter");
  }
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
    var compareArray = newDino.compareLetters(user_letter, dinoLetters, hideLetters);
  });
});

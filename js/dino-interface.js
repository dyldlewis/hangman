var Dino = require('./../js/dino.js').dinoModule;

var displayDinos = function(dinos_array) {
  $('#output').append(dinos_array + "<br>");
};
var displayRandom = function(random_item) {
  $("#random").text(random_item);
}

$(document).ready(function() {
  $('#get-dino').click(function() {
    var paragraphs = parseInt($('#paragraphs').val());
    var words = parseInt($('#words').val());
    var newDino = new Dino(paragraphs, words);
    newDino.getDino(displayDinos, displayRandom);
  });
});

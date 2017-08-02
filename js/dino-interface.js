var Dino = require('./../js/dino.js').dinoModule;

var displayDinos = function(dinos_array) {
  $('#output').append(dinos_array + "<br>");
};

$(document).ready(function() {
  $('#get-dino').click(function() {
    var paragraphs = parseInt($('#paragraphs').val());
    var words = parseInt($('#words').val());
    var newDino = new Dino(paragraphs, words);
    newDino.getDino(displayDinos);
  });
});

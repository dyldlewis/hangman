var Dino = require('./../js/dino.js').dinoModule;

var displayDinos = function(dinos_array) {
  console.log(dinos_array);
  $('#output').append(dinos_array + "<br>");
};

$(document).ready(function() {
  $('#get-dino').click(function() {
    var paragraphs = $('#paragraphs').val();
    var words = $('#words').val();
    var newDino = new Dino(paragraphs, words);
    var display = newDino.getDino(displayDinos);
    console.log(display);
  });
});

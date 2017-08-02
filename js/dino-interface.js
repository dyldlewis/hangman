var Dino = require('./../js/dino.js').dinoModule;

$(document).ready(function() {
  $('#get-dino').click(function() {
    var paragraphs = $('#paragraphs').val();
    var words = $('#words').val();
    var newDino = new Dino(paragraphs, words);
    newDino.getDino();
    });
  });
});

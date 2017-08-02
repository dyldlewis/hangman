var displayDinos = require('./../js/dino-interface.js').displayDinosFunction;

function Dino(paragraphs, words) {
  this.paragraphs = paragraphs;
  this.words = words;
}

Dino.prototype.getDino = function() {
  $.get('http://dinoipsum.herokuapp.com/api/?format=json' +  '&paragraphs=' + this.paragraphs + '&words=' + this.words)
  .then(function(response) {
    var dinos = response;
    for (i = 0; i < this.paragraphs; i++) {
      var new_array = response[i].join(" ");
      displayDinos(new_array);
    }
  })
  .fail(function(error) {
    $("#output").text(error.responseJSON.message);
  });
};
exports.dinoModule = Dino;

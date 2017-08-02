function Dino(paragraphs, words) {
  this.paragraphs = paragraphs;
  this.words = words;
}

Dino.prototype.getDino = function(displayDinos) {
  var paragraphs = this.paragraphs;
  var words = this.words;
  $.get('http://dinoipsum.herokuapp.com/api/?format=json' +  '&paragraphs=' + paragraphs + '&words=' + words)
  .then(function(response) {
    var dinos = response;
    for (i = 0; i < paragraphs; i++) {
      var new_array = response[i].join(" ");
      displayDinos(new_array);
    }
  })
  .fail(function(error) {
    $("#output").text(error.responseJSON.message);
  });
};

exports.dinoModule = Dino;

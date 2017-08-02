function Dino(paragraphs, words) {
  this.paragraphs = paragraphs;
  this.words = words;
}

Dino.prototype.getDino = function() {
  $.get('http://dinoipsum.herokuapp.com/api/?format=json' +  '&paragraphs=' + this.paragraphs + '&words=' + this.words, function(response) {
    var dinos = response;
    for (i = 0; i < this.paragraphs; i++) {
      var new_array = response[i].join(" ");
      $('#output').append(new_array + "<br>");
    }
}

exports.dinoModule = Dino;

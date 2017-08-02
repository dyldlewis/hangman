function Dino(paragraphs, words) {
  this.paragraphs = paragraphs;
  this.words = words;
}

Dino.prototype.getDino = function(displayDinos) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=json' +  '&paragraphs=' + this.paragraphs + '&words=' + this.words)
  .then(function(response) {
    var dinos = response;
    for (i = 0; i < this.paragraphs; i++) {
      var new_array = response[i].join(" ");
      console.log(new_array);
      displayDinos(new_array);
    }
  })
  .fail(function(error) {
    $("#output").text(error.responseJSON.message);
  });
};

exports.dinoModule = Dino;

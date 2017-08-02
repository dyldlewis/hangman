function Dino(paragraphs, words) {
  this.paragraphs = paragraphs;
  this.words = words;
}

function getRandomInt(paragraphs, words) {
  min = 1;
  max = paragraphs * words;
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

Dino.prototype.getDino = function(displayDinos, displayRandom) {
  var allDinos = [];
  var paragraphs = this.paragraphs;
  var words = this.words;
  var random_int = getRandomInt(paragraphs, words);
  $.get('http://dinoipsum.herokuapp.com/api/?format=json' +  '&paragraphs=' + paragraphs + '&words=' + words)
  .then(function(response) {
    var dinos = response;
    for (i = 0; i < paragraphs; i++) {
      var new_array = response[i].join(" ");
      displayDinos(new_array);
      for (k = 0; k < words; k++) {
        allDinos.push(response[i][k]);
      }
    }
    console.log(random_int);
    console.log(allDinos);
    displayRandom(allDinos[random_int]);
  })
  .fail(function(error) {
    $("#output").text(error.responseJSON.message);
  });
};

exports.dinoModule = Dino;

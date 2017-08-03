function Dino(paragraphs, words) {
  this.paragraphs = paragraphs;
  this.words = words;
  this.apicall = "";
  this.dinoParse = [];
}

function getRandomInt(paragraphs, words) {
  min = 1;
  max = paragraphs * words;
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

Dino.prototype.getDino = function() {
  var paragraphs = this.paragraphs;
  var words = this.words;
    this.apicall = $.get('http://dinoipsum.herokuapp.com/api/?format=json' +  '&paragraphs=' + paragraphs + '&words=' + words, function(response) {
      return response;
    });
};


Dino.prototype.dinoParagraphs = function(displayDinos) {
  var allDinos = [];
  var response = this.apicall;
  var paragraphs = this.paragraphs;
  var words = this.words;
    response.then(function(response) {
    for (i = 0; i < paragraphs; i++) {
      var dino_paragraphs = response[i].join(" ");
      displayDinos(dino_paragraphs);
    }
    })
    .fail(function(error) {
      $("#output").text(error.responseJSON.message);
    });
};

Dino.prototype.randomDino = function(displayRandom) {
  var allDinos = [];
  var response = this.apicall;
  var paragraphs = this.paragraphs;
  var words = this.words;
  response.then(function(response) {
    for (i = 0; i < paragraphs; i++) {
      for (k = 0; k < words; k++) {
        allDinos.push(response[i][k]);
      }
    }
    this.dinoParse = allDinos;
    var random = getRandomInt(paragraphs, words);
    var randomDino = this.dinoParse[random];
    var dinoLetters = randomDino.split("");
    displayRandom(dinoLetters);
  })
  .fail(function(error) {
    $("#output").text(error.responseJSON.message);
  });
};

exports.dinoModule = Dino;

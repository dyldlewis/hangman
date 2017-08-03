function Dino(paragraphs, words) {
  this.paragraphs = paragraphs;
  this.words = words;
  this.apicall = "";
  this.dinoParse = [];
  // this.dinoLetters = [];
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
    dinoLetters = randomDino.split("");
    displayRandom(dinoLetters);
    return dinoLetters;
  })
  .fail(function(error) {
    $("#output").text(error.responseJSON.message);
  });
};

Dino.prototype.compareLetters = function(user_letter, dinoLetters, showLetter) {
  var comparison = false;
  var index_array = [];
  for (idx = 0; idx < dinoLetters.length; idx++) {
    if (dinoLetters[idx] === user_letter) {
      comparison = true;
    }
  }
  if (comparison) {
    showLetter(user_letter);
  }
  // return index_array;
};

exports.dinoModule = Dino;

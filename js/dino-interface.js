$(document).ready(function() {
  $('#get-dino').click(function() {
    var paragraphs = $('#paragraphs').val();
    var words = $('#words').val();
    $.get('http://dinoipsum.herokuapp.com/api/?format=json' +  '&paragraphs=' + paragraphs + '&words=' + words, function(response) {
      var dinos = response;
      for (i = 0; i < paragraphs; i++) {
        var new_array = response[i].join(" ");
        $('#output').append(new_array + "<br>");
      }
    });
  });
});

//Business Logic
function cryptosquare(string) {
  var userInputArray = string.split("");
  var userOutput = userInputArray.join("");
  var twoByTwo = [];
  var counter = 0;
  var squareRoot = Math.sqrt(string.length);
  if(squareRoot % Math.round(squareRoot) === 0) {
    for (var i = 0; i < squareRoot; i++) {
      twoByTwo.push([]);
    }
  } else {
    for (var i = 0; i <= squareRoot; i++) {
      twoByTwo.push([]);
    }
  }
    for(var j = 0; j < userInputArray.length; j++) {
      twoByTwo[counter].push(userInputArray[j]);
      if (counter === Math.ceil(squareRoot) - 1) {
        counter = 0;
      } else {
        counter += 1;
      }
    }
  console.log(twoByTwo);
}

//User Logic
$(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val();
    var outputString = cryptosquare(userInput);
    $("#output p").text(outputString);
    $("#output").show();
  });
});

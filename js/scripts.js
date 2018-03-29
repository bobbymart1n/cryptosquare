function cryptosquare(string) {
  var userInputArray = string.split("");
  var userOutput = userInputArray.join("");
  var twoByTwo = [];
  var squareRoot = Math.sqrt(string.length);
  if(squareRoot % Math.round(squareRoot) === 0) {
    for (var i = 0; i < squareRoot; i++) {
      twoByTwo.push([]);
    }
    for(var j = 0; j < userInputArray.length; j++) {
      if(j === 0 || j === 2) {
        twoByTwo[0].push(userInputArray[j]);
      } else if(j === 1 || j === 3) {
        twoByTwo[1].push(userInputArray[j]);
      }
    }
  }
  console.log(twoByTwo);
}

function userInputFunction(){

var userInput = prompt("Where do you live...enter 1: United States of America, 2: Another part of the World");


if(userInput == 1){
  var userAnswerF = prompt("Enter the temperature in Fahrenheit");
  convertTempF(userAnswerF)

  console.log("The temperature in Celius at your current location is " + convertTempF(userAnswerF).toFixed(0));
  document.getElementById("demo").innerHTML=("The temperature in Celius at your current location is " + convertTempF(userAnswerF).toFixed(0));


  } else if (userInput == 2) {
    var userAnswerC = prompt("Enter the temperature in Celius");
    convertTempC(userAnswerC)

    console.log("The temperature in Fahrenheit at your current location is " + convertTempC(userAnswerC).toFixed(0));
    document.getElementById("demo1").innerHTML=("The temperature in Fahrenheit at your current location is " + convertTempC(userAnswerC).toFixed(0));
  }

  function convertTempF(userAnswerF) {
    return (userAnswerF-32)*(5/9);
  }

  function convertTempC(userAnswerC) {
    return ((userAnswerC*(9/5))+(32));
  }
}

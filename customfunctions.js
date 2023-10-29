
var prompt = require('prompt-sync')();
var oddEvenChecker = function () {
//  for (let i = 0; i <= numberOfTimes; i++) {
    let currentNumber = Number(prompt("please enter a number to check if odd or even :  "));
    if (currentNumber % 2 === 0){
        return console.log(currentNumber, 'IS AN EVEN NUMBER')
    } if (currentNumber % 2 != 0) {
        return console.log( `${currentNumber} IS AN ODD NUMBER`)
     };
// }
  }

  module.exports = oddEvenChecker;

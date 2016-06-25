/**
 * Created by Denislav on 18.6.2016 г..
 * Write a function that reverses the digits of given decimal number. Example: 256  652
 */

var number = parseInt(prompt("Enter number", "0"), 10);
var numberString = number.toString();
var result = reverseDigit(numberString);

/**
 * Reverses the digits of given decimal number
 * @param {String} number
 * @return {String}
 */
function reverseDigit(number){
    return number.split("").reverse().join("");
}

console.log(result);
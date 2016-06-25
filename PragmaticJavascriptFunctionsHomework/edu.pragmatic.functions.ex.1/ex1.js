/**
 * Created by Denislav on 18.6.2016 г..
 * Write a function that returns the last digit of given integer as an English word. Examples: 512  "two", 1024  "four", 12309  "nine"
 */


var number = parseInt(prompt("Enter number", "0"), 10);
var result = getLastDigit(number);
/**
 * Returns the last digit of given integer as an English word
 * @param {Integer} number
 * @return {String}
 */
function getLastDigit(number) {

    var x = Math.abs(number) % 10;
    switch (x) {
        case 0:
            return 'Zero';
        case 1:
            return 'One';
        case 2:
            return 'Two';
        case 3:
            return 'Three';
        case 4:
            return 'Four';
        case 5:
            return 'Five';
        case 6:
            return 'Six';
        case 7:
            return 'Seven';
        case 8:
            return 'Eight';
        case 9:
            return 'Nine';
        default:
            return '';
    }
}

console.log(result);

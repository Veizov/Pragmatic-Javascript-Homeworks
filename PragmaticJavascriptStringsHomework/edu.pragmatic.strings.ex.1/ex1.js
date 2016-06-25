/**
 * Created by Denislav on 24.6.2016 г..
 * Write a JavaScript function reverses string and returns itExample: "sample"  "elpmas".
 */

var text = prompt("Enter string");
/**
 * Reverses string
 * @param {String} string
 * @return {String}
 */
function reverseString(string) {
    var reversedString = string.split("").reverse().join("");
    return reversedString;

}


reverseString(text);
/**
 * Created by Denislav on 24.6.2016 г..
 * Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).
 */


var string = prompt("Enter text");
var substring = prompt("Enter substring")


/**
 * Finds how many times a substring is contained in a given text
 * @param {String} text
 * @param {String} word
 * @return {Integer}
 */
function findOccurence(text, word) {
    var newText = text.toLowerCase();
    var newWord = word.toLowerCase();
    return newText.split(newWord).length-1;
}

console.log(findOccurence(string,substring));
/**
 * Created by Denislav on 24.6.2016 г..
 * Write a function that replaces non breaking white-spaces in a text with &nbsp;
 */


var text = ' Hello,how are you? ';
var symbol = '&nbsp';

/**
 * Replaces non breaking white-spaces in a text with &nbsp;
 * @param {String} text
 * @return {String}
 */
function replaceWhiteSpaces(text, symbol) {
    var newText = '';
    for(var index in text){
        if (text[index] == ' ')
            newText += symbol;
        else
            newText += text[index];
    }
    return newText;
}

console.log(text);
console.log(replaceWhiteSpaces(text,symbol))
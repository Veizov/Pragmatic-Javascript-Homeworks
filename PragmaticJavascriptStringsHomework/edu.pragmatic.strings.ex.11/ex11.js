/**
 * Created by Denislav on 25.6.2016 г..
 */


var text = 'Hello {0} {1}!';
var array = ['Denislav','Veizov'];

/**
 * Extracts from a given text all palindromes
 * @param {String} text
 * @param {Array} wordsArray
 * @return {string}
 */
function stringFormat(text,wordsArray)
{
    var newText = "";
    var beggining = 0;
    var index = text.indexOf("{");
    while (index>-1) {
        var number = parseInt(text.substr(index + 1, 1));
        newText+= text.substring(beggining, index - 1) + " ";
        newText+= wordsArray[number] + " ";
        beggining = index + 3;
        index = text.indexOf("{",index+1);
    }
    return newText;
}

console.log(stringFormat(text,array));
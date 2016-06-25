/**
 * Created by Denislav on 25.6.2016 г..
 * Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".
 */


var text = "Wow ! Mom,what is this ?";



/**
 * Extracts from a given text all palindromes
 * @param {String} text
 * @return {Array}
 */
function findPolindromes(text) {
    var arrayPolindromes =[];
    var string = "";
    text = text.toLowerCase();
    text = text.replace(".", " ").replace("!", " ").replace("?", " ").replace(",", " ");
    var wordsArr = text.split(" ");
    for (var i = 0; i < wordsArr.length; i++) {
        string = "";
        for (var j = wordsArr[i].length-1; j >=0 ; j--) {
            string+=wordsArr[i][j];
            console.log(string)
        }
        if (string == wordsArr[i]) {
            arrayPolindromes.push(wordsArr[i]);
        }
    }

    return arrayPolindromes;
}


console.log(findPolindromes(text));
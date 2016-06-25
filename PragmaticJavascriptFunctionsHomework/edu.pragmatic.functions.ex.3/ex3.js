/**
 * Created by Denislav on 18.6.2016 г..
 Write a function that finds all the occurrences of word in a text
 The search can case sensitive or case insensitive
 Use function overloading
 */
var text = prompt("Enter text");
var word = prompt(('Enter word'));
/**
 *Finds all the occurrences of word in a text ignore case
 * @param {String} text
 * @param {String} word
 * @return {Integer} count
 */
function findAllOccurrencesIgnoreCase(text, word) {
    var array = text.split(/[\s]/);
    var count = 0;
    for(var index in array){
        if(array[index].toUpperCase() === word.toUpperCase()){
            count++;
        }
    }
    return count;
}
/**
 * Finds all the occurrences of word in a text
 * @param {String} text
 * @param {String} word
 * @return {Integer} count
 */
function findAllOccurrences(text, word) {
    var array = text.split(/[\s]/);
    var count = 0;
    for(var index in array){
        if(array[index] === word){
            count++;
        }
    }
    return count;
}

console.log('Words ignore case : '+findAllOccurrencesIgnoreCase(text,word))
console.log('Words ignore case : '+findAllOccurrences(text,word));
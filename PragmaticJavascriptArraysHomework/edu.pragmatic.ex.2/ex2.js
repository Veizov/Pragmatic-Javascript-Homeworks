/**
 * Created by Denislav on 18.6.2016 г..
 * Дадени са текст и списък от думи, разделени със запетайка. Списъкът описва думи, които са нецензурни и не трябва да се съдържат в текста.
 * Напишете програма, която замества всички нецензурни думи от текста със звездички. Например ако имаме текста "Какъв хикс дириш тука бе менте?"
 * и списък с нецензурни думички "менте, хикс", програмата трябва да го преработи така: "Какъв **** дириш тука бе *****?".
 */

var text = prompt("Enter text ");
var textArray = text.split(' ');
var words = prompt("Enter censured words");
var wordsArray = words.split(' ');

for (var i =0; i < textArray.length;i++){
    for (var s =0; s < wordsArray.length; s++){
        if(textArray[i] === wordsArray[s]){
            var censured = '';
            for (let c = 0; c < wordsArray[s].length; c++){
                censured+= '*';
            }
            textArray.splice(i,1,censured);
        }
    }
}

var censuredText = textArray.toString().split(',').join(' ');
console.log(censuredText);

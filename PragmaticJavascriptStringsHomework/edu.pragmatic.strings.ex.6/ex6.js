/**
 * Created by Denislav on 24.6.2016 г..
 * Write a function that extracts the content of a html page given as text. The function should return anything that is in a tag, without the tags
 */


var text = "<html><head><title>Hello,</title></head><body><div>how <div>are</div>you</div>today ?</body></html>";
/**
 * Extracts the content of a html page given as text
 * @param {String} text
 * @return {String}
 */
function extractContent(text)
{
    var extractedText = "";
    var rightBraketIndex = text.indexOf(">");
    while (rightBraketIndex > -1 && rightBraketIndex != text.length - 1) {
        if (text[rightBraketIndex + 1] != "<") {
            var stringStart = text.substring(rightBraketIndex + 1,text.indexOf("<", rightBraketIndex + 1));
            extractedText+= stringStart +" " ;
        }
        rightBraketIndex = text.indexOf(">", rightBraketIndex+1);
    }
    return extractedText;
}

console.log(extractContent(text));
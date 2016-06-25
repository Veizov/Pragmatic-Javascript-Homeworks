/**
 * Created by Denislav on 24.6.2016 г..
 * You are given a text. Write a function that changes the text in all regions:
 <upcase>text</upcase> to uppercase.
 <lowcase>text</lowcase> to lowercase
 <mixcase>text</mixcase> to mix casing(random)
 */

var string = "<mixcase>Hello</mixcase>,<upcase>what</upcase>are<mixcase>you</mixcase><lowcase>doing</lowcase>?.";

/**
 * Changes the text in all regions:
 * @param {String} text
 * @return {String}
 */
function changeText(text) {
    var newText = text;
    newText = doLowCase(newText);
    newText = doUpcase(newText);
    newText = doMixCase(newText);

    return newText;
}

/**
 * Make text in <upcase>text</upcase> to uppercase.
 * @param {String} text
 * @return {String}
 */
function doUpcase(text)
{
    var start = text.indexOf("<upcase>");
    while (start>-1) {
        var substring = text.substring(start + 8, text.indexOf("</upcase>", start))
        var upperText = substring.toUpperCase();
        text = text.replace(substring, upperText);
        start = text.indexOf("<upcase>", start+1);
    }
    return text;
}

/**
 * Make text in <mixcase>text</mixcase> to mix casing(random)
 * @param {String} text
 * @return {String}
 */
function doMixCase(text) {
    var start = text.indexOf("<mixcase>");
    while (start > -1) {
        var substring = text.substring(start + 9, text.indexOf("</mixcase>", start));
        var mixedText = substring;
        for (var i = 0; i < mixedText.length ; i++) {
            if(i%2==0)
                mixedText = mixedText.replace(mixedText[i],mixedText[i].toUpperCase())
            else
                mixedText = mixedText.replace(mixedText[i], mixedText[i].toLowerCase())
        }
        text = text.replace(substring, mixedText);
        start = text.indexOf("<mixcase>", start + 1);
    }
    return text;
}

/**
 * Make text in <lowcase>text</lowcase> to lowercase
 * @param {String} text
 * @return {String}
 */
function doLowCase(text) {
    var start = text.indexOf("<lowcase>");
    while (start > -1) {
        var substring = text.substring(start + 9, text.indexOf("</lowcase>", start));
        var lowerText = substring.toLowerCase();
        text = text.replace(substring, lowerText);
        start = text.indexOf("<lowcase>", start + 1);
    }
    return text;
}

console.log(changeText(string));
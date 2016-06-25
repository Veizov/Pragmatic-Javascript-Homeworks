/**
 * Created by Denislav on 25.6.2016 г..
 * Write a function for extracting all email addresses from given text. All substrings that match the format <identifier>@<host>…<domain> should be recognized as emails.
 * Return the emails as array of strings.
 */
var text = "My personal emails denislavveizov@abv.bg and denislavveizov@gmail.bg ";
/**
 * Extract all email addresses from given text
 * @param {String} text
 * @return {Array}
 */
function extractEmails(text) {
    var emailArray = [];
    var index = text.indexOf("@");
    while (index > -1) {
        if (text[index-1]!=" " && text[index+1]!=" ") {
            var identifier = text.substring(text.lastIndexOf(" ", index - 1), index);
            var host = text.substring(index + 1, text.indexOf(".", index + 1));
            var domain = text.substring(text.indexOf(".", index + 1) + 1, text.indexOf(" ", text.indexOf(".", index + 1) + 1));
            var email = identifier + "@" + host + "." + domain;
            emailArray.push(email);
            index = text.indexOf("@",index+1);
        }
    }

    return emailArray;
}

console.log(extractEmails(text));
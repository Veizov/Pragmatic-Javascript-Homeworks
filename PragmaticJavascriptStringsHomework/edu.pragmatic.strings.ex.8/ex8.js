/**
 * Created by Denislav on 24.6.2016 г..
 * Write a JavaScript function that replaces in a HTML document given as string all the tags <a href="…">…</a> with corresponding tags [URL=…]…/URL].
 */
var text = "<p>Visit <a href='https://github.com'></a> to upload your homework</p>";


/**
 * Parses an URL address given in the format: [protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements. Return the elements in a JSON object.
 * @param {String} text
 * @return {String}
 */
function replaceIt(text) {
    var txt = text;
    var openTag = "<a href=";
    var closeTag = "<\/a>";
    txt = txt.replace(openTag, "[URL=");
    txt = txt.replace(closeTag, "[/URL]");
    return txt;
}

console.log(replaceIt(text));
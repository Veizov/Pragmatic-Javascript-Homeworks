/**
 * Created by Denislav on 24.6.2016 г..
 * Write a script that parses an URL address given in the format: [protocol]://[server]/[resource]
 and extracts from it the [protocol], [server] and [resource] elements. Return the elements in a JSON object.
 */


var url = "https://mail.google.com/mail/u/0/#inbox"



/**
 * Parses an URL address given in the format: [protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements. Return the elements in a JSON object.
 * @param {String} url
 * @return {{Protocol: string, Server: string, Resource: string}}
 */
function parseURL(url) {
    var protocol = url.substring(0, url.indexOf(":"));
    var server = url.substring(url.indexOf(":") + 3, url.indexOf("/", url.indexOf(":") + 3));
    var resource = url.substr(url.indexOf("/", url.indexOf(":") + 3) + 1)
    var urlJson = { "Protocol": protocol, "Server": server, "Resource": resource };
    return urlJson;
}


console.log(parseURL(url));
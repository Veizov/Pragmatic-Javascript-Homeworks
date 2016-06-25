/**
 * Created by Denislav on 25.6.2016 г..
 * Write a function that creates a HTML UL using a template for every HTML LI. The source of the list should be an array of elements.
 * Replace all placeholders marked with –{…}–   with the value of the corresponding property of the object
 */


var template = '<strong>-{name}-</strong> <span>-{age}-</span>';

var people = [
    { name: 'Denislav', age: 21 },
    { name: 'Pesho', age: 20 },
    { name: 'Dumbledore', age: 150 },
    { name: 'Gosho', age: 30}];

/**
 * Replace all placeholders marked with –{…}–   with the value of the corresponding property of the object
 * @param {String} template
 * @param {Array} people
 * @return {string}
 */
function generateList(people, template) {

    var replacedArray = [];
    var row;

    for (var i = 0; i < people.length; i++) {
        row = template.replace(/[-{ }-]/g, '');
        for (var prop in people[i]) {
            row = row.replace(prop, people[i][prop]);
        }
        replacedArray.push(row);
    }

    var result = '<ul><li>';
    result += replacedArray.join('</li><li>');
    result += '</li></ul>';

    return result;
}

var test = generateList(people, template);

console.log(test);
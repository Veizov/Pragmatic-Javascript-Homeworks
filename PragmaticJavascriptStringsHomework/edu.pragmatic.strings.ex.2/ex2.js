/**
 * Created by Denislav on 24.6.2016 г..
 * Write a JavaScript function to check if in a given expression the brackets are put correctly.
 Example of correct expression: ((a+b)/5-d).
 Example of incorrect expression: )(a+b)).
 */

/**
 * Check if in a given expression the brackets are put correctly
 * @param {String} string
 * @return {boolean}
 */
function checkBrackets(string){
    var count = 0;
    for(var i in string){
        if(string[i] == '('){
            count ++;
        } else if(string[i] == ')') {
            count --;
        }
        if (count < 0)
            return false;
    }
    if(count > 0) return false;
    return true;
}
console.log(checkBrackets('( ( a + b ) / 12 – d )')); 
console.log(checkBrackets('( ( ) a + b ) / 213 – d )'));
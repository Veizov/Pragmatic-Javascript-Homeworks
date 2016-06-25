/**
 * Created by Denislav on 19.6.2016 г..
 * Write a function that counts how many times given number appears in given array.
 * Write a test function to check if the function is working correctly.
 */

var array = [1,2,3,4,5,1,7,5,7,8,20,76,78,23,45,65,23,45];
var number = 1;
var countAppears =2;

/**
 * Counts how many times given number appears in given array.
 * @param {array} array
 * @param {Integer} number
 * @return {Integer} count
 */
function countNumberAppears(array, number) {
var count = 0;
    for (var index in array){
        if(array[index] === number){
            count++;
        }
    }
    return count;
}


/**
 * Check if the function countNumberAppears() is working correctly.
 * @param {array} array
 * @param {Integer} number
 * @param {Integer} countAppears
 * @return {boolean}
 */
function testFunction(array,number,countAppears) {
    if(countNumberAppears(array,number) === countAppears)
        return true;
    else
        return false;
}

console.log(countNumberAppears(array,number));
console.log(testFunction(array,number,countAppears));
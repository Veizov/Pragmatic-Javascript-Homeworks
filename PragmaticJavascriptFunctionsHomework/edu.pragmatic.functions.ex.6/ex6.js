/**
 * Created by Denislav on 19.6.2016 г..
 * Write a function that checks if the element at given position in given array of integers is bigger than its two neighbors (when such exist).
 */

var array = [3,2,3,4,15,6,7,8,9,10];
 var  position = 4;
 /**
 * Checks if the element at given position in given array of integers is bigger than its two neighbors
 * @param {array} array
 * @param {Integer} position
 * @return {boolean}
 */
function isBigger(array,position) {
    var arrayLength = array.length;

    if(arrayLength < position)
        return false;
    else{
        var number = array[position];
        var leftNumber = array[position-1] ;
        var rightNumber = array[position+1];
        if(leftNumber != null && rightNumber != null){
            if(number > leftNumber && number > rightNumber)
                return true;
            else
                return false;
        }
        else
            return false;
    }
}
var isBiggerBoolean = isBigger(array,position);
/**
 * Created by Denislav on 21.6.2016 г..
 * Write a function that returns the index of the first element in array that is bigger than its neighbors, or -1, if there’s no such element.
     Use the function from the previous exercise
 */
    var arrays = [3,2,1,5,1,1,1,1,1,1];

/**
 * Returns the index of the first element in array that is bigger than its neighbors, or -1, if there’s no such element.
 * @param {array} array
 * @return {Integer} index
 */
function indexOfFirstBiggerNumber(array) {
    for(var index in array){
        if(index != 0 && index != array.length){
            if(isBigger(array,index))
                return index;
        }
    }
    return -1;
}


/**
 * Checks if the element at given position in given array of integers is bigger than its two neighbors
 * @param {array} array
 * @param {Integer} position
 * @return {boolean}
 */
function isBigger(array,position) {
    var arrayLength = array.length;
    if(arrayLength < position){
        return false;
    }
    else{
        var number = array[position];
        var leftNumber = array[Number(position)-1] ;
        var rightNumber = array[Number(position)+ 1];
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


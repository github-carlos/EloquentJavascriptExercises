
/**
 * 
 * @description Takes an array and returns a new array with elements reversed
 * @param {Array<any>} array An array that will be used to produce a new array containing reversed elements
 */
function reverseArray(array = []) {
    const reversedArray = [];

    for (let i = 0; i < array.length; i++) {
        reversedArray[i] = array[array.length - (i + 1)];
    }
    return reversedArray;
}

/**
 * @description Takes an array and modifies its value to be the reversed version
 * @param {Array<any>} array 
 */
function reverseArrayInPlace(array) {
    const arrayCopy = [];
    Object.assign(arrayCopy, array);
    for (let i = 0; i < array.length; i++) {
        array[i] = arrayCopy[arrayCopy.length - (i + 1)];
    }
}

const x = [1, 2, 3, 4, 5, 7, 8];
console.log(reverseArray(x));
// [ 8, 7, 5, 4, 3, 2, 1 ]
reverseArrayInPlace(x);
console.log(x)
// [ 8, 7, 5, 4, 3, 2, 1 ]
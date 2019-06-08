
/**
 * @description Given a start and an end number, returns an array based on that paramters
 * @param {Number} start Number that the array will begin with 
 * @param {Number} end Number that the array will end with
 * @param {Number} step Array will skip numbers  according to given step
 */
function range(start, end, step = 1) {

    if (!start || !end) {
        throw 'Start and End argument must be given.';
    }

    const rangeArray = [];

    for (let i = start; step < 0 ? i >= end : i <= end; i+= step) {
        rangeArray.push(i);
    }
    return rangeArray;
}

/**
 * @description Returns the sum of all elements in a array of numbers
 * @param {Array<Number>} numberArray An array of numbers
 */
function sum(numberArray) {
    let sum = 0;
    numberArray.reduce((previous, current) => {
        sum = previous + current;
        return sum;
    });
    return sum;
}
console.log(range(1, 10));
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

console.log(range(1, 10, 2));
// [ 1, 3, 5, 7, 9 ]

console.log(range(5, 2, -1));
// [ 5, 4, 3, 2 ]

console.log(sum(range(1, 10)));
// 55
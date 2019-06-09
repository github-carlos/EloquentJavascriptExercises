function flatterArray(array) {
    return array.reduce((previous, current) => {
        return previous.concat(current);
    }, []);
}

const array = [1, 2, 3, [4, 5, 6]];

const flattedArray = flatterArray(array);

console.log(flattedArray);
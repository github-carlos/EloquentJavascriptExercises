function arrayToList(array) {
    const list = {};

    let currentRest = list;
    for ([item, index] of array.entries()) {
        currentRest['value'] = item;
        currentRest['rest'] = index === array.length ? null : {};
        currentRest = currentRest['rest'];
    }
    return list;
}

function listToArray(list) {
    const array = [];

    let currentRest = list;
    while(currentRest) {
        array.push(currentRest.value);
        currentRest = currentRest.rest;
    }
    return array;
}

function prepend(element, list) {
    return {
        value: element,
        rest: list
    };
}

function nth(list, indexOfElement) {
    let element = null;
    let currentRest = list;
    for (let i = 0; currentRest && !element; i++) {
        if (i === indexOfElement)
            element = currentRest;
        else currentRest = currentRest.rest;
    }
    return element;
}

function recursiveNth(list, indexOfElement) {
    if (indexOfElement === 0)
        return list;
    else
        return recursiveNth(list.rest, indexOfElement -=1);
}

const x_array = [1, 2, 3];
const x_list = arrayToList(x_array);

console.log(x_list);
// { value: 1, rest: { value: 2, rest: { value: 3, rest: {} } } }

const y_list = {value: 66, rest: {value: 77, rest: {value: 200, rest: null}}};
const y_array = listToArray(y_list);

console.log(y_array);
// [ 66, 77, 200 ]

console.log(prepend(300, y_list));
// { value: 300, rest: { value: 66, rest: { value: 77, rest: [Object] } } }

console.log('Element:', nth(y_list, 2));
// Element: { value: 200, rest: null }
console.log('Element by recursive:', recursiveNth(y_list, 2));
// Element by recursive: { value: 200, rest: null }
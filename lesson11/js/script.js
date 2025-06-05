"use strict"

const arr = [1, 2, 3];

//так делать не рекомендуется
arr[10] = '3435';
console.log(arr);

const arrObj = {
    a: 1,
    1: 2,
    2: 3,
    abc: {
        xxx: [{}, {}],
        def: {

        }
    }
};

const b = 'b';

// arrObj.b = '1234';
// arrObj['b'] = '1234'; // тоже самое
arrObj[b] = '1234';

// console.log(arr[1]);
// console.log(arrObj.a);
console.log(arrObj['b']);
console.log(arrObj.b); // тоже самое

// const obj = {a: 1, b: 2};

const obj = {
    Anna: 500,
    'Alice': 800,
};

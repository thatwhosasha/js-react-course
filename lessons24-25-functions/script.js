"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage('Hello');
console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

// function expression
const logger = function() {
    console.log('Hello');
};

logger();

//arrow function

const calc = (a, b) => { return a + b};

console.log(calc(4, 5));

//25

const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);
// Типы данных в JS

"use strict"

let number = 4.6;

console.log(-4/0);// -Infinity
console.log('string' * 9); // NaN (Not a number)

const persone = "Alex";

const bool = true;

// console.log(something);

let und;
console.log(und); // undefiend

// Объект
const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

// console.log(obj.age);
console.log(obj["name"]); // тоже самое

// Массив - это частный случай объекта
let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1]);



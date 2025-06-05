"use strict";

//конкатенация строк
console.log('arr' + ' - object');
console.log(4 + ' - object');

let incr = 10,
    decr = 10;

// incr++; // оператор инкремента(постфиксный)
// decr--; // оператор декримента(постфиксный)

// ++incr; //префиксный
// --decr; //префиксный

console.log(++incr);
console.log(--decr);

//возвращает остаток
console.log(5%2); //1

// = - оператор присваивания
// == - оператор сравнения
// === - строгое сравнение(по типу данных)

console.log(2*4 == '8'); // true
console.log(2*4 === '8'); //false

// && - оператор 'и'
// || - оператор 'или'

const isChecked = true,
      isClose = false;

console.log(isChecked || isClose); // true

// ! - оператор отрицания

console.log(isChecked && !isClose); //true
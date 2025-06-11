//логическое 'и' - &&

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('Я сыт');
// } else {
//     console.log('Я не наелся');
// }

// console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries); // 0

// console.log(1 && 0); // 0
// console.log(1 && 5); // 5 - возвращает последнее значение которое было в выражении
// console.log(null && 1); // null - вернуло первое не правдивое выржание
// console.log(1 && 'fdsfsdfsfds'); // fdsfsdfsfds

// if (hamburger === 3 && fries) {
//     console.log('Все сыты');
// } else {
//     console.log('Мы уходим');
// }

// логическое 'или' - ||

// const hamburger = 3;
// const fries = 0;
// const cola = 0;

// if (hamburger || cola || fries) {
//     console.log('Все сыты');
// } else {
//     console.log('Мы уходим');
// }

// console.log(hamburger || cola || fries); // 3

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport); // done

//

// const hamburger = 3;
// const fries = 3 ;
// const cola = 0;
// const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Все сыты');
} else {
    console.log('Мы уходим');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets); // 2 

console.log(!0); // true

//

console.log( NaN || 2 || undefined );


console.log( NaN && 2 && undefined );


console.log( 1 && 2 && 3 );


console.log( !1 && 2 || !3 );

console.log( 25 || null && !3 );

console.log( NaN || null || !3 || undefined || 5);

console.log( NaN || null && !3 && undefined);

console.log( 5 === 5 && 3 > 1 || 5);


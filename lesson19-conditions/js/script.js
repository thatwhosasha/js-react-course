"use strict";

// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }



// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok');
// }

// //условный(тернарый оператор)
// (num === 50) ? console.log('Ok!') : console.log('Error'); 

const num = '50';

switch (num) {
    // в конструкции switch по дефолту всегда идет строгое соответствие
    case '49':
        console.log('Неверно');
        break;
    case '100':
        console.log('Неверно');
        break;
    case 50:
        console.log('Верно');
        break;
    default:
        console.log('Не в этот раз');
        break;
}
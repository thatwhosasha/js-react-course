for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j); 
    }
}

// *
// **
// ***
// ****
// *****
// ******

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
    for(let j = 0; j < i; j++) {
        result += '*'; 
    }
    result += '\n';
}
console.log(result);


first: for (let i = 0; i < 3; i++) { // "first: " - это метка
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if ( k === 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}

// решение задач
let i = 2;
while (i <= 16) {
    i++;
    if(i % 2 === 0) {
        continue;
    } else {
        if (i === 17) break;
        console.log(i);
    }
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

// const arrayOfNumbers = [];

// for (let i = 5; i <=10; i++) {
//     for (j = 0; j <=9; j++) {
//         arrayOfNumbers[j] = i;
//         console.log(arrayOfNumbers);
//         break;
//     }
// }

const arrayOfNumbers = [];
    
for (let i = 5; i <=10; i++) {
    for (j = 0; j <= 9; j++) {
        arrayOfNumbers[j] = i;
        console.log(arrayOfNumbers);
        break;
    }
}
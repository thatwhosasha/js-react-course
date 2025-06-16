//1

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for(let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}
console.log(result);

//2

const data = [5, 10, 'Shopping', 20, 'Homework'];

// data[0] = data[0] * 2;
// console.log(data[0]);
// console.log(typeof(''));
// console.log(typeof(data[2]));
for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) === typeof(1)) {
        data[i] = data[i] * 2;
    } else {
        data[i] = `${data[i]} - done`;
    }
}
console.log(data);

//3

const dataT = [5, 10, 'Shopping', 20, 'Homework'];
const resultT = [];
// console.log(dataT.length);

for (let i = 1; i <= dataT.length; i++) {
    resultT[i - 1] = dataT[dataT.length - i]
}
console.log(resultT);
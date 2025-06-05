"use strict"

// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

//Вся информация от пользователя приходит в виде string
// const answer = prompt("Вам есть 18?", "18");
// console.log(answer + 5);

const answers = [];

//команды по типу prompt, alert работают только в браузере

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

console.log(typeof(answers));
console.log(typeof(null)); //официально признная ошибка - выведет object

const category = 'toys';

console.log(`https://someurl.com/${category}/5`);

const user = 'Ivan';

alert(`Привет, ${user}`);
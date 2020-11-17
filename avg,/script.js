const answer1 = prompt('Введите год рождения');

console.log(answer1);

let re = /\s*,\s*/;
let numbers = answer1.split(re);

console.log(numbers);


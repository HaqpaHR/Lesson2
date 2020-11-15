const answer1 = prompt('Введите год рождения');

console.log(answer1);

let re = /\s*,\s*/;
let numbers = answer1.split(re);

console.log(numbers);

let num1 = parseInt(array(0));
let num2 = parseInt(array(1));
let num3 = parseInt(array(2));
let num4 = parseInt(array(3));
let num5 = parseInt(array(4));
let len = Number(length);

console.log((num1+num2+num3+num4+num5)/len);
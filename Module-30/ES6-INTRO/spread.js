const numbers = [23, 45, 66, 24, 43];
// console.log(numbers);
// console.log(...numbers);  
const max = Math.max(23, 99, 65, 21, 34);
const maxInArry = Math.max(...numbers)
// console.log(max, maxInArry);


const numbers2 = [343,...numbers,34];
numbers.push(55);
console.log(numbers);
console.log(numbers2);
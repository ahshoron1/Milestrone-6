const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
 const bigNumbers = numbers.filter(number => number > 20);
// const bigNumbers = numbers.map(number => number > 20);
const smallNumbers = numbers.filter(number => number < 20);

// console.log(bigNumbers, smallNumbers);
const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile phone', price: 150000, color: 'black'},
    {name: 'smart watch', price: 3000, color: 'black'},
    {name: 'water glass', price: 3, color:'white'}
] 
const exclusive = products.filter(product => product.price > 100);
const blacks = products.filter(product => product.color == 'black')
// console.log(blacks);

const blacks1 = products.find(product => product.color == 'black')
console.log(blacks1);

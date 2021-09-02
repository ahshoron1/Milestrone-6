const friend = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const fLengths = friend.map(friend => friend.length);
// console.log(fLengths);

const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile phone', price: 150000, color: 'black'},
    {name: 'smart watch', price: 3000, color: 'black'},
    {name: 'water glass', price: 3, color:'white'}
]
const productNames = products.map(product => product.name);
console.log(productNames);
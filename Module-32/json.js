// JavaScript Object Notation
//JSON
const user ={id:11, name:'Gorib Amir', job:'actor'};
const stringified = JSON.stringify(user)
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'halal Store',
    address: 'halal road',
    products:['laptop','Mobile', 'wtach'],
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
// console.log(shop)
console.log(shopStringified);
const shopParse = JSON.parse(shopStringified)
console.log(shopParse);
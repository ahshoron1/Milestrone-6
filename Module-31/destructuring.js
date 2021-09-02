 const fish = {
     id: 58,
     name:'King Hilsha',
     dress: 'silver',
     price: 10000,
     phone: '0171755555555',
     address: 'Chandpur'
 }
//  const phone = fish.phone;
//  const price = fish.price;
//  const dress = fish.dress;
//  const id = fish.id;


// Apply Destructuring Object
// const {phone, price, id, dress, name, address} = fish;
//  console.log(phone,price);
//  console.log(phone,price,dress);
//  console.log(phone,price);
//  console.log(phone,price,id);


const company = {
    name: 'GP', 
    ceo: { id: 1, name:'ajmol', food:'fuchka'},
    web: {work:'website development', employee:22, framework:'react'}
};
// const work = company.web.work;
// const framework = company.web.framework;
const {work, framework} = company.web;
const {food,id} = company.ceo;
console.log(work,framework,food,id);

const numbers = [4, 6, 8, 10];
const output = [];
const doubleOld = number => number * 2;
for(const number of numbers){
    const result = doubleOld(number);
    output.push(result);
}
// console.log(output);
// 1. loop through each element
// 2. for each element call the provided function
// 3. result for each element will be stored in an array
//  const output2 = numbers.map(doubleOld);
const output2 = numbers.map(x => x * 2);
 console.log(output2);
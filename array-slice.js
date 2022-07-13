const numbers=[1,2,3,4,5,6,7,8,9,10,21,27,87];
const numberSliced=numbers.slice(1,4);
//console.log(numberSliced);

//Splice
const numberSpliced=numbers.splice(1,4,1000000,11111111);
console.log(numberSpliced);
console.log(numbers);
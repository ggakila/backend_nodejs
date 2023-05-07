// Importing the lodash library and assigning it to the underscore variable.
const _ = require('lodash');

// Generate a random number between 10 and 99 using lodash and assign it to the rando1 variable
let rando1 = _.random(10, 99);

// Generate a random number between 1000 and 9999 using lodash and assign it to the rando2 variable
var rando2 = _.random(1000, 9999);

// Output the generated random numbers
console.log(rando1);
console.log(rando2);

// Define an array of integers named myArr.
let myArr = [1, 2, 3, 4, 5];

// Retrieve a random element from the myArr array using lodash and save it in the rando3 variable
let rando3 = _.sample(myArr);

// Shuffle the contents of the myArr array without modifying the original array and save it into a new array named newArr
let newArr = _.shuffle(myArr);

// Output the random integer selected earlier and the shuffled version of the myArr array
console.log(rando3);
console.log(newArr);

let arr2 = _.map(myArr, function(value){
    console.log(value);
    return value.toString();
})
console.log(arr2);
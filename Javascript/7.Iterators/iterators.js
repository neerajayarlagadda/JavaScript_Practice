//Higher order functions

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  }
  const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  // use name property to get original name of the function
  is2p2();
  console.log(is2p2.name);

  /*
.
Write a higher-order function, checkConsistentOutput(). 
This function should have two parameters: a function and a value. 
It should call the argument function with the value two times. 
If the callback function produces the same result twice, 
it should return the result of the function call, otherwise, 
it should return the string 'This function returned inconsistent results'
*/
const addTwo = num => num + 2; // addTwo is a function with num as parameter which returns num+2

const checkConsistentOutput = (func, val) => {
   let firstTry = func(val);   // checkConsistentOutput is an Higer order function with func which is a call back function and val as parameters
   let secondTry = func(val);
   if(firstTry === secondTry){
     return firstTry;
   } else{
     return 'This function returned inconsistent results';
   }
};

console.log(checkConsistentOutput(addTwo, 10));

//Iterators
/* .forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
.map() executes the same code on every element in an array and returns a new array with the updated elements.
.filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
.findIndex() returns the index of the first element of an array which satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
.reduce() iterates through an array and takes the values of the elements and returns a single value.
All iterator methods takes a callback function that can be pre-defined, or a function expression, or an arrow function.*/



//using forEach ............ .forEach() will execute the same code for each element of an array.
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
// Iterate over fruits below
fruits.forEach(fruitItem =>
console.log('I want to eat a ' + fruitItem));  

//.map method ..........When .map() is called on an array, it takes an argument of a callback function and returns a new array!
/* Use .map() to create a new array that contains the first character of each string in the animals array. Save the new array to a const variable named secretMessage. */

const animalsDen = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animalsDen.map(animals => {
return animalsDen[0];
});

console.log(secretMessage.join(''));

/* Use .map() to divide all the numbers in bigNumbers by 100. 
Save the returned values to a variable declared with const called smallNumbers */
const bigNumbers = [100, 200, 300, 400, 500];

const numbers = bigNumbers.map(bigNumbers => {
  return bigNumbers/100;
});

console.log(numbers);

//.filter() method

/*.filter() returns an array of elements after filtering out certain elements 
from the original array. The callback function for the .filter() method
 should return true or false depending on the element that is passed to it. 
 The elements that cause the callback function to return true are added to the new array. */

//Call the .filter() method on randomNumbers to return values that are less than 250.
const randomNumbers = [375, 200, 3.14, 7, 13, 852];


const smallNumbers = randomNumbers.filter(randomNumbers => {
  return randomNumbers < 250;
});
console.log(smallNumbers);


//Invoke .filter() on the favoriteWords array to return elements that have more than 7 characters.
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(favoriteWords => {
  return favoriteWords.length > 7;
});
console.log(longFavoriteWords);

//.findIndex() method
/*Calling .findIndex() on an array will return the index of the first element 
that evaluates to true in the callback function.*/

/* Invoke .findIndex() on the the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.*/
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});
console.log(foundAnimal, animals[foundAnimal]);

/*Call .findIndex() on the animals array return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS.*/

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's';
});
console.log(startsWithS, animals[startsWithS]);


//.reduce() method

/* The .reduce() method returns a single value after 
iterating through the elements of an array, 
thereby reducing the array. */

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) =>{
  console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
},10); 
// The .reduce() method can also take an optional second parameter to set an initial value for accumulator.. here 10
console.log(newSum);


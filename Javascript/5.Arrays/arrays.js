
//Accessing array elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);

// Updating elements

let groceries = ['bread', 'tomatoes', 'milk'];
groceries[1] = 'avocados';

console.log(groceries);

//Arrays with let and const

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);
condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);
condiments = ['Spoon'];
console.log(utensils);

// .length property

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

//.push() method
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('cook meal', 'dusting');
console.log(chores);

//.pop() method
const houseChores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();
console.log(houseChores);

// more array methods

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift(); // deletes element from the begining of the array

groceryList.unshift('popcorn');//adds element to the begining of the array
 //slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).

 console.log( groceryList.slice(1, 4));
console.log(groceryList);
 
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);


//Arrays and Functions
/* when you pass an array into a function, if the array is mutated inside the function, 
that change will be maintained outside the function as well.
 You might also see this concept explained as pass-by-reference 
 since what we’re actually passing the function is a reference to
  where the variable memory is stored and changing the memory. */
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr){
  newArr.pop();
}

removeElement(concept);
console.log(concept);


// Nested Arrays

const numberClusters = [[1, 2], [3, 4], [5, 6]];

const target = numberClusters[2][1];
console.log(numberClusters);
console.log(target);

//Array methods

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
//array method to remove the last string

console.log(secretMessage.length);
secretMessage.pop();
console.log(secretMessage.length);

//array method to add words as seperate strings to the end of the array
secretMessage.push('to', 'Program');
console.log(secretMessage);

//change the word by accessing the index and replacing it
secretMessage[7]= 'right';
console.log(secretMessage);

//method to remove first string of the array
secretMessage.shift();
console.log(secretMessage);

//method to add the string to the beginning of the array
secretMessage.unshift('Programming');
console.log(secretMessage);

//method to remove the strings and replace with new string
secretMessage.splice(6,6,'know');
console.log(secretMessage);
 
 //method to print array as a sentence           
console.log(secretMessage.join(' '));
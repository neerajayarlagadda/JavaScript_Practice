//For loop /nested for loop

// Write your code below
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};
console.log(mutualFollowers);

///While loop

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard ;
while(currentCard !== 'spade')
      {
       currentCard = cards[Math.floor(Math.random() *4)];
        console.log(currentCard);
      }



// Do -while loop

let cupsOfSugarNeeded = 5;
let cupsAdded = 0;

do
  {
    cupsAdded += 1;
    console.log(cupsAdded);
  }while(cupsAdded < cupsOfSugarNeeded);


  //Break statement in loops
  const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for(let i= 0; i< rapperArray.length; i++)
  {
    console.log(rapperArray[i]);
    if(rapperArray[i] === 'Notorious B.I.G.')
      break;
  }

console.log("And if you don't know, now you know.");

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/*Whale Talk
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.
There are a few simple rules for translating text to whale language:
There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.*/

let input ='turpentine and turtles';
const vowels = ['a','e','i','o','u'];

let resultArray =[];

for(let i=0; i<input.length; i++){
  for (let j=0; j<vowels.length; j++){
    if(input[i] === vowels[j]){
      resultArray.push(input[i]);
    }
    
    }
  if(input[i] === 'e' || input[i] === 'u' ){
      resultArray.push(input[i]);
  }
};
console.log(resultArray.join(''));

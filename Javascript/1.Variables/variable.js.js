//Creating a variable using let 

let changeMe = true;
changeMe = false;
console.log(changeMe);

//Creating a constant using const
const entree = "Hello ";
console.log(entree);
//unassigned constant values will give an error

//Using Mathematical operators

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

//Increment Decrement operator
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
lostDollar--;

console.log(gainedDollar,lostDollar);

//String Concatination with Variables
let favoriteAnimal = 'rabbit';
console.log('My favorite animal : '+ favoriteAnimal);

//String interpolation

const myName = 'Neeraja';
const myCity = 'Hyderabad';
console.log(`My name is ${myName}. My favorite city is ${myCity}`);

//Type of Operator
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

//Kelvin Weather 
const kelvin = 293; // set kelvin value to 293 as constant

const celsius = kelvin-273; // celsius is 293-273
let fahrenheit = Math.floor(celsius*(9/5)+32); // caluclate fahrenheit using the equation F=C*(9/5)+32
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = Math.floor(celsius *(33/100));
console.log(`The temperature is ${newton} degrees Newton.`);


//Dog Year Caluclator
const myAge = 22; // set age as constant
let earlyYears = 2; 
earlyYears *= 10.5; // multiply earlyYears by 10.5

let laterYears = myAge-2; // 20-2
laterYears *= 4; //Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. 

let myAgeInDogYears = earlyYears+laterYears;

const name = 'PRIYA'.toLowerCase(); // convert the uppercase string to lower case using built in method
console.log(`My Name is ${name}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);
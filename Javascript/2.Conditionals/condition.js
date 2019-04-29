
//if-else
let sale = true;
if(sale) {
  console.log('Time to buy!');
}
else{
  console.log('Time to wait for a sale.');
}

//conditional operator
let hungerLevel = 7;
if(hungerLevel > 7){
  console.log('Time to eat!');
}
else{
  console.log('We can eat later!');
}

//logical operators
let mood = 'sleepy';
let tirednessLevel = 6;

if(mood === 'sleepy' && tirednessLevel > 8){
  console.log('time to sleep');    
  }
else{
  console.log('not bed time yet');
}

//truthy / Falsy

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

let tool = '';

// Use short circuit evaluation to assign  writingUtensil variable below:

let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

//Ternary Operator

let isLocked = false;

isLocked ?
  console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');


let isCorrect = true;

isCorrect ?
  console.log('Correct!') : console.log('Incorrect!');

let Phrase = 'Love That!';

Phrase === 'Love That!' ?
  console.log('I love that!') : console.log("I don't love that!");


  //if else-if
  let season = 'summer';

  if (season === 'spring') {
    console.log('It\'s spring! The trees are budding!');
  } else if (season === 'winter') {
    console.log('It\'s winter! Everything is covered in snow.');
  }else if (season === 'fall') {
    console.log('It\'s fall! Leaves are falling!');
  }else if (season === 'summer') {
    console.log('It\'s sunny and warm because it\'s summer!');
  }else {
    console.log('Invalid season.');
  }


  //switch case
  let athleteFinalPosition = 'second place';
switch(athleteFinalPosition)
  {
    case 'first place':
             console.log('You get the gold medal!');
     break;  
    case 'second place':
              console.log('You get the silver medal!');
       break;
    case 'third place':
              console.log('You get the bronze medal!');
       break;
     default:
            console.log('No medal awarded.');
       break;
  }

  // eight Ball Game .. Generates random number between 0-7 and displays a string based on the number
  let userName = '';
userName ? console.log(`Hello, ${userName}`) : console.log('Hello!');

let userQuestion = "what do you want to do?";
console.log(`The user asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random()*8);
let eightBall = '';
switch (randomNumber)
  {
   
    case 0:
      eightBall = 'It is certain';
      break;
    case 1:
      eightBall = 'It is decidedly so';
      break;
    case 2:
      eightBall = 'Reply hazy try again';
      break;
    case 3:
      eightBall = 'Cannot Predict now';
      break;
    case 4:
      eightBall = 'Do not count on it';
      break;
    case 5:
      eightBall = 'My sources say no';
      break;
    case 6:
      eightBall = 'Outlook not so good';
      break;
    case 7:
      eightBall = 'Signs point to yes';
      break;
    default:
      eightBall = 'None';
      break;
  }
console.log(`The eight ball answered : ${eightBall}`);

/* Race Day
Codecademy’s annual race is just around the corner! This year, we have a lot of participants. You have been hired to write a program that will register runners for the race and give them instructions on race day.
As a timeline, registration would look like this: registration-timeline
Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.
Race number:
Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:
Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).*/
let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegisteredRunner = false;
const runnerAge = 25;

if(earlyRegisteredRunner && runnerAge > 18){
  raceNumber += 1000;
  console.log(`Your race will be at 9:30 am. Your Race number is ${raceNumber}`);
}else if(!earlyRegisteredRunner && runnerAge > 18){
  console.log(`Your race will be at 11:00 am. Your Race number is ${raceNumber}`);
}else if( runnerAge < 18){
  console.log(`Your race will be at 12:30 pm. Your Race number is ${raceNumber}`);
}else {
  console.log(`Please see the Registration Desk.`);
}
/*Rock, Paper, or Scissors
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.
The possible outcomes are:
Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:
Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.*/

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' )
      return userInput;
    else
      console.log('Error!');
  };
  console.log(getUserChoice('Rock'));
  console.log(getUserChoice('Pen')); // prints Error! / undefined
  
  const getComputerChoice = () => {
    switch (Math.floor(Math.random()*3)){ //gets a random variable between 0 and 2
      case 0:
        return 'rock';
      case 1: 
        return 'paper';
      case 2:
        return 'scissors';
      default:
        break;
    };
  } ;
  console.log(getComputerChoice()); //prints random numbers
  console.log(getComputerChoice());
  console.log(getComputerChoice());
  console.log(getComputerChoice());
  console.log(getComputerChoice());
  
  const determineWinner = (userChoice,computerChoice) => {
    if(userChoice === computerChoice){
      return('Game is a Tie');
    } else if(userChoice === 'rock'){
              if(computerChoice === 'paper'){
            return('Computer won');
              }else{
           return('User won');
         }
    } else if(userChoice === 'paper'){
              if(computerChoice === 'scissors'){
            return('Computer won');
              } else{
           return('User won');
          }
    }else if(userChoice === 'scissorsr'){
              if(computerChoice === 'rock'){
            return('Computer won');
              } else{
           return('User won');
          }
    }
  };
  
     console.log(determineWinner('paper','scissors'));
     console.log(determineWinner('paper','paper'));
     console.log(determineWinner('paper','rock'))
  
  const playGame =() => {
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    console.log(`users choice is ${userChoice} and computer choice is ${computerChoice}`);
   console.log(determineWinner(userChoice,computerChoice));
  }
  
  playGame();  



  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /* Sleep Debt Calculator
Did you know that giraffes sleep 4.6 hours a day? We humans need more than that.
 If we don’t sleep enough, we accumulate sleep debt. 
 In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.
The program will determine the actual and ideal hours of sleep for each night of the last week.
Finally, it will calculate, in hours, how far you are from your weekly sleep goal.*/

const getSleepHours = day => {
    switch (day.toLowerCase()){
        case 'monday':
        return 8;
        case 'tuesday':
        return 7;
        case 'wednesday':
        return 9;
        case 'thursday':
        return 5;
        case 'friday':
        return 8;
        case 'saturday':
        return 4;
        case 'sunday':
        return 10;
        default :
        break;      
    };
  };
  
  
  //function using implicit return i.e., it returns the total sleep hours 
  //Note: we didnt include any { } or return statement
  const getActualSleepHours = () => 
                    getSleepHours('monday') +
                    getSleepHours('tuesday') +
                    getSleepHours('wednesday') +
                    getSleepHours('thursday') +
                    getSleepHours('friday') +
                    getSleepHours('saturday') +
                    getSleepHours('sunday') ;
                    
  
  console.log(getActualSleepHours());
  
  const getIdealSleepHours = (idealHours) => idealHours*7;
  
  
  console.log(getIdealSleepHours(6));
  
  const caluclateSleepDebt = () => {
    
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(6);
    if(actualSleepHours === idealSleepHours){
      console.log('You got the perfect amount of sleep');
    }else if(actualSleepHours > idealSleepHours){
      console.log('You got more sleep than needed');
    }else{
      console.log('You should get some rest.');
    }
  };
  caluclateSleepDebt();
  
  
  
  
  
  
  













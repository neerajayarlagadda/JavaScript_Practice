// Objects

let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
  };


  ///using dot notation on an object!

  let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  let crewCount = spaceship.numCrew;
  let planetArray = spaceship.flightPath;
  console.log(crewCount , planetArray);

  // using bracket notation on an object

  let spaceShip = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  // Write your code below
  let isActive = spaceShip['Active Mission'];
  console.log(spaceShip['Active Mission']);

  // Methods

  let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
let alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
}
alienShip.retreat();
alienShip.takeOff();

// Nested Objects

let spaceships = {
    passengers: [{name: 'Space Dog'}], 
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      backup: {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  let capFave = spaceships.crew.captain['favorite foods'][0];
  
  let firstPassenger = spaceships.passengers[0];
  
  console.log(capFave , firstPassenger);
  

  // Pass by reference

  let space = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  let greenEnergy = ship =>{
    ship['Fuel Type'] = 'avocado oil';
  };
  
  let remotelyDisable = ship => {
    ship.disabled = true;
  };
  greenEnergy(space);
  remotelyDisable(space);
  console.log(space);

  //for - in ....iterating through objects with the for...in syntax .
  let ship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

for (let crewMember in ship.crew) {
  console.log(`${crewMember}: ${ship.crew[crewMember].name}`)
};

for (let crewMember in ship.crew) {
  console.log(`${ship.crew[crewMember].name}: ${ship.crew[crewMember].degree}`)
};


/// Using this Keyword

const robots = {
    model : '1E78V2',
    energyLevel : 100,
    provideInfo() {
      return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
    }
  };
  console.log(robots.provideInfo());

  // Getters ---Getters are methods that get and return the internal properties of an object.
  const robot1 = {
    _model: '1E78V2',
    _energyLevel: 100,
   get energyLevel() {
     if(typeof(this._energyLevel) === 'number'){
       return `My current energy level is ${this._energyLevel}`;
     } else{
       return 'System malfunction: cannot retrieve energy level';
     }
   } 
  };
  console.log(robot1.energyLevel);

  // Setters: Along with getter methods, we can also create setter methods which reassign values of existing properties within an object.
  const robo = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num){
      if(typeof num === 'number' && num >= 0){
       this._numOfSensors = num;
      } else{
        console.log('Pass in a number that is greater than or equal to 0')
      }
    }
  };
  
  robo.numOfSensors = 100;
  console.log(robo.numOfSensors);
  
  
/*Factory functions - A factory function is a function that returns an object and can be reused to
 make multiple object instances. Factory functions can also have parameters allowing us to 
 customize the object that gets returned.*/

 const robotFactory = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep() {
        console.log('Beep Beep');
      }
    }
  };
  const tinCan = robotFactory('P-500', true);
   tinCan.beep();

   // property value short-hand 

   const roboFactory = (model, mobile) =>{
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  };
  const newRobot1 = roboFactory('P-501', false)
  console.log(newRobot1.model)
  console.log(newRobot1.mobile)


  /* destructured Assignment
 In destructured assignment we create a variable with the name of an object’s 
 key that is wrapped in curly braces { } and assign to it the object. */

 const robos = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Beep');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  const { functionality } = robos;
  
  functionality.beep();


  //Built-in Object Methods


  /*he Object.keys() method returns an array of a given object's own property names,
   in the same order as we get with a normal loop. syntax:Object.keys(obj)
  
  
  The Object.entries() method returns an array of a given object's own enumerable 
  string-keyed property [key, value] pairs, in the same order as that provided by a
  for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well). 
  The order of the array returned by Object.entries() does not depend on how an object is defined. 
  If there is a need for certain ordering then the array should be sorted first like
 Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));. syntax :Object.entries(obj)


  
  The Object.assign() method is used to copy the values of all enumerable own
  properties from one or more source objects to a target object. It will return the target object.
  syntax:Object.assign(target, ...sources) */

  const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)
console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);


/*Meal Maker
As a frequent diner, you love trying out new restaurants and experimenting with different foods.
 However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big,
  and you want an easier way to be able to figure out what you are going to eat.

In this project, you’ll use JavaScript to randomly create a three-course meal based on what 
is available on a menu. We’ll keep running it until we’re satisfied with the generated meal! */

const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    
    get appetizers() {
      return this._appetizers;
    },
    set appetizers(appetizersIn) {
      this._appetizers = appetizersIn;
    },
    get mains() {
      return this._mains;
    },
    set mains(mainsIn) {
      this._mains = mainsIn;
    },
    get desserts() {
      return this._desserts;
    },
    set desserts(dessertsIn) {
      this._desserts = dessertsIn;
    },
  },
  
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    };
},
  
  ///===============================================================
  
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    
    this._courses[courseName].push(dish);
  },
  
  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice}.`;
  },
};

menu.addDishToCourse('appetizers', 'Ceasar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Prawn Coctail', 4.25);
menu.addDishToCourse('appetizers', 'Garlic Bread', 3.50);
menu.addDishToCourse('mains', 'Lasagna', 9.75);
menu.addDishToCourse('mains', 'Ribeye Steak', 14.95);
menu.addDishToCourse('mains', 'Fish & Chips', 12.95);

menu.addDishToCourse('desserts', 'Cheese Cake', 4.50);
menu.addDishToCourse('desserts', 'Creme Brule', 4.25);
menu.addDishToCourse('desserts', 'Cheese Board', 3.25);

let meal = menu.generateRandomMeal();

console.log(meal);
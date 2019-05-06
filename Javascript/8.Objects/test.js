

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



  /*players and game objects.*/
  const team = {
    _players : [
            {firstName: 'Mike',lastName: 'James',age: 30},
            {firstName: 'Pablo',lastName: 'Sanchez',age: 45},
            {firstName: 'jim',lastName: 'Smith',age: 35}   
             ],
    _games : [
             {opponent: 'Broncos', teamPoints: 42,opponentPoints: 27},
             {opponent: 'Risers', teamPoints: 32,opponentPoints: 15},
             {opponent: 'challengers', teamPoints: 20,opponentPoints: 40}
             ],
    get players(){
      return this._players;
    },
 
    get games(){
       return this._games;
    },
    addPlayer(firstName, lastName, age){
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
    },
   addGame(opponentName, teamPoints, opponentPoints){
   let game = {
              opponent: opponentName, 
              teamPoints: teamPoints,
              opponentPoints: opponentPoints
             };
       this.games.push(game);
 }
 };
 team.addPlayer('Steph', 'Curry', 28);
 team.addPlayer('Lisa', 'Leslie', 44);
 team.addPlayer('Bugs', 'Bunny', 76);
 console.log(team.players);
 
 
 team.addGame('Warriors',46 ,23);
 team.addGame('Titans',100 ,96);
 team.addGame('lords',90 ,70);
 console.log(team.games);
 
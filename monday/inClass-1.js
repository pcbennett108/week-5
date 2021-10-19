// In Class Excercise 1 - Your Object
let paulBenn = {
  fname: "Paul",
  lname: "Bennett",
  age: 55,
  alive: true,
  homeTown: "Fairfax",
};
paulBenn["currentLocation"] = "Coffee on Crawford";
paulBenn.age = 108;
console.log(paulBenn.alive);
//
// In Class Excercise 2 --- Object Literal Practice
var employee = {
  id: 467239,
  name: "Megan Cain",
  team: 4,
  payTier: 7,
};
//1. How many property/value pairs does the employee object have? ----- 4
//2. What value is associated with the property of payTier? ----------- 7
//3. What is the property name, or label, for the value "Megan Cain"? ---- name
//4. Write your own object assigned to a variable named friend. The friend should have a
//name property and an appropriate value.
var friend = {
  name: "Rover",
  isHuman: false,
  yearsKnown: 5,
};
//5. Write another object assigned to a variable named artist. The artist should have at least
//three properties.
var artist = {
  name: "Boootaigh",
  isFamous: false,
  mediums: ["oil", "charcoal", "rattle can"],
};
//
//Dot Notation Practice
//We’ll use the same employee object from the previous practice section.
//1. Write the syntax that will access the value 4: -----  employee.team
//2. Write the syntax that will access the value "Megan Cain":  ------  employee.name
//3. What will happen if you call employee.age? Why? -----  "undefined"
//
//
// In Class Excercise 3 - Nested Objects
var student = {
  name: "Tristan",
  program: "Front End",
  module: 1,
  alum: false,
  allergies: ["gluten", "MSG", "mushrooms"],
};
var student2 = {
  name: "Aaron",
  program: "Front End",
  module: 1,
  alum: false,
  projects: {
    dogParty: "n/a",
    intentionTimer: null,
    checkYoSelf: null,
  },
};
//1. Write the syntax that would access the notes from Maddy’s Dog Party:
//--------------  student3.projects[0]
//2. Write the syntax that would access the notes from Maddy’s Intention Timer:
//--------------  student2.projects.intentionTimer
//3. Write the syntax that will give Maddy a note of “Great Job!” for Check Yo Self:
//--------------  ??
//4. Why do you think the value of the intentionTimer property is assigned to null in the
//original object?

var student3 = {
  name: "Rebecca",
  program: "Front End",
  module: 1,
  alum: false,
  projects: ["Dog Party", "Number Guesser", "Check Yo Self", "something new"],
  summary: function () {
    var proj = "";
    var proj2 = "";
    for (i = 0; i < this.projects.length - 1; i++) {
      proj += this.projects[i] + ", ";
      proj2 = proj + "and " + this.projects[this.projects.length - 1];
    }
    return (
      this.name +
      " is an awesome " +
      this.program +
      " student! They have built the following projects:" +
      proj2
    );
  },
};
console.log(student3.summary());

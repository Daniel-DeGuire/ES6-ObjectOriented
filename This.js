// 'this' Keyword in Javascript (implicit binding)
// Explain 'this' keyword
// this; // global object

/* this.a = 5;
const getParam = () => {
  console.log(this.a);
};
getParam(); */
// displays 5

/*
let user = {
  name: "Daniel",
  age: 30,
  getDetails() {
    console.log(this.name);  
  },
};

user.getDetails(); // No longer targeting window object, rather it's targeting the parent object.

*/

/*
let user = {
  name: "Daniel",
  age: 30,
  childObj: {
    newName: "Fireroad Coder",
    getDetails() {
      console.log(this.newName, "and", this.name);
    },
  },
};
user.childObj.getDetails(); // Pointing to only the immediate parent.
*/

/*
let user = {
  name: "Daniel",
  age: 30,
  getDetails: () => {
    console.log(this.name);
  },
};

user.getDetails(); //We get nothing, means "this" is not pointing to object. It's pointing to window object.

/*
let user = {
  name: "Daniel",
  age: 30,
  getDetails() {
    const nestedArrow = () => console.log(this.name);
    nestedArrow();
  },
};

user.getDetails();

*/

/*

class user {
  constructor(n) {
    this.name = n;
  }

  getName() {
    console.log(this.name);
  }
}

const User = new user("Dan");

console.log(User);

User.getName();


*/
/* 
const User = {
firsName: "Dan",
getName() {
    const firstName = "Dan DeGuire";
    return this.firstName;
},
}



console.log(user.getName()) // What is logged? It would log Dan as "this" points to the parent object or "User"

*/

/*

// Question 2 -- What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let user = makeUser();

console.log(user.ref().name); // What is the result?

*/

// Question 3 -- What is the output?

/* 
const user = {
  name: "Daniel DeGuire!",
  logMessage() {
    console.log(this.name);
  },
};

setTimeout(function () {
  user.logMessage();
}, 1000);
*/
// Question 4 - Output Based Question

/*
const user = {
  name: "Daniel",
  greet() {
    return `Hello, ${this.name}!`;
  },
  farewell() {
    return `Goodbye, ${this.name}!`;
  },
};

console.log(user.greet()); // What is logged?
console.log(user.farewell()); // what is logged?

*/

// Question 5 - Creating a Calculator

/* 
let calculator = {
  read() {
    this.a = +prompt("a = ", 0);
    this.b = +prompt("b = ", 0);
  },

  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

*/

// Question 6 - Output Based Question

/*

let length = 4;

function callback() {
  console.log(this.length);
}
const object = {
  length: 5,
  method() {
    console.log(arguments);
    arguments[0]();
  },
};
object.method(callback, 2, 3);

*/

// Question 7 -- Implement Calc

const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
};
const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);

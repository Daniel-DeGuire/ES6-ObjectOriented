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

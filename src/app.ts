import { Person, sayHello, aNumber } from "lib/exampleModule";

// console.log("Hello World");

let thisPerson = new Person();
console.log(`Person's favorite number is ${thisPerson.favoriteNumber}`);

sayHello();

function whatIsTheNumber(): number {
  return aNumber;
}

console.log("the number is " + whatIsTheNumber());

import { asModifier } from "lib/calculations";
console.log("baby " + asModifier (10.3333));
import { Person, sayHello, aNumber } from "lib/exampleModule";
import { Character } from "lib/character";

// console.log("Hello World");

let thisPerson = new Person();
console.log(`Person's favorite number is ${thisPerson.favoriteNumber}`);

sayHello();

function whatIsTheNumber(): number {
  return aNumber;
}

console.log("the number is " + whatIsTheNumber());

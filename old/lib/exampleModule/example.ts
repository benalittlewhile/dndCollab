export function sayHello(): void {
  console.log("hello world!");
}

export const aNumber = 12;

export class Person {
  needsCoffee: boolean = true;
  prefersCorgis = "always";
  favoriteNumber: number;

  constructor() {
    this.needsCoffee = true;
    this.prefersCorgis = "literally always";
    this.favoriteNumber = 3;
  }
}

function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    // right here.. typescript know that padding is a number
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // ts now that type of x is equal to type of y, hence x is a string
    x.toUpperCase();
    y.toLowerCase();
  } else {
    console.log(x);
    console.log(y);
  }
}

//! in operator narrowing
//JavaScript has an operator for determining 
// if an object has a property with a name: the in operator

type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  // animal contain property nammed swin, hence it should be Fish
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}

type Human = { swim?: () => void; fly?: () => void };
 
function move2(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    // animal maybe fish maybe human
    animal;
  } else {
    animal;
  }
}

//! instanceof narrowing
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
               
  } else {
    console.log(x.toUpperCase());
  }
}

//! assignment

// let x: string | number 
let x = Math.random() < 0.5 ? 10 : "hello world!";

x = 1;
// now x is a number
console.log(x);

//! control flow analysis
function controlFlowExample() {
  let x: string | number | boolean;
  x = Math.random() < 0.5;
  console.log(x); //let x: boolean
 
  if (Math.random() < 0.5) {
    x = "hello";
    console.log(x); //let x: string
  } else {
    x = 100;
    console.log(x); //let x: number
  }
 
  return x; //let x: string | number
}

//! Using type predicates

// To define a user-defined type guard, 
// we simply need to define a function 
// whose return type is a type predicate:
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

declare function getSmallPet(): Fish | Bird;
// Both calls to 'swim' and 'fly' are now okay.
let pet = getSmallPet();
 
// use-defined type guard in action
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

//! Discriminated unions
interface Circle {
  kind: "circle";
  radius: number;
}
 
interface Square {
  kind: "square";
  sideLength: number;
}
 
type Shape = Circle | Square;
function getArea(shape: Shape) {
  // without this checking, ts won't know if radius are available
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
}

function getAreaV2(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}

interface Triangle {
  kind: "triangle";
  sideLength: number;
}
 
type Shape2 = Circle | Square | Triangle;
 
// function getArea3(shape: Shape2) {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;
//     case "square":
//       return shape.sideLength ** 2;
//     default:
//       const _exhaustiveCheck: never = shape;
//       // Type 'Triangle' is not assignable to type 'never'.
//       return _exhaustiveCheck;
//   }
// }
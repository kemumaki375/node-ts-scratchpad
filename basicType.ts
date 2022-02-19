//! intro
type User = {
  name: string;
  age: number;
};

function isAdult(user: User): boolean {
  return user.age >= 18;
}

const justine: User = {
  name: 'Justine',
  age: 23,
};

const isJustineAnAdult: boolean = isAdult(justine);

console.log(justine.name)
console.log("Is adult? " + isJustineAnAdult)

//! basic function definition
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
 
greet("Maddison", new Date());

//! type inference
let msg = "hello there!";
let anotherMsg: string = "Hello hello";

//! any type
let obj: any = { x: 5 };
console.log(obj.x);

//! return type annotation
function getFavoriteNumber(): number {
  return 26;
}

//! Anonymous Functions

const names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
  // typescript can infer if s is string
  //console.log(s.toUppercase());
  console.log(s.toUpperCase());
});

// also apply to arrow function
// names.forEach((s) => {
//   console.log(s.toUppercase());

//! object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

//! optional properties
function printName(obj: { first: string; last?: string }) {
  console.log(`${obj.first} ${obj.last?.toUpperCase() ?? "doang"}`)
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

//! UNION TYPE
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
//printId({ myID: 22342 });

//! Type Narrowing
function alsoPrintId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(Math.sqrt(id));
  }
}

alsoPrintId(101);
alsoPrintId("202");

// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

console.log(getFirstThree("ABCDEFG"))
console.log(getFirstThree([10,9,8,7]))

//! Type Alias

type Point = {
  x: number;
  y: number;
};
 
// Exactly the same as the earlier example
function printCoordWithTypeAlias(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoordWithTypeAlias({ x: 100, y: 100 });

// type alias with union
type ID = number | string;

let number_id : ID = 13;
let str_id : ID = "13";


//! INTERFACE
interface IPoint {
  x: number;
  y: number;
}
 
function printCoordWithInterface(pt: IPoint) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoordWithInterface({ x: 100, y: 100 });

//! Literal Types
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
// error
//printText("G'day, mate", "centre");

// numeric literal
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

// combine with non literal 
interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  // do something fancy
}
configure({ width: 100 });
configure("auto");
//! configure("automatic"); // error


// TODO: Literal Interface
const req = { url: "https://example.com", method: "GET" };

//printText(req.url, req.method);


//! NULL CHECK
function doSomethingElse(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}

//! Non-null Assertion Operator
function liveDangerously(x?: number | null) {
  // No error in compilation
  console.log(x!.toFixed());
}

let value : Number | null = null;
// runtime error
//console.log(liveDangerously(value))

//! Big integer
// need to target ES2020
const anotherHundred: bigint = 1000n;
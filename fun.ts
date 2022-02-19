function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

//! type alias, just like C# generic
type GreetFunction = (a: string) => void;
function greeterWithAlias(fn: GreetFunction) {
  // ...
}

//! call signature
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

// callable function which also have additional property
const divisibleBy2 = (n: number) => n % 2 == 0;
divisibleBy2.description = 'check if number divisable by 2';

doSomething(divisibleBy2);

//! Construct Signatures
type SomeConstructor = {
  new(s: string): string;
};

function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}

//! generic
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);
console.log(s, u)

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

const twice = map([1, 2, 3], (n) => n * 2);
console.log(twice)

//! generic constrain
// Type should have a numeric property with name length 
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

//specifying type
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

//*error
//const arr = combine([1, 2, 3], ["hello"]);
const arr = combine<string | number>([1, 2, 3], ["hello"]);

//! overload
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;

// implementation signature --> can't be called directly!
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
//const d3 = makeDate(1, 3); // error

//! Default Parameter
function addTwo(n = 0) {
  return n + 2;
}

console.log(addTwo());
console.log(addTwo(5));

// ! optional parameter
declare function f(x?: number): void;

// f(4)
// f()
// f(undefined)

function pass<T>(arr : T[],  func?: (arg: T) => T) {
  if (func === undefined) return arr;
  return arr.map(func);
}

console.log(pass([1,2,3]));
console.log(pass([1,2,3], (n : number) => n +1));


//! rest parameter
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);

//! rest argument
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);

//! parameter destructuring
// JS
// function sum({ a, b, c }) {
//   console.log(a + b + c);
// }
// sum({ a: 10, b: 3, c: 9 });


function sum({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });
// Same as prior example
type ABC = { a: number; b: number; c: number };
function sum2({ a, b, c }: ABC) {
  console.log(a + b + c);
}
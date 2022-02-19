//! "binding" object type


function greet1(person: { name: string; age: number }) {
  return "Hello " + person.name;
}

interface Person {
  name: string;
  age: number;
}

function greet2(person: Person) {
  return "Hello " + person.name;
}

type TPerson = {
  name: string;
  age: number;
};
 
function greet3(person: TPerson) {
  return "Hello " + person.name;
}

//! Optional Properties
type shapex = "bulat" | "kotak"
interface PaintOptions {
  shape: shapex;
  xPos?: number;
  yPos?: number;
}

// ini harus diannotate return nya biar gak ketuker ama string return
const getShape = () : shapex => {
  return "kotak"
} 

function paintShape(opts: PaintOptions) {
  // ...
}
 
const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });

// null checking is required
function paintShape2(opts: PaintOptions) {
  //error
  //let xt = opts.xPos + 4;
  let xPos = opts.xPos === undefined ? 0 : opts.xPos;
  let yPos = opts.yPos === undefined ? 0 : opts.yPos;
}

//! destructuring and defult value
function paintShape3({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log("x coordinate at", xPos);
  console.log("y coordinate at", yPos);
  // ...
}

//! readonly
interface SomeType {
  readonly prop: string;
}
 
function doSomething(obj: SomeType) {
  // We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);
 
  // But we can't re-assign it.
  //obj.prop = "hello";
  //Cannot assign to 'prop' because it is a read-only property.
}

interface Home {
  readonly resident: { 
    name: string; 
    age: number 
  };
}
 
function visitForBirthday(home: Home) {
  // We can read and update properties from 'home.resident'.
  console.log(`Happy birthday ${home.resident.name}!`);
  home.resident.age++;
}
 
function evict(home: Home) {
  // But we can't write to the 'resident' property itself on a 'Home'.
  // home.resident = {
  //   name: "Victor the Evictor",
  //   age: 42,
  // };
}

// TypeScript doesn’t factor in whether properties on 
// two types are readonly when checking whether those 
// types are compatible
interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let readOnlyPerson :ReadonlyPerson = {
  name : "jogh",
  age: 15
}

function addPersonAge(px: Person){
  px.age += 2;
}

//! Person and readonly person is type compatible
console.log(readOnlyPerson.age);
addPersonAge(readOnlyPerson);
console.log(readOnlyPerson.age);

//! Index Signatures
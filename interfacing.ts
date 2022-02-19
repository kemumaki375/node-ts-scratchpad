namespace interfacing {
  //! Extending type
  interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
  }

  interface AddressWithUnit extends BasicAddress {
    unit: string;
  }

  interface Colorful {
    color: string;
  }

  interface Circle {
    radius: number;
  }

  // extend from multiple interface
  interface ColorfulCircle extends Colorful, Circle { }

  const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
  };

  //! type intersection
  type colorfulCircle = Colorful & Circle;

  function drawCircle(circle: Colorful & Circle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
  }

  // okay
  drawCircle({ color: "blue", radius: 42 });

  //! Generic
  interface Box<Type> {
    contents: Type;
  }

  let box: Box<string> = {
    contents: "Bungkus gan"
  }

  // generic type
  type TBox<Type> = {
    contents: Type;
  };

  type OrNull<Type> = Type | null;


  function doSomething(value: Array<string>) {
    // ...
  }

  let myArray: string[] = ["hello", "world"];

  // either of these work!
  doSomething(myArray);
  doSomething(new Array("hello", "world"));

  // readonly array
  const roArray: ReadonlyArray<string> = ["red", "green", "blue"];

  // shorthand for accepting readonly array
  function doStuff(values: readonly string[]) {
    // We can read from 'values'...
    const copy = values.slice();
    console.log(`The first value is ${values[0]}`);

    // ...but we can't mutate 'values'.
    // values.push("hello!");
    // Property 'push' does not exist on type 'readonly string[]'.
  }

  //! tuple
  type StringNumberPair = [string, number];

  function doSomethingWithTuple(pair: [string, number]) {
    const a = pair[0];
    const b = pair[1];
  }
  doSomethingWithTuple(["hello", 42]);

  function tupleDeconstruct(pair: [string, number]){
    const [str, num] = pair;

  }


  // ...
  type Either2dOr3d = [number, number, number?];
  function setCoordinate(coord: Either2dOr3d) {
    const [x, y, z] = coord; //const z: number | undefined
    console.log(`Provided coordinates had ${coord.length} dimensions`);
    //(property) length: 2 | 3
  }

  type StringNumberBooleans = [string, number, ...boolean[]];
  type StringBooleansNumber = [string, ...boolean[], number];
  type BooleansStringNumber = [...boolean[], string, number];















}

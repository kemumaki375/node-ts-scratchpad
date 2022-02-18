function isAdult(user) {
    return user.age >= 18;
}
var justine = {
    name: 'Justine',
    age: 23
};
var isJustineAnAdult = isAdult(justine);
console.log(justine.name);
console.log("Is adult? " + isJustineAnAdult);
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());
// type inference
var msg = "hello there!";
var anotherMsg = "Hello hello";
// any type
var obj = { x: 5 };
console.log(obj.x);
// return type annotation
function getFavoriteNumber() {
    return 26;
}
// object type
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
// optional properties
function printName(obj) {
    var _a, _b;
    console.log("".concat(obj.first, " ").concat((_b = (_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase()) !== null && _b !== void 0 ? _b : "doang"));
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

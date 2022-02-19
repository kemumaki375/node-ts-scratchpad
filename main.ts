//! interface multiple definition
interface Dog {
  name: string
}

interface Dog {
  numberOfHead: number
}

let weirdDog: Dog = { name: "scary dog", numberOfHead: 3 }
console.log(weirdDog);

//! interface definition are hoisted
// interface Dog {
//   numberOfLeg : number
// }

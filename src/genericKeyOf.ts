// type NewGeneric<T> = Array<T>;
// type NewGenericTuple<T, S> = [T, S];
// // type NewString = Array<string>;
// const myArray: NewGeneric<string> = ["kkk", "kkx"];
// const myArray2: NewGeneric<number> = [55, 77];
// const myArray3: NewGenericTuple<number, string> = [55, "77"];

// type PersonType = {
//   name: string;
//   age: number;
//   isAdult: boolean;
// };

// type NewType = "name" | "age" | "isAdult";
// type NewKeyOfType = keyof PersonType

// const personType: PersonType = {
//   name: "string;",
//   age: 55,
//   isAdult: true,
// };

interface Person {
  name: string;
  age: number;
}
function printPersonProperty<T, S extends keyof T>(person: T, property: S) {
  console.log(`Printing person property  "${person[property]}"`);
}
let person: Person = {
  name: "Max",
  age: 27,
};

printPersonProperty(person, "age");

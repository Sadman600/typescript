type JrDeve = {
  name: string;
  age: number;
};
type Deve = JrDeve & {
  skill: boolean;
};
type SrDeve = Deve & {
  salary: number;
};

const jrDeve: JrDeve = {
  name: "Sakib",
  age: 36,
};
const deve: Deve = {
  name: "Sujon",
  age: 28,
  skill: true,
};

const srDeve: SrDeve = {
  name: "Sadman",
  age: 28,
  skill: true,
  salary: 10000,
};
// Interface
interface StudentClassOne {
  name: string;
}
interface StudentClassTwo extends StudentClassOne {
  age: number;
}
interface StudentClassThree extends StudentClassTwo {
  subject: string;
  isGoodStu: boolean;
}

const studentClassOne: StudentClassOne = {
  name: "Jhon",
};
const studentClassTwo: StudentClassTwo = {
  name: "Doe",
  age: 6,
};
const studentClassThree: StudentClassThree = {
  name: "Mosh",
  age: 8,
  subject: "Math",
  isGoodStu: true,
};

type MyFun = (a: number, b: number) => number;
interface MyFunc {
  (a: number, b: number): number;
}
const myFun: MyFunc = (a, b) => a + b;

type StuRoll = number[];
interface StuRolls {
  [index: number]: string;
}
const stuRoll: StuRolls = ["5", "6", "9"];

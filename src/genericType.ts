type NamesType<T> = Array<T>;
type RollsType<T> = Array<T>;
type IsValidType<T> = Array<T>;

const names: NamesType<string> = ["s", "g", "g"];
const rolls: RollsType<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const isValid: IsValidType<boolean> = [true, false];

const myTuples: [string, number, boolean] = ["s", 5, true];

type GenericTuplesType<T, S> = [T, S];

const genericTuples: GenericTuplesType<{ name: string; age: number }, string> =
  [
    {
      name: "sakib",
      age: 55,
    },
    "hello tuples",
  ];

let emni: any;
emni = "fndmndm,";
(emni as string).length;

const hello = [4, 5];

(hello as Array<number>).length;

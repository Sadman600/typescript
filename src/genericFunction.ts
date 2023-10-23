const myFunction = (params: string): string[] => {
  return [params];
};
const myFunction2 = <T>(params: T): T[] => {
  return [params];
};
interface Info {
  name: string;
  age: number;
}
const result1 = myFunction2<string>("Hello");
const result2 = myFunction2<number>(555);
const result3 = myFunction2<boolean>(true);
const result4 = myFunction2<Info>({
  name: "sakib",
  age: 30,
});

type MustType = {
  wifeName: string;
  age: number;
  isAdult: boolean;
};

interface OtherInfo {
  // wifeName: string;
  // age: number;
  isAdult: boolean;
}
// const otherInfo = {
//   wifeName: "Kanti",
//   age: 28,
//   isAdult: true,
// };

//

interface Data1 {
  wifeName: string;
  age: number;
}

const myNewFun = <T extends Data1>(params: T): T => {
  const myName = "Sadman";
  const newData = { ...params, myName };
  return newData;
};
interface Data2 {
  wifeName: string;
  age: number;
  isAdult: boolean;
}
const otherInfo: Data2 = {
  wifeName: "Kanti",
  age: 28,
  isAdult: true,
};
const newInfo = myNewFun(otherInfo);

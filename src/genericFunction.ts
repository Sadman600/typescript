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

const myNewFun = <T>(params: T): T => {
  const myName = "Sadman";
  const newData = { ...params, myName };
  return newData;
};
interface OtherInfo {
  wifeName: string;
  age: number;
}
const otherInfo = {
  wifeName: "Kanti",
  age: 28,
};

const newInfo = myNewFun<OtherInfo>(otherInfo);

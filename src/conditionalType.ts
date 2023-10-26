interface a {
  name: string;
}
interface b extends a {
  age: number;
}

type a1 = string;
type b1 = a1 extends string ? string : null;

type CheckProp<T> = T;

const amarName: CheckProp<string> = "sakib";

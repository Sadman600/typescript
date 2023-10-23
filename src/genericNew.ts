interface GenericNew<T> {
  name: string;
  husbend: T;
}
interface HusbendInfo {
  name: string;
  age: number;
}
const newMerry: GenericNew<HusbendInfo> = {
  name: "Meery",
  husbend: {
    name: "Jhon",
    age: 30,
  },
};

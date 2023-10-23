type GenericType<T, S, B> = [T, S, B];
interface MyArrInt {
  carName: string;
  price: number;
}
type MyArrType = {
  carName: string;
  price: number;
};
const myArr: GenericType<MyArrInt, string, boolean> = [
  {
    carName: "BMW",
    price: 400000,
  },
  "Toyota",
  true,
];

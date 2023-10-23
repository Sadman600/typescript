type CarsGeneric<T> = Array<T>;
type MyTupleGeneric<O, S, N, B> = [O, S, N, B];
type CarsInfo = {
  type: string;
  model: string;
  color: string;
  price: number;
};

const cars: CarsGeneric<string> = ["Saab", "Volvo", "BMW"];
const carsPrice: CarsGeneric<number> = [1000, 2000, 3000];
const carsInfo: CarsGeneric<CarsInfo> = [
  { type: "Fiat", model: "500", color: "white", price: 50000 },
  { type: "Fiat", model: "500", color: "white", price: 50000 },
];

const myTuple: MyTupleGeneric<CarsInfo, string, number, boolean> = [
  { type: "Fiat", model: "500", color: "white", price: 50000 },
  "Hello",
  500,
  true,
];

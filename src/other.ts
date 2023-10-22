function kgToGram(param: string | number): number | string | undefined {
  if (typeof param === "string") {
    const value = parseInt(param);
    return `value is ${value}`;
  } else if (typeof param === "number") {
    return param;
  }
}

const toNumber = kgToGram(1000) as number;
const toStrings = kgToGram("1000") as number;

const x: unknown = 555;
(x as number).toFixed;

try {
} catch (error) {
  console.log((error as CustomErrortype).message);
}

type CustomErrortype = {
  message: string;
};

// const error: CustomErrortype = {
//   message: "hello",
// };

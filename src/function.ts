type NewDev = {
  name: string;
};

type JrDev = NewDev & {
  isSkill: boolean;
};

type SrDev = JrDev & {
  exprience: number;
};

const newDev: NewDev = {
  name: "sakib",
};
const jrDev: JrDev = {
  name: "sakib",
  isSkill: true,
};
const developer: SrDev = {
  name: "sakib",
  isSkill: true,
  exprience: 2,
};

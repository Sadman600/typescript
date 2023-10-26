const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "My promise";
    if (data) {
      resolve(data);
    } else {
      reject("Error data");
    }
  });
};

const getData = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};

interface GetToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const getToDo = async (): Promise<GetToDo> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await res.json();
};

const getToDoData = async (): Promise<void> => {
  const data = await getToDo();
  console.log(data);
};

getToDoData();

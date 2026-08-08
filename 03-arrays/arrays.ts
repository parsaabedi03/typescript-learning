// basic array
const names: string[] = ["Ali", "Reza", "Parsa"];
const scores: number[] = [10, 20, 30];

scores.push(40);
console.log(names);

// array generic syntax
const usersName: Array<string> = ["Ali", "Reza"]; // == string[]
const products: Array<{
  title: string;
  price: number;
}> = [
  {
    title: "Laptop",
    price: 1000,
  },
]; // { title: string; price: number }[]

// multi type in array
const data: (string | number)[] = ["hello", 100, "typescript"];

// array with readonly (sometimes we dont want to change any value)
const colors: readonly string[] = ["red", "blue", "green"];

// tuple
const user: [string, number] = ["Parsa", 25];

// array of objects
type User = {
  id: number;
  name: string;
  active: boolean;
};
const users: User[] = [
  {
    id: 1,
    name: "Ali",
    active: true,
  },

  {
    id: 2,
    name: "Reza",
    active: false,
  },
];

// array methods (like js array methods)
// forEach, find, filter, map, reduce, some, ....

// complex arrays
type Order = {
  id: number;
  user: {
    name: string;
  };
  items: {
    title: string;
    price: number;
  }[];
};
const orders: Order[] = [
  {
    id: 1,
    user: {
      name: "Ali",
    },
    items: [
      {
        title: "Laptop",
        price: 1000,
      },
    ],
  },
];

// basic interface
interface User {
  id: number;
  name: string;
  email: string;
}
const user: User = {
  id: 1,
  name: "Parsa",
  email: "parsa@example.com",
};
console.log(user);

// optional property
interface NewUser {
  id: number;
  name: string;
  email?: string;
}
const user1: NewUser = {
  id: 1,
  name: "Parsa",
};
const user2: NewUser = {
  id: 2,
  name: "Ali",
  email: "ali@example.com",
};

// readonly property
interface User2 {
  readonly id: number;
  name: string;
}
const user3: User2 = {
  id: 1,
  name: "Parsa",
};

// nested interface
interface Address {
  city: string;
  country: string;
}

interface User4 {
  id: number;
  name: string;
  address: Address;
}

const user5: User4 = {
  id: 1,
  name: "Parsa",
  address: {
    city: "Hamburg",
    country: "Germany",
  },
};

// interface for array
interface Product {
  id: number;
  title: string;
  price: number;
}
const products: Product[] = [
  {
    id: 1,
    title: "Keyboard",
    price: 100,
  },
  {
    id: 2,
    title: "Mouse",
    price: 50,
  },
];

// interface for function parameters
function printProduct(product: Product): void {
  console.log(product.title);
  console.log(product.price);
}

// method in interface
interface User6 {
  id: number;
  name: string;

  greet(): string;
}
const user6: User6 = {
  id: 1,
  name: "Parsa",

  greet() {
    return `Hello ${this.name}`;
  },
};

// method with parameters
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}
const calculator: Calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },
};

// extends
interface Animal {
  id: number;
  name: string;
}
interface Cat extends Animal {
  sound: string;
}

// declaration merging
interface User7 {
  id: number;
}
interface User7 {
  name: string;
}
// its like concat =>
// interface User {
//   id: number;
//   name: string;
// }

// interface and type alias
// Interface
interface IUser {
  id: number;
  name: string;
}
// Type
type TUser = {
  id: number;
  name: string;
};

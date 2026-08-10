// basic object
const user: {
  name: string;
  age: number;
  isActive: boolean;
} = {
  name: "Parsa",
  age: 25,
  isActive: true,
};

// optional properties
type User = {
  name: string;
  age?: number;
};
const user1: User = {
  name: "Ali",
};
const user2: User = {
  name: "Reza",
  age: 25,
};

// readonlywproperties
type User1 = {
  readonly id: number;
  name: string;
};
const user3: User1 = {
  id: 1,
  name: "Parsa",
};
// user3.id = 2; can not assign new property

// nested objects
type User2 = {
  id: number;
  name: string;
  address: {
    city: string;
    country: string;
  };
};
const user4: User2 = {
  id: 1,
  name: "Parsa",
  address: {
    city: "Karaj",
    country: "Iran",
  },
};

// object type alias
type User4 = {
  id: number;
  name: string;
  age: number;
};
const user5: User4 = {
  id: 1,
  name: "Parsa",
  age: 25,
};

// index signature
type Scores = {
  [username: string]: number;
};
const scores: Scores = {
  Parsa: 20,
  Ali: 18,
  Reza: 17,
};

// what i learn for object
type Product = {
  readonly id: number;
  title: string;
  price: number;
  discount?: number;
  category: {
    id: number;
    name: string;
  };
  tags: string[];
  getFinalPrice(): number;
};
const product: Product = {
  id: 1,
  title: "Laptop",
  price: 1000,
  discount: 10,
  category: {
    id: 10,
    name: "Electronics",
  },
  tags: ["laptop", "computer", "technology"],
  getFinalPrice() {
    if (this.discount) {
      return this.price - (this.price * this.discount) / 100;
    }
    return this.price;
  },
};

console.log(product.title);
console.log(product.category.name);
console.log(product.tags);
console.log(product.getFinalPrice());

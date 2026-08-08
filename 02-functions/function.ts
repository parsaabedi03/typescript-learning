// basic function
function add(a: number, b: number) {
  return a + b;
}
console.log(add(10, 20));

function printUser(name: string, age: number, active: boolean) {
  console.log(name);
  console.log(age);
  console.log(active);
}
printUser("Parsa", 25, true);

// optional parameter (just write in last)
function createUser(name: string, age?: number) {
  console.log(name);
  console.log(age);
}

// default parameter
function welcome(name: string, message: string = "Hello") {
  console.log(message, name);
}
welcome("Parsa");
welcome("Parsa", "Welcome");

// function type
let calculate: (a: number, b: number) => number;
calculate = function (a, b) {
  return a + b;
};

console.log(calculate(10, 20));

// function type alias
type MathOperation = (a: number, b: number) => number;
const subtract: MathOperation = (a, b) => {
  return a - b;
};

// void
function logMessage(message: string): void {
  console.log(message);
}

// function overload
function reverse(value: string): string;
function reverse(value: number): number;
function reverse(value: string | number) {
  if (typeof value === "string") {
    return value.split("").reverse().join("");
  }

  return value * -1;
}
console.log(reverse("hello"));
console.log(reverse(10));

// any
let value: any = 10;

value = "hello";
value = true;
value.foo();

// unknown
let data: unknown;

data = "hello";
data = 20;
data = true;

// never
function throwError(message: string): never {
  throw new Error(message);
}

throwError("Something went wrong");

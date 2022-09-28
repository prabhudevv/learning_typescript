let age: number = 20;

let runs = 123_456_789;
let username = 'Prabhudev';
let isHero = true;

let level; // any

// array
let numbers = []; // any

// tuples
let user: [number, string, boolean] = [1, "Prabhudev", true];

// enums
const enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log("My size:" + mySize);

if (age < 50) {
  age += 10;
  console.log("Age:" + age);
}

// functions
// perHike?: number - this refers to optional
function taxCalculate(income: number, taxYear: number): number {
  if (taxYear < 2022) {
    return income * 1.2;
  } else {
    return income * 1.3;
  }
}
taxCalculate(10_000, 2022);

// objects, aliases
type Employee = {
  readonly id: number,
  name?: string,
  retire: (date: Date) => void
}
let employee: Employee = {
  id: 1,
  retire: (date: Date) => {
    console.log(date);
  }
};

employee.name = "Prabhudev";
console.log(employee);

// unions, narrowing
function rsToDollar(rupee: number | string): number {
  // Narrowing
  if (typeof (rupee) === 'number') {
    return rupee * 81.67;
  } else {
    return parseInt(rupee) * 81.67;
  }
}
console.log("Rupee to Dollar(number):" + rsToDollar(10));
console.log("Rupee to Dollar(string):" + rsToDollar('10rs'));

// Literal type
type Quantity = 50 | 100;
let quantity: Quantity = 50;

// Nullable types
function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toLocaleUpperCase());
  } else {
    console.log("Hola")
  }
}

greet(undefined);

// Optional chaining
type Customer = {
  birthDay: Date
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthDay: new Date() }
}

let customer = getCustomer(1);

console.log(customer?.birthDay.getFullYear());
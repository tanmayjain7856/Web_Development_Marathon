// Logical Operators
// 1. AND (&&): both sides must be true in order to get output true.
let randomNumber = Math.floor(Math.random() * 100) + 1;

if (randomNumber < 50 && randomNumber % 2 === 0) {
  console.log(
    `The number is less than 50 and the number is even. The number: ${randomNumber}`
  );
} else if (randomNumber === 50) {
  console.log(`The number is 50 and is even.`);
} else if (randomNumber > 50 && randomNumber % 2 === 0) {
  console.log(
    `The number is greater than 50 and the number is even. The number: ${randomNumber}`
  );
} else {
  console.log(`The number is odd and the number is ${randomNumber}.`);
}

// 2. OR (&&): either side must be true in order to get output true.
let age = Math.floor(Math.random() * 100) + 1;
console.log(`Age: ${age}.`);

if (age <= 5 || age >= 65) {
  console.log("Ticket Price: Free");
} else if (age <= 10 || age >= 45) {
  console.log("Ticket Price: $10");
} else if (age > 10) {
  console.log("Ticket Price: $20");
} else {
  console.log("Invalid age");
}

// 3. NOT (!): negate/reverse a value.
let age2 = Math.floor(Math.random() * 100) + 1;
console.log(`Age: ${age2}.`);

if (!(age2 <= 5 || age2 >= 65)) {
  console.log("Ticket Price: $10");
} else {
  console.log("Free");
}

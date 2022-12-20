// Comparison Operators
console.log(1 < 3); // less than
console.log(1 > 3); // greater than
console.log(-1 <= -1); // less than or equal to
console.log(-1 >= -1); // greater than or equal to

// We can also compare strings
console.log("a" < "b");
console.log("A" > "a");

// == (double equals) operator: only checks for value but not type
console.log(5 == 5); // true
console.log(7 == "7"); // true
console.log(0 == ""); // true
console.log(0 == false); // true
console.log(null == undefined); // true

// === (triple equals) operator: checks for both value and type
console.log(5 === 5); // true
console.log(7 === "7"); // false
console.log(0 === false); // false
console.log(null === undefined); // false

// != (not equal) operator and !== (not strictly equal) operator
console.log(1 != 2); // true
console.log(1 != "2"); // true
console.log(1 != "1"); // false
console.log(1 !== "1"); // true

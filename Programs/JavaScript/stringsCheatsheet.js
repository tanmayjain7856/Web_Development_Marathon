//Strings
let color = "Purple"; //double quotes works
let city = "Delhi"; //single quotes works too
//let bad = "this is not possible!' //both can't be used
console.log(color);
console.log(city);

//Accessing characters in a string
console.log(color[1]);
console.log(city[3]);

//Finding length of a string
console.log(color.length);

//String concatenation
console.log("Hello" + "World");
console.log(color + city);

//String Methods
//1. toUpperCase(): converts characters in a string to uppercase
// but not changes the original one.
let string1 = "HeLlO wOrLd";
console.log(string1.toUpperCase());
//2. toLowerCase(): converts characters in a string to lowercase
// but not changes the original one.
console.log(string1.toLowerCase());
//3. trim(): used to remove whitespaces at the beginning and end of a string
// without changing the original one.
let string2 = "     my name is tim tom tammy ping pong     ";
console.log(string2.trim());

//String Methods with Arguments
//1. indexOf(): to get the positional number (-1 if not found) of argument in a string.
console.log(string1.indexOf("H"));
console.log(string2.indexOf("tim"));
console.log(string1.indexOf("z"));
//2. slice(): to slice of / get a part of a string.
//Negative index starts from -1 and means starting from back of the string.
let string3 = "hello world";
console.log(string3.slice(5));
console.log(string3.slice(6, 10));
console.log(string3.slice(-3));
console.log(string3.slice(-7, -2));
//3. replace(): to replace some characters in a string.
//First argument is what we want to replace.
//Second argument is what to replace with.
console.log(string3.replace("hello", "aye aye"));
console.log(string3.replace("l", "L"));

//String Template Literals
//Use backtick character (``).
//${...} is used to embed anything in a string
let product = "Apple";
let price = 10;
let qty = 5;
console.log(`You bought ${qty} ${product}s. Total is: ${price * qty}.`);

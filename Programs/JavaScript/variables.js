//Variables
let year = 2022;
console.log(year);

//Numbers
let a = 4;
let b = 6;
let c = a + b;
console.log(c);
a = a + 1;
console.log(a + b);
console.log(c); // c is not changed. We've to change separately
c = a + b;
console.log(c); // c is changed now

//Incrementing and Decrementing by 1
let score = 5;
console.log(score++); //postfix increment returns value before incrementing by 1
console.log(score);
console.log(++score); //prefix increment returns value after incrementing by 1
console.log(score);

//Constants
const year2 = 2022;
//year2 = 2023 // error
console.log(year2);

//Booleans
let isLoggedIn = true;
let gameOver = false;
const isWaterWet = true;

// Conditional Statements
// 1. If statements
let randomNumber = Math.floor(Math.random() * 10) + 1;
if (randomNumber < 5) {
  console.log(`The number is less than 5 and the number is: ${randomNumber}.`);
}
if (randomNumber === 5) {
  console.log("The number is equal to 5.");
}
if (randomNumber > 5) {
  console.log(
    `The number is greater than 5 and the number is: ${randomNumber}.`
  );
}

// 2. Else-if statements
if (randomNumber < 5) {
  console.log(`The number is less than 5 and the number is: ${randomNumber}.`);
} else if (randomNumber === 5) {
  console.log("The number is equal to 5.");
} else if (randomNumber > 5) {
  console.log(
    `The number is greater than 5 and the number is: ${randomNumber}.`
  );
}

// 3. Else statements
if (randomNumber < 5) {
  console.log(`The number is less than 5 and the number is: ${randomNumber}.`);
} else if (randomNumber === 5) {
  console.log("The number is equal to 5.");
} else {
  console.log(
    `The number is greater than 5 and the number is: ${randomNumber}.`
  );
}

// Nesting conditional statements
if (randomNumber < 5) {
  console.log(`The number is less than 5 and the number is: ${randomNumber}.`);
  if (randomNumber % 2 === 0) {
    console.log("The number is even.");
  } else {
    console.log("The number is odd.");
  }
} else if (randomNumber === 5) {
  console.log("The number is equal to 5 and it is an odd number.");
} else {
  console.log(
    `The number is greater than 5 and the number is: ${randomNumber}.`
  );
  if (randomNumber % 2 === 0) {
    console.log("The number is even.");
  } else {
    console.log("The number is odd.");
  }
}

//4. Switch Statements: to replace multiple if statements
let day = Math.floor(Math.random() * 10) + 1;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day");
}

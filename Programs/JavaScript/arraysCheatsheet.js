//Arrays
//Creating arrays
const students = []; //empty array
const colors = ["red", "orange", "yellow"];
const lottoNums = [19, 22, 56, 12, 87];
const stuff = [true, 68, "cat", null]; //mixed array

//Length of an array
console.log(lottoNums.length); //5

//Accessing elements in arrays
console.log(colors[0]); //'red'
console.log(stuff[2]); //'cat'
console.log(lottoNums[7]); //undefined

//Updating or adding an array
stuff[0] = false; //updating
console.log(stuff);
colors[3] = "green"; //adding
console.log(colors);
colors[6] = "violet";
console.log(colors); //2 empty items as there is no item at index 4 and 5

//Array Methods
const movieLine = ["tom", "nancy"];
console.log(movieLine);

//1. push(item): adds item at the "END" of an array. Returns length of updated array.
movieLine.push("pablo");
console.log(movieLine);
movieLine.push("harry", "hermione");
console.log(movieLine);

//2. pop(): removes item from the "END" of an array. Returns removed item.
movieLine.pop();
console.log(movieLine);

//3. unshift(item): adds item at the "START" of an array. Returns length of updated array.
movieLine.unshift("VIP");
console.log(movieLine);

//4. shift(): removes item from the "START" of an array. Returns removed item.
movieLine.shift();
console.log(movieLine);

//5. concat(array): merge two or more arrays. Returns new merged array.
const movieLine2 = ["hermione", "alex", "stacy"];
const fullMovieLine = movieLine.concat(movieLine2);
console.log(fullMovieLine);

//6. includes(item): checks whether item is present in array or not.
//Returns true or false as appropriate.
console.log(movieLine.includes("nancy")); //true
console.log(movieLine.includes("VIP")); //false

//7. indexOf(item): returns first index of item if found or -1 if not found.
console.log(fullMovieLine.indexOf("nancy")); //1
console.log(fullMovieLine.indexOf("VIP")); //-1
fullMovieLine.push("harry");
console.log(fullMovieLine);
console.log(fullMovieLine.indexOf("harry")); //3

//8. reverse(): reverses an array. It changes the original array.
console.log(fullMovieLine.reverse());
console.log(fullMovieLine.reverse());

//9. join(str): creates a new string out of array items, separated by commas (default)
//or specified string.
console.log(fullMovieLine.join());
console.log(fullMovieLine.join(" - "));

//10. slice(startIndex, endIndex): returns a copy of a part of an array from "startIndex" to "endIndex".
//Item at "endIndex" does not include.
//Indices can be negative.
console.log(fullMovieLine.slice(5));
console.log(fullMovieLine.slice(2, 6));
console.log(fullMovieLine.slice(-4));

//11. splice(startIndex, deleteCount (opt), item (opt)): changes the content of array by
//removing or replacing existing items and/or adding new items in place.
console.log(fullMovieLine);
fullMovieLine.splice(3, 0, "draco"); //adding "draco" at index 3 without deleting 0 item
console.log(fullMovieLine);
fullMovieLine.splice(4, 1); //deleting 1 item at index 4
console.log(fullMovieLine);
fullMovieLine.splice(5, 1, "alexa"); //deleting 1 item at index 5 and replacing it with "alexa"
console.log(fullMovieLine);
fullMovieLine.splice(4); //deletes all items starting at index 4
console.log(fullMovieLine);

//Array reference types and equality testing
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
console.log(array1 === array2); //false
//We're getting false because both arrays are stored in different m/m and both variables
//array1 and array2 are pointing to different arrays even their values are same.
//So, we are checking their reference in m/m when checking for equality.
const array3 = array1;
console.log(array3 === array1); //true
//Now, both varaibles are pointing to same array.
//So, if we change any one varaible, other will change automatically.
array1.push(4);
console.log(array1); //[1,2,3,4]
console.log(array3); //[1,2,3,4]

//Nested Arrays
const nestedArray = [
  ["0", null, "X"],
  [null, "X", "0"],
  ["X", "0", null],
];

//Accessing item from nested array
console.log(nestedArray[1][1]); //'X'
console.log(nestedArray[0][0]); //'0'
console.log(nestedArray[2][2]); //null

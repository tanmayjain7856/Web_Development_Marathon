//Object Literals
//Data stored in "key-value" pair which are called "properties".
//We can store any type of data and are "not ordered".

//Creating object literals
const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutThisWeek: "5 of 7",
  avgGoodSleep: "7.27",
};

//All the keys are converted into string even they of any type.
const year = {
  2020: "Bad",
  2021: "Neutral",
  2022: "Good",
};

//Accessing data from object literal
//1. Using square braces (object["key"]):
console.log(fitBitData["totalSteps"]); //308727
//That's why keys are written in strings in above case.

console.log(year[2020]); //2020 is converted to string and then we get an output
console.log(year["2021"]); //"Neutral"

//2. Using dot syntax (object.key):
console.log(fitBitData.totalSteps); //308727

//Updating or adding data
const midTerms = {
  danille: 96,
  thomas: 78,
};
midTerms.thomas = 79; //updating values
console.log(midTerms);
midTerms.ezra = 81; //adding data
console.log(midTerms);
midTerms.antonio = 67;
console.log(midTerms);

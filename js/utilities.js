"use strict";
//ParT Select all elements
//Display
const display1 = document.querySelector(".dis-1");
const display2 = document.querySelector(".dis-2");
const display3 = document.querySelector(".dis-3");
//Buttons
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equalBtn = document.querySelector(".equal");
const clearAllBtn = document.querySelector(".clear-all");
const clearLastBtn = document.querySelector(".clear-last");

// numbers.forEach((number) => {
//   number.addEventListener("click", function (value) {
//     const clickedString = value.target.innerText;
//     const clickedValue = parseFloat(clickedString);
//     console.log(clickedValue, typeof clickedValue);
//   });
// });
let display1Value = "";
let haveDot = false;
console.log(display1.innerText);
for (const number of numbers) {
  number.addEventListener("click", function (value) {
    const clickedString = value.target.innerText;
    if (clickedString === "." && !haveDot) {
      console.log("Make dot true");
      haveDot = true;
    } else if (clickedString === "." && haveDot) {
      console.log("dote true so return");
      return;
    }
    display1Value += clickedString;
    display2.innerText = display1Value;
  });
}

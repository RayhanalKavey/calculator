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
const buttons = document.getElementsByTagName("button");
// numbers.forEach((number) => {
//   number.addEventListener("click", function (value) {
//     const clickedString = value.target.innerText;
//     const clickedValue = parseFloat(clickedString);
//     console.log(clickedValue, typeof clickedValue);
//   });
// });
//Variables
let result = null;
let display1Value = "";
let display2Value = "";
let lastOperation = "";
let haveDot = false;
//ParT For numbers
for (const number of numbers) {
  number.addEventListener("click", function (value) {
    const clickedString = value.target.innerText;
    //NotE :Multiple dot validation (We cannot press multiple dot)
    if (clickedString === "." && !haveDot) {
      haveDot = true;
    } else if (clickedString === "." && haveDot) {
      return;
    }
    display2Value += clickedString;
    display2.innerText = display2Value;
  });
}
//ParT For operations
operations.forEach(function (operation) {
  operation.addEventListener("click", function (event) {
    // console.log("clivk");
    if (!display2Value) console.log(result);
    //NotE :Multiple dot validation (We can press another dot after pressing a operation)
    haveDot = false;
    const operationSymbol = event.target.innerText; //+,-
    //NotE :Have value or not befor operation start (have value or not validation)
    if (display1Value && display2Value && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(display2Value);
    }
    clearVar(operationSymbol);
    lastOperation = operationSymbol;
  });
});
function clearVar(symbol = "") {
  display1Value += display2Value + " " + symbol + " ";
  display1.innerText = display1Value;
  display2.innerText = "";
  display2Value = "";
  display3.innerText = result;
}
function mathOperation() {
  // console.log(lastOperation);
  if (lastOperation === "*") {
    result = parseFloat(result) * parseFloat(display2Value);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(display2Value);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(display2Value);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(display2Value);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(display2Value);
  }
  // else if (lastOperation === "+/-") {
  //   result = parseFloat(result * -1);
  // }
}
equalBtn.addEventListener("click", function (value) {
  if (!display1Value || !display2Value) {
    return;
  }
  haveDot = false;
  mathOperation();
  clearVar();
  display2.innerText = result;
  display3.innerText = "";
  display2Value = result;
  display1Value = "";
});
clearAllBtn.addEventListener("click", function () {
  display1.innerText = "0";
  display2.innerText = "0";
  display3.innerText = "0";
  display1Value = "";
  display2Value = "";
  result = "";
});
clearLastBtn.addEventListener("click", function () {
  display2.innerText = "0";
  display2Value = "";
});
window.addEventListener("keydown", function (keyPressed) {
  if (
    keyPressed.key === "0" ||
    keyPressed.key === "1" ||
    keyPressed.key === "2" ||
    keyPressed.key === "3" ||
    keyPressed.key === "4" ||
    keyPressed.key === "5" ||
    keyPressed.key === "6" ||
    keyPressed.key === "7" ||
    keyPressed.key === "8" ||
    keyPressed.key === "9" ||
    keyPressed.key === "." ||
    keyPressed.key === "+" ||
    keyPressed.key === "-" ||
    keyPressed.key === "/" ||
    keyPressed.key === "*" ||
    keyPressed.key === "%" ||
    keyPressed.key === "C" ||
    keyPressed.key === "c"
  ) {
    console.log(typeof keyPressed.key, keyPressed.key);
    clickKeyboardBtn(keyPressed.key);
  } else if (keyPressed.key === "=" || keyPressed.key === "Enter") {
    clickKeyboardBtn("=");
  }
});
//Make keyboard functionable with the claculator
function clickKeyboardBtn(keyP) {
  for (const button of buttons) {
    // console.log(typeof button.innerText);
    if (button.innerText === keyP) {
      button.click();
    }
  }
}

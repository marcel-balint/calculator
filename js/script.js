const add = (a, b) => { return a + b; }
const substract = (a, b) => { return a - b; }
const multiply = (a, b) => { return a * b; }
const divide = (a, b) => { return a / b; }

function operate(operator, a, b) {
    switch (operator) {
        case "add":
            return add(a, b);
        case "substract":
            return substract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
        default:
    }
}


const display = document.querySelector(".screen");
const numbers = document.querySelectorAll(".nr");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const operation = document.querySelectorAll(".operation");

let x;
let y;
let operator;
let reset = false;
let answer;

//show numbers on "click"
numbers.forEach(button => {
    button.addEventListener("click", (e) => {
        if (display.textContent == "0" || reset == true) {
            display.textContent = button.textContent;
            reset = false;
        }
        else if (isNaN(button.textContent) == false) {
            display.textContent += button.textContent;
        }
        else {
            display.textContent = button.textContent;
        }
    })
})

//clear button
clear.addEventListener("click", e => {
    display.textContent = "0";
    x = null;
    y = null;
})




//storing operators
operation.forEach(button => {
  button.addEventListener("click", e => {
    x = parseFloat(display.textContent);
    operator = button.id;
    display.textContent = button.textContent;
    reset = true;
  });
});

equal.addEventListener("click", e => {
    let button = document.querySelectorAll("button");
    y = parseFloat(display.textContent);
    if(x == null || reset == true) {
        return (display.textContent = button.textContent);
    } else if(x == 0 && operator == "divide") {
        reset = true;
        return (display.textContent = "Try again.");
    }
    answer = operate(operator, x, y);
    display.textContent = answer;
    reset = true;
    x = null;
    y = null;
})
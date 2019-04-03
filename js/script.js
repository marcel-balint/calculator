
const add = (a,b) => {return a + b; }
const substract = (a,b) => {return a - b;}
const multiply = (a,b) => {return a * b;}
const divide = (a,b) => {return a / b;}


const button = document.querySelector('button');
function operate() {
    if(button == "+") {
        add(a,b);
    }else if(button == "-") {
        substract(a,b);
    }else if(button == "*") {
        multiply(a.b);
    }else if(button == "/") {
        return divide(a,b);
    }
}



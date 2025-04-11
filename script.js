const body = document.querySelector("body");
const container = document.querySelector("#container");
const display = document.createElement("div");
const firstRow = document.createElement("div");
const secondRow = document.createElement("div");
const thirdRow = document.createElement("div");
const fourthRow = document.createElement("div");

const operations = document.createElement("div")
const resultsDisplay = document.createElement("div")
const operationsHolder = document.createElement("p")
const resultsDisplayHolder = document.createElement("p")


let number1=0;
let operand="";
let number2=0;
let result="";


body.style = "font-family: roboto; display: flex;justify-content: center; align-items: center; padding-top: 5%; background-color: white; "
container.style = "display: flex; flex-flow: column; width: 500px; height: 700px; background-color: gold; border: solid 3px grey; border-radius: 20px; padding: 30px; justify-content: flex-start; flex-shrink: 2; gap: 30px;"
display.style = "height: 150px; flex: 1 1 1; border-radius: 5px; background-color: lightgrey; border: solid 2px black; wid; flex-shrink: 2; display: flex; flex-flow: column;"
operations.style = "display: flex; flex: 1; justify-content: end; align-items:center; background-color: lightgrey; "
resultsDisplay.style = "display: flex; flex: 1; justify-content: end; align-items:center; background-color: red; "
operationsHolder.style = "padding-left: 5px; padding-right: 5px;flex: 1; text-align: right; color: black;"
resultsDisplayHolder.style = "padding-left: 5px; padding-right: 5px;flex: 1; text-align: right; color: black; font-size: 32px;"

display.classList.add("display")



operations.appendChild(operationsHolder)
resultsDisplay.appendChild(resultsDisplayHolder)

addButtons()

container.appendChild(display)
container.appendChild(firstRow)
container.appendChild(secondRow)
container.appendChild(thirdRow)
container.appendChild(fourthRow)


display.appendChild(operations)
display.appendChild(resultsDisplay)

function addButtons(){
    let rowstyle = "display: flex; center; justify-content: center; align-items: center; gap: 10px;"

    firstRow.style = rowstyle
    secondRow.style = rowstyle
    thirdRow.style = rowstyle
    fourthRow.style = rowstyle
  
    let num0 = document.createElement("button")
    let num1 = document.createElement("button")
    let num2 = document.createElement("button")
    let num3 = document.createElement("button")
    let num4 = document.createElement("button")
    let num5 = document.createElement("button")
    let num6 = document.createElement("button")
    let num7 = document.createElement("button")
    let num8 = document.createElement("button")
    let num9 = document.createElement("button")
    let clear = document.createElement("button")
    let equate = document.createElement("button")
    let add = document.createElement("button")
    let subtract = document.createElement("button")
    let multiply = document.createElement("button")
    let divide = document.createElement("button")

    let btnstyle = "width: 100px; height: 100px; border: solid 1px black; display: flex; align-items: center; justify-content: center; text-align: center; " 

    num0.style = btnstyle
    num1.style = btnstyle
    num2.style = btnstyle
    num3.style = btnstyle
    num4.style = btnstyle
    num5.style = btnstyle
    num6.style = btnstyle
    num7.style = btnstyle
    num8.style = btnstyle
    num9.style = btnstyle
    clear.style = btnstyle
    equate.style = btnstyle
    add.style = btnstyle
    subtract.style = btnstyle
    multiply.style = btnstyle
    divide.style = btnstyle

    num0.value = 0;
    num1.value = 1;
    num2.value = 2;
    num3.value = 3;
    num4.value = 4;
    num5.value = 5;
    num6.value = 6;
    num7.value = 7;
    num8.value = 8;
    num9.value = 9;
    add.value = '+';
    subtract.value = '-';
    multiply.value = '*';
    divide.value = '/';
    clear.value = 'clear';
    equate.value = '=';

    buttonValue(num0)
    buttonValue(num1)
    buttonValue(num2)
    buttonValue(num3)
    buttonValue(num4)
    buttonValue(num5)
    buttonValue(num6)
    buttonValue(num7)
    buttonValue(num8)
    buttonValue(num9)
    buttonValue(clear)
    buttonValue(equate)
    buttonValue(add)
    buttonValue(subtract)
    buttonValue(multiply)
    buttonValue(divide)

    num0.addEventListener("click", function(){
        numberPress(num0)
    });
    num1.addEventListener("click", function(){
        numberPress(num1)
    });
    num2.addEventListener("click", function(){
        numberPress(num2)
    });
    num3.addEventListener("click", function(){
        numberPress(num3)
    });
    num4.addEventListener("click", function(){
        numberPress(num4)
    });
    num5.addEventListener("click", function(){
        numberPress(num5)
    });
    num6.addEventListener("click", function(){
        numberPress(num6)
    });
    num7.addEventListener("click", function(){
        numberPress(num7)
    });
    num8.addEventListener("click", function(){
        numberPress(num8)
    });
    num9.addEventListener("click", function(){
        numberPress(num9)
    });
    add.addEventListener("click", function() {
        operandPress(add)
    })
    subtract.addEventListener("click", function() {
        operandPress(subtract)
    })
    multiply.addEventListener("click", function() {
        operandPress(multiply)
    })
    divide.addEventListener("click", function() {
        operandPress(divide)
    })
    clear.addEventListener("click", function(){
        clearPress()})
    equate.addEventListener("click", function(){
        equatePress()});

    firstRow.appendChild(num7)
    firstRow.appendChild(num8)
    firstRow.appendChild(num9)
    firstRow.appendChild(add)

    secondRow.appendChild(num4)
    secondRow.appendChild(num5)
    secondRow.appendChild(num6)
    secondRow.appendChild(subtract)

    thirdRow.appendChild(num1)
    thirdRow.appendChild(num2)
    thirdRow.appendChild(num3)
    thirdRow.appendChild(multiply)

    fourthRow.appendChild(clear)
    fourthRow.appendChild(num0)
    fourthRow.appendChild(equate)
    fourthRow.appendChild(divide)


}

function buttonValue(b){
    let v = document.createElement("p");
    v.innerText = b.value;
    v.style = "text-align: center;"
    b.appendChild(v);
}

function numberPress(e){
    if(operand!=""){
        number1 =(number1*10) + e.value;
        operationsHolder.innerText = number1;    
    }else{
        number2 =(number2*10) + e.value;
        operationsHolder.innerText = number2;
    }
    
    resultsDisplayHolder.innerText = result;
    
}
function operandPress(e){
    let val = e.value;
    if(val === "+"){
        operand = "+";
    }else if(val === "-"){
        operand = "-";
    }else if(val === "*"){
        operand = "*";
    }else if(val === "/"){
        operand = "/";
    }
    operationsHolder.innerText = operand ; 
    resultsDisplayHolder.innerText = result; 
}
function clearPress(){
    number1 = 0;
    number2 = "";
    operand = 0;
    operationsHolder.innerText = 0; 
    resultsDisplayHolder.innerText = result;
}
function equatePress(){
    if(number1 !=="" || number2 !=="" || operand !==""){
        if(operand === "+"){
            result = number1 + number2;
        }else if(operand === "-"){
            result = number1 - number2;
        }else if(operand === "*"){
            result = number1 * number2;
        }else if(operand === "/"){
            if(number2 != 0){
                result = number1 / number2;
            }else{
                result = 'Math error'
            }
            
        } 
    }else{
        result = number1;
    }
    operationsHolder.innerText = number1 + " "+ operand + " " + number2; 
    resultsDisplayHolder.innerText = result;
}
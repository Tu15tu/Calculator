let buttons = document.querySelectorAll('.number');
let clear = document.getElementById('clear');
let result = document.getElementById('result');
let total = document.getElementById('total');
let allButtons = [...buttons];
let clearOnce = document.getElementById('clearOnce');

// FOR ANY INPUT
allButtons.forEach((button, i) => {
    button.addEventListener("click", () => {
        if(result.innerHTML == 0){
            result.innerHTML = "";
        }
        let answer = buttons[i].innerHTML;
        result.innerHTML += answer;
    })
})
// EVALUATION OF INPUT
function operation(value){
    return new Function("return " + value)();
}

// CALCULATION OF INPUT
total.addEventListener("click", () =>{
    let allInputs = result.innerHTML;
    if(result.innerHTML === ""){
        result.innerHTML = operation(0)
    }
    else{
    result.innerHTML = operation(allInputs);
    }
})

// CLEAR ALL INPUT
clear.addEventListener("click", () => {
    result.innerHTML= 0
})

// DELETE INPUT
clearOnce.addEventListener("click", () => {
    result.innerHTML = result.innerHTML.slice(0, -1);
    console.log(result.innerHTML)
    })


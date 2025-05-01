var firstInput = "";
var operator = "";
var lastInput = "";

function appendNumber(number) {
    firstInput += number;
    document.getElementById("display").value =firstInput;
}

function setOperator(op) {
    if (firstInput === "") return;
    if (lastInput !== "") {
        calculateResult();
    }
    operator = op;
    lastInput = firstInput;
    firstInput = "";
}

function clearDisplay() {
    firstInput = "";
    lastInput = "";
    operator = "";
    document.getElementById("display").value = "";
}

function calculateResult() {
    if (firstInput === "" || lastInput === "") return;
    let result;
    const last = parseFloat(lastInput);
    const first = parseFloat(firstInput);

    switch (operator) {
        case "+":
            result = last + first;
            break;
        case "-":
            result = last- first;
            break;
        case "*":
            result = last* first;
            break;
        case "/":
            result = last / first;
            break;
        default:
            return;
    }

    document.getElementById("display").value = result;
   firstInput = result.toString();
    operator = "";
    lastInput = "";
}

console.log("Selamat Anda berhasil menggunakan JavaScript pada Website")
alert("Calculator Learned from dicoding")

const calculator = {
    displayNumber: "0",
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
};

function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator() {
    calculator.displayNumber = "0";
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
}

function inputDigit(digit) {
    if (calculator.waitingForSecondNumber && calculator.firstNumber === calculator.displayNumber) {
        calculator.displayNumber = digit;
    } else {
        if (calculator.displayNumber === "0") {
            calculator.displayNumber = digit;
        } else {
            calculator.displayNumber += digit;
        }
    }
}

const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
    button.addEventListener("click", function (event) {
        //Mendapatkan objek elemen yang diklik
        const target = event.target;

        if (target.classList.contains("clear")) {
            clearCalculator();
            updateDisplay();
            return;
        }

        if (target.classList.contains("negative")) {
            inversNumber();
            updateDisplay();
            return;
        }

        if (target.classList.contains("equals")) {
            performCalculation();
            updateDisplay();
            return;
        }

        if (target.classList.contains("operator")) {
            handleOperator(target.innerText);
            updateDisplay();
            return;
        }

        inputDigit(target.innerText);
        updateDisplay()
    });
}

function inversNumber() {
    if (calculator.displayNumber === "0") {
        return;
    }

    calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator) {
    if (!calculator.waitingForSecondNumber) {
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;
    } else {
        alert('Operator sudah ditetapkan')
    }
 }

function performCalculation() {
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert("Anda belum nenetapkan operator");
        return;
    }

    let resault = 0;
    if (calculator.operator === "+") {
        resault = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else {
        resault = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
    }

    calculator.displayNumber = resault;
}
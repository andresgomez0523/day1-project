// Element objects
const screen = document.querySelector('.screen');
const operationBtns = document.querySelectorAll('.operation-btn')
const numberBtns = document.querySelectorAll('.number-btn')
const clearBtn = document.querySelector('#clear-btn')
const equalBtn = document.querySelector('#equal-btn')
const dotBtn = document.querySelector('#dot-btn')
const delBtn = document.querySelector('#DEL-btn')
const signBtn = document.querySelector('#sign-btn')

let result = 0;
screen.textContent = '0'
let currentOperation = '';
let num1 = 0;
let num2 = 0;
let operationClick = false;
let count = 0;

clearBtn.onclick = () => {
    screen.textContent = '0';
    result = 0;
    currentOperation = '';
    count = 0;
}

dotBtn.onclick = () => {
    screen.textContent += '.';
}

delBtn.onclick = () => {
    screen.textContent = screen.textContent.slice(0, -1)
}

signBtn.onclick = () => {
    if (parseFloat(screen.textContent) > 0) {
        screen.textContent = '-'+screen.textContent;
    } else if (parseFloat(screen.textContent) < 0){
        screen.textContent = screen.textContent.slice(1);
    }

}

function clearScreen() {
    screen.textContent = '';
}

function appendNumber(btn) {
    number = btn.textContent;
    screen.textContent += number;
}

numberBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if ((currentOperation !== '' && operationClick === true)|| screen.textContent === '0'){
            clearScreen();
            operationClick = false;
        }
        appendNumber(btn)
    })
})

operationBtns.forEach(btn => {
    btn.addEventListener('click', () =>{
        count = 0;
        operationClick = true;
        if (currentOperation !== '') {
            runOperation()
        }
        num1 = parseFloat(screen.textContent)
        currentOperation = btn.textContent;
    })
})

function runOperation() {
    if (count === 0) {
        num2 = parseFloat(screen.textContent);
    }

    if (currentOperation === 'x'){
        num1 = num1 * num2
    }
    if (currentOperation === '+'){
        num1 = num1 + num2
    }
    if (currentOperation === '-'){
        num1 = num1 - num2 
    }
    if (currentOperation === '/'){
        num1 = num1 / num2
    }
    screen.textContent = num1
}

equalBtn.onclick = () => {
    runOperation();
    count += 1;
}




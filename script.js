// CALCULATOR PROGRAM

let display = document.getElementById('display');
let keys = document.getElementById('keys');

function appendToDisplay(value) {
    display.value += value;
}

function calculate() {
    try {
        display.value = new Function('return ' + display.value)();
    } catch (e) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}

keys.addEventListener('click', function(e) {
    if (e.target.classList.contains('operator-btn')) {
        appendToDisplay(e.target.textContent);
    } else if (e.target.textContent === '=') {
        calculate();
    } else if (e.target.textContent === 'C') {
        clearDisplay();
    } else {
        appendToDisplay(e.target.textContent);
    }
});
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
const numbers = document.querySelectorAll('.number');
const buttons = document.querySelectorAll('.number, .operator');
const operators = document.querySelectorAll('.operator');

buttons.forEach(bouton => {
    bouton.addEventListener('click', function() {
        display.textContent += this.textContent;
    });
});
equal.addEventListener('click', () => {
    display.textContent = eval(display.textContent);
})
clear.addEventListener('click', () => {
    display.textContent = 'bonjour';
})
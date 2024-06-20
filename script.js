document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let equation = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-num');
            const action = this.getAttribute('data-action');
            const operator = this.getAttribute('data-operator');

            if (value) {
                currentInput += value;
                equation += value;
                display.textContent = equation;
            }

            if (operator) {
                currentInput = '';
                equation += ` ${operator} `;
                display.textContent = equation;
            }

            if (action === 'clear') {
                currentInput = '';
                equation = '';
                display.textContent = '0';
            }

            if (action === 'delete') {
                equation = equation.trim();
                if (equation.endsWith(' ')) {
                    equation = equation.slice(0, -3);
                } else {
                    equation = equation.slice(0, -1);
                }
                display.textContent = equation || '0';
            }

            if (action === 'calculate') {
                try {
                    const result = eval(equation);
                    display.textContent = result;
                    currentInput = result.toString();
                    equation = result.toString();
                } catch (e) {
                    display.textContent = 'Error';
                    currentInput = '';
                    equation = '';
                }
            }
        });
    });
});

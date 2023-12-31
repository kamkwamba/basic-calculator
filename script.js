const math = {
    expression: '',
    answer: ''
};

function updateExpression(expression) {
    document.getElementById('math-input').textContent = expression;
}

function calculate() {
    document.getElementById('math-output').textContent = eval(math.expression);
}

function acceptInput(value) {
    math.expression += value;
    updateExpression();
}

function reset(answer) {
    math.expression = '';
    math.answer = answer;
    document.getElementById('math-input').textContent = '';
    document.getElementById('math-output').textContent = math.answer;
}

// deactivates numbers & operator buttons
function deactivateButtons() {
    document.querySelectorAll('.buttons-pad button').forEach((button) => {
        if (button.dataset.input === 'switch') {
            console.log();
        } else {
            button.classList.add('no-events');
        }
    })
}

// activates numbers & operator buttons
function activateButtons() {
    document.querySelectorAll('.buttons-pad button').forEach((button) => {
        if (button.dataset.input === 'switch') {
            /* ------------- */
        } else {
            button.classList.remove('no-events');
        }
    })
}

// removes last character of a string
function backspace(inputString) {
    if (inputString.length > 0) {
        return inputString.substring(0, inputString.length - 1);
    } else {
        return inputString;
    }
}

document.querySelectorAll('.buttons-pad button').forEach(button => {
    button.addEventListener('click', () => {
        let data = button.dataset.input;
        if (data === 'switch') {
            if(button.classList.contains('off')){
                button.classList.toggle('off');
                activateButtons();
                reset(0);
            }else {
                button.classList.toggle('off');
                deactivateButtons();
                reset('');
            }

        } else if (data == 'backspace') {
            math.expression = backspace(math.expression);
            updateExpression(math.expression);
        } else if (data === '=') {
            calculate();
        } else {
            acceptInput(data);
            updateExpression(math.expression);
        }
    });
});

deactivateButtons();
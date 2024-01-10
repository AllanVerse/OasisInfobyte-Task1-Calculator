alert("This is a Calculator")
const userInput = document.getElementById('userInput');

function allClear() {
    userInput.value = '';
}

function backSpace() {
    userInput.value = userInput.value.slice(0, -1);
}

function variablesValues(character) {
    userInput.value += character;
}

function calculateResult() {
    try {
        userInput.value = eval(userInput.value);
    } catch (error) {
        userInput.value = 'Error';
    }
}

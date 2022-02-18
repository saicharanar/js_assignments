function isEven(number) {
    return number % 2 === 0;
}

function displayEvenNumbers(initialNumber, terminalNumber) {
    for (; initialNumber < terminalNumber; initialNumber++) {
        if (isEven(initialNumber)) {
            console.log(initialNumber);
        }
    }
}

function main() {
    displayEvenNumbers(1, 7);
}

main();
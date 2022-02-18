function isOdd(number) {
    return number % 2 !== 0;
}

function displayOddNumbers(initialNumber, terminalNumber) {
    for (; initialNumber < terminalNumber; initialNumber++) {
        if (isOdd(initialNumber)) {
            console.log(initialNumber);
        }
    }
}

function main() {
    displayOddNumbers(1, 7);
}

main();
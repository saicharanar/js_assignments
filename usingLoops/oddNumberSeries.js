function isOdd(number) {
    return number % 2 !== 0;
}

function displayOddNumbersBetween(initialNumber, terminalNumber) {
    for (let element = initialNumber; element < terminalNumber; element++) {
        if (isOdd(element)) {
            console.log(element);
        }
    }
}

function main() {
    displayOddNumbersBetween(1, 7);
}

main();
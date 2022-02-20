function productOf(number) {
    if (number <= 1) {
        return number;
    }
    return number * productOf(number - 1);
}

function main() {
    console.log(productOf(5));
}

main();
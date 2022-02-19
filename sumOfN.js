function sumOf(number) {
    if (number <= 1) {
        return number;
    }
    return number + sumOf(number - 1);
}

function main() {
    console.log(sumOf(5));
}

main();
function displayMultiplicationTable(number, limit) {
    if (limit < 1) {
        return;
    }
    displayMultiplicationTable(number, limit - 1);
    console.log(number, "*", limit, "=", number * limit);
}

function main() {
    displayMultiplicationTable(2, 10);
}

main();
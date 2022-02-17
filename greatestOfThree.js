function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

function main() {
    console.log(max(9, max(7, 2)));
}

main();
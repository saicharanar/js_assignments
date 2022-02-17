function average(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

function avgAsPercent(num1, num2, num3, reference) {
    return (average(num1, num2, num3) / reference) * 100;
}

function main() {
    console.log(avgAsPercent(3, 4, 5, 10));
}

main();
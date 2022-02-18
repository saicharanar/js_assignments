function min(num1, num2) {
    return num1 < num2 ? num1 : num2;
}

function isDivisble(num1, num2) {
    return num1 % num2 === 0;
}

function isDivisbleByBoth(value, num1, num2) {
    return isDivisble(num1, value) && isDivisble(num2, value);
}

function hcfOf(num1, num2) {
    let limit = min(num1, num2);
    let hcf = limit;

    for (let value = 1; value <= limit; value++) {
        if (isDivisbleByBoth(value, num1, num2)) {
            hcf = value;
        }
    }

    return hcf;
}

function lcmOf(num1, num2) {
    return (num1 * num2) / hcfOf(num1, num2);
}

function main() {
    console.log(8, 12, "is", lcmOf(8, 12));
    console.log(6, 9, "is", lcmOf(6, 9));
}

main();
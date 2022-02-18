function factorial(number) {    
    let result = 1;
    for (let index = 1; index <= number; index++) {
        result = result * index;
    }

    return result;
}

function main() {
    console.log("1! = ", factorial(1));
    console.log("2! = ", factorial(2));
    console.log("3! = ", factorial(3));
    console.log("4! = ", factorial(4));
}

main();
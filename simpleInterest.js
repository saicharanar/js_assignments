function simpleInterest(principle, time, rate) {
    return (principle * time * rate) / 100;
}


function main() {
    console.log(simpleInterest(1000, 2, 5));
    console.log(simpleInterest(1000, 3, 5));
}

main();
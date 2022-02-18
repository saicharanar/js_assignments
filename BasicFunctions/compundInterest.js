function compundInterest(principle, time, rate, frequency) {
    return principle * (1 + (rate / frequency)) ** (frequency * time);
}


function main() {
    console.log(compundInterest(1000, 2, 5, 6));
    console.log(compundInterest(1000, 3, 5, 12));
}

main();
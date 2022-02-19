function getSpaces(count) {
    let spaces = "";
    for (let i = 1; i < count; i++) {
        spaces += "  ";
    }

    return spaces;
}

function printDivs(count) {
    for (let index = 1; index < count; index++) {
        console.log(getSpaces(index), "<div>")
    }

    for (let index = count; index > 0; index--) {
        console.log(getSpaces(index), "</div>")
    }
}

function main() {
    printDivs(4);
}

main();
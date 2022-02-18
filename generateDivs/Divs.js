function getSpaces(spaces) {
    return spaces + "  ";
}

function printDivs(count, spaces) {
    if (count < 1) {
        return "";
    }

    console.log(spaces, "<div>");
    printDivs(count - 1, getSpaces(spaces));
    console.log(spaces, "</div>");
}

function main() {
    printDivs(3, "");
}

main();
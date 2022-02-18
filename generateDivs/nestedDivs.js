let div = "";

function getSpaces(count) {
    let spaces = "";
    for (let i = 1; i < count; i++) {
        spaces += "  ";
    }

    return spaces;
}

function createDivs(count) {
    if (count < 1) {
        return;
    }
    
    div = getSpaces(count) + "<div>\n" + div + getSpaces(count) + "</div>\n";
    createDivs(count - 1);
}

function main() {
    createDivs(4);
    // console.log(createDivs(4));
    console.log(div);
}

main();
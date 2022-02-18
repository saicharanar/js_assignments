let div = "";

function getTabs(count) {
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
    
    div = getTabs(count) + "<div>\n" + div + getTabs(count) + "</div>\n";
    createDivs(count - 1);
}

function main() {
    createDivs(4);
    console.log(div);
}

main();
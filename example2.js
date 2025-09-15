console.log("Example 2 script started");

// Main script
printPyramid(100);

// Helper functions
function printRow(num) {
    let stars = "";
    for (let i = 0; i < num; i++) {
        stars += "*";
    }
    console.log(stars);
}

function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        printRow(i);
    }
}
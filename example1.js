console.log("Example 1 script started");

// ************** Main script *************
let username = prompt("Enter your name");
greetUser(username);



// *************** Helper functions ***********
function printCat() {
    console.log(" (\\___/)");
    console.log("( =*.*= )");
    console.log(" (_/ \\_)");
}

function greetUser(name) {
    console.log("**********************");
    console.log("* Welcome, " + name + "!!!");
    console.log("**********************");
}
const prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter the units digits [1,10,100,1000....]:  "));

switch (number) {
    case 1:
        console.log("UNIT");
        break;

    case 10:
        console.log("TEN");
        break;

    case 100:
        console.log("HUNDRED");
        break;

    case 1000:
        console.log("THOUSAND");
        break;

    case 10000:
        console.log("TEN THOUSAND");
        break;

    case 100000:
        console.log("ONE LAKH");
        break;

    case 1000000:
        console.log("TEN LAKHS");
        break;

    case 10000000:
        console.log("ONE CRORE");
        break;

    default:
        console.log("Invalid Digit");
        break;
}
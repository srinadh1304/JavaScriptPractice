const args = process.argv.slice(2);
let digit = parseInt(args[0]);


if (digit == 1) {
    console.log("The digit is : UNIT");
}
else if (digit == 10) {
    console.log("The digit is : TEN");
} 
else if (digit == 100) {
    console.log("The digit is : HUNDRED");
} 
else if (digit == 1000) {
    console.log("The digit is : THOUSAND");
} 
else if (digit == 10000) {
    console.log("The digit is : TEN THOUSAND");
} 
else if (digit == 100000) {
    console.log("The digit is : ONE LAKH");
} 
else if (digit == 1000000) {
    console.log("The digit is : TEN LAKHS");
} 
else {
    console.log("Invalid Digit");
}
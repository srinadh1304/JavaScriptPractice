const prompt = require("prompt-sync")();
let number = prompt("Enter The value of n : ");

let result = 1;
let index = 1;
while((index <= number)  && (result < 256)) {
    result *= 2;
    console.log("2 ^ " + index + " = " + result);
    index++;
}
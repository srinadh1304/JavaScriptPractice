const prompt = require("prompt-sync")();
let number = prompt("Enter value of n : ");
let result = 0;
for(let index=1; index<=number; index++)
{
    result += (1 / index);
}
console.log(number + "th Harmonic Number is : " + result);
const prompt = require("prompt-sync")();
let number=parseInt(prompt("Enter the number "))
var tempNumber=number;
var primeFactors= new Array();
for(let i = 2; i*i <= number; i++) 
{
    while (tempNumber%i == 0)
    {
        primeFactors.push(i);
        tempNumber /= i;
    }
}
if(tempNumber!=1)
{
    primeFactors.push(tempNumber)
}
console.log("Prime Factors are")
console.log(primeFactors)

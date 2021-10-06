const prompt = require("prompt-sync")();
let number=parseInt(prompt("Enter the number "))
var tempNumber=number;
var primeFactors= new Array();
for(let index = 2; index*index <= number; index++) 
{
    while (tempNumber%index == 0)
    {
        primeFactors.push(index);
        tempNumber /= index;
    }
}
if(tempNumber!=1)
{
    primeFactors.push(tempNumber)
}
console.log("Prime Factors are")
console.log(primeFactors)

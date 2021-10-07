const args = process.argv.slice(2);
let number = parseInt(args[0]);

let factorial = 1;

for(let index = 1; index <= number; index++)
{
    factorial *= index;
}
console.log("Factorial is = " +factorial)
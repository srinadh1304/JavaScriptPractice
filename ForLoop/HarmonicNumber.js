const args = process.argv.slice(2);
let number = parseInt(args[0]);
let result = 0;
for(let index=1; index<=number; index++)
{
    result += (1 / index);
}
console.log(number + "th Harmonic Number is : " + result);
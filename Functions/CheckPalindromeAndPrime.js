const prompt = require("prompt-sync")();

function checkPalindrome(number) {
    const reverseNumber = parseFloat(number.toString().split('').reverse().join(''));
    console.log("Palindrome of the number = " +reverseNumber);
    if (number == reverseNumber)
        return true;
    else
        return false;
}

function checkPrime(number) {
    let flag = 0;
    for (let index = 2; index < number; index++) {
        if (number % index == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 1)
        return false;
    else
        return true;
}

let number = prompt("Enter the  number : ");

if (checkPrime(number))
    console.log(number+" is prime");
else
    console.log(number+" is not prime");

if (checkPalindrome(number))
    console.log(number+" is palindrome");
else
    console.log("Number is not palindrome");
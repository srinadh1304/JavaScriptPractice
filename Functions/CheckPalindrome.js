const args = process.argv.slice(2);
let firtsNumber = args[0];
let secondNumber = args[1];

function PalindromeChecker(number) {
    let reverseNumber = number.split("").reverse();
    if (number == reverseNumber.join("")) {
        return true;
    }
    else {
        return false;
    }
}

if (PalindromeChecker(firtsNumber) && PalindromeChecker(secondNumber)) {
    console.log("The Two Numbers are palindrome");
}
else {
    console.log("The Numbers are Not palindrome");
}
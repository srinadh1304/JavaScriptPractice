const args = process.argv.slice(2);
let number = parseInt(args[0]);
let isPrime = true;

if (number === 1) {
    console.log("1 is Neither Prime Nor Composite Number.");
}

else if (number > 1) {
    for (let index = 2; index *index< number; index++) {
        if (number % index == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(number + " is a Prime Number");
    }
    else {
        console.log(number + " is not a Prime Number");
    }
}
else {
   console.log("Invalid Number");
}
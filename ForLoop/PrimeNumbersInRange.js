const args = process.argv.slice(2);
let lowerRange = parseInt(args[0]);
let higherRange = parseInt(args[1]);

console.log("The prime numbers between " + lowerRange + " and "  + higherRange + " are:");

for (let index = lowerRange; index <= higherRange; index++) {
    let flag = 0;

    for (let divisor = 2; divisor < index; divisor++) {
        if (index % divisor == 0) {
            flag = 1;
            break;
        }
    }
    
    if (index > 1 && flag == 0) {
        console.log(index + " is a prime number");
    }
}
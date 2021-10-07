const args = process.argv.slice(2);
let number = parseInt(args[0]);
let result = 1;
let index = 1;
while((index <= number)  && (result < 256)) {
    result *= 2;
    console.log("2 ^ " + index + " = " + result);
    index++;
}
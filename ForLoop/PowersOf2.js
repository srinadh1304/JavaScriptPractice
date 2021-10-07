const args = process.argv.slice(2);
let number = parseInt(args[0]);
let endPoint = Math.pow(2, number);

let result = 1;
for (let index = 1; index <= endPoint; index++) {
    if (result <= endPoint) {
        result *= 2;
        console.log("2 ^ " + index + " = " + result);
    }
    else{
        break;
    }
}

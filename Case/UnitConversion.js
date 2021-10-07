const args = process.argv.slice(2);
let choice = parseInt(args[0]);
let userValue = parseInt(args[1]);
console.log("1: Feet to Inch\n2: Feet to meter\n3: Inch to feet\n4: Meter to Feet\n")

switch (choice) {
    case 1:
        console.log("Feet To Inch \n Feet = " + userValue + " To Inch = " + userValue * 12);
        break;
    case 2:
        console.log("Feet To Meter \n Feet = " + userValue + " To Meter = " + userValue * 0.3048);
        break;
    case 3:
        console.log("Inch To Feet \n Inch = " + userValue + " To Feet = " + userValue * 0.0833333);
        break;
    case 4:
        console.log("Meter To Feet \n Meter = " + userValue + " To Feet = " + userValue * 3.28084);
        break;
   
}
const args = process.argv.slice(2);
let yearToCheck = parseInt(args[0]);
let isLeapYear = false;

if ((yearToCheck % 4 == 0 && yearToCheck % 100 == 0) || yearToCheck % 4 == 0) {
	isLeapYear = true;
} else {
	isLeapYear = false;
}
if(isLeapYear==true)
console.log(yearToCheck + " is a leap year  ");
else

console.log(yearToCheck + " is not a leap year");
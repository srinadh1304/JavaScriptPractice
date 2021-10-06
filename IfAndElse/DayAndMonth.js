const prompt = require('prompt-sync')();

let day = prompt("Enter day Of the Month : ");
let month = prompt("Enter month Of the Year : ");
console.log("Day : " + day + "/" + month );

day = parseInt(day);
month = parseInt(month);
if (month<3 || month>6) 
	console.log("False"); 
else if((day<20 && month==3) || (day>20 && month==6)) 
	console.log("False");
else
    console.log("True");
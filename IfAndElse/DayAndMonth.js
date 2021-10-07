const args = process.argv.slice(2);
let day = args[0];
let month = args[1];
console.log("Day : " + day + "/" + month );

day = parseInt(day);
month = parseInt(month);
if (month<3 || month>6) 
	console.log("False"); 
else if((day<20 && month==3) || (day>20 && month==6)) 
	console.log("False");
else
    console.log("True");
let numbers = [];
let sum =0;
let average = 0;


for(let i=0; i<5;i++){
    numbers[i] = Math.floor(Math.random()*100);
}

for(let number of numbers){
    sum += number;
}

average = sum/5;

console.log("sum: "+ sum+ " average: "+ average);
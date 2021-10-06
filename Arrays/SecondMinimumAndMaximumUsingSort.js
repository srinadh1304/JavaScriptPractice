let randomNumberArray = new Array();
let arraySize=10;
for(let index=0;index<arraySize;index++)
{
    let number=Math.floor(Math.random()*(900)+100);
    randomNumberArray.push(number);
}
console.log("Random Array:"+randomNumberArray)
randomNumberArray.sort();
console.log("Sorted array :"+randomNumberArray)

console.log("Second minimum number is: "+randomNumberArray[1])
console.log("Second maximum number is: "+randomNumberArray[arraySize-2])
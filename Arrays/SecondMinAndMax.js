let randomNumberArray = new Array();
for(let index=0;index<10;index++)
{
    let number=Math.floor(Math.random()*900)+100;
    randomNumberArray.push(number);
    console.log(number);
}
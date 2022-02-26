//1
ages = [3, 9, 64, 2, 8, 28,93];
 ages.push(20);
 firstElement = [ages.length - ages.length];
lastElement = [ages.length - 1];
console.log(lastElement - firstElement);
let sum= 0
for(i=0;i<ages.length;i++)
sum +=ages[i];
avg = sum/ages.length
console.log(avg)
//2
var names = ['Sam','Tommy','Tim', 'Sally', 'Buck','Bob']
 sum =0;
 for(i=0; i<names.length; i++){
sum += names[i].length;
} 
console.log(sum);
console.log(sum/names.length);
 str = '';
for(i=0;i<names.length; i++){
    str += names[i] + ",";

} console.log(str)

// 3.	How do you access the last element of any array?
    console.log("[array.length] -1");
// 4.	How do you access the first element of any array?
    console.log("[arry.length- array.length]");

 // 5.
     names  = ['Sam','Tommy','Tim', 'Sally', 'Buck','Bob']    
       nameLengths = [];     
     for(i=0; i<names.length; i++){
         nameLengths += names[i].length + ',';
     }
   console.log(nameLengths);

//6.
    nameLengths =[3, 5, 3, 5, 4, 3]
 sum = 0;
for(i=0;i<nameLengths.length;i++){
sum +=nameLengths[i];
 } 
 console.log(sum);

//7
 function repeatWord(word,n){
     if(n>0)
     return word.repeat(n)
     else
     return "Nothing"
 }
 console.log(repeatWord('Kelechi is learning, ', 3))
//8 
function fullName(firstName,lastName){
    console.log(firstName+' '+lastName)
}
fullName('Kelechi','Obilor');
//9.
a =[1,2,50,100]
 function greaterThan100(arr){
    sum =0
    for(i=0;i<arr.length;i++)
   sum +=arr[i];
    if(sum> 100)
return true
else 
return false
    
}
console.log(greaterThan100(a));
     // Another method I learnt
 sum = a.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
},0); if(sum>100){
console.log(true)
}else {
    console.log(false)
} 
//10.
b =[10,20,50,100]
function averageOfElement(arr){
    let sum =0
         for(i=0;i<arr.length;i++)
       sum +=arr[i];
        return avg = sum/arr.length
}
console.log(averageOfElement(a));

// 11.	Write a function that takes two arrays of numbers and returns true if the average of the
a =[1000,2,50,100]
b =[10,20,50,100]
function averageOfTwoArray(arr1,arr2){
    let sum1 = 0
    let sum2= 0
             for(i=0;i<arr1.length;i++)
            sum1 +=arr1[i];
         avg1 = sum1/arr1.length
         for(j=0; j<arr2.length; j++)
         sum2 +=arr2[j]
         avg2 = sum2/arr2.length
    if(avg1 > avg2)
    return true
    else
    return false
} 
console.log(averageOfTwoArray(a,b))

//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and 
function willBuyDrink(c,d){
    if(c === true && d >10.50)
    return true
    else
    return false
} 
isHotOutside = true
moneyInPocket = 50;
console.log(willBuyDrink(isHotOutside,moneyInPocket));
// 13 write a function called KelechitryingIsBest that will take a boolean havingSurgery and workScheduleCrazy and return only true if both parameters are true 
function KelechitryingIsBest(e,f){
    if(e === true && f === true)
    return true
    else
    return false
} 
havingSurgery = true
workScheduleCrazy = true
console.log(KelechitryingIsBest(havingSurgery,workScheduleCrazy));
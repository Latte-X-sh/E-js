//function1();
//let x = eval(prompt("Enter a number"))
/*
for(let count = 0;count < x; count ++){
let string = count;
if (count === 0){
document.write(string);
document.write("<br>");
}else{  
    document.write(string);
    document.write("<br>");
}
}*/
//Trial 1
/*
for (let count = 0 ;count < x; count ++){
    for(var  string = count; string < x;string ++){
        document.write("#");
        
    }
    
    document.write(count);
    document.write("<br>");
}*/
//Trial 2
/*
let count = 0;
while (count < x) {
    
document.write("#");
document.write("<br>");
count = count + 1;
    
}*/
//fizzbuzz
/*
for(let y = 0; y <= x; y++){
    if(y%3 == 0 && y%5 == 0){
    console.log(y,"FizzBuzz");
    }else{
        if( y%3 == 0 ){
        console.log(y,"Fizz");
        }if(y%5 == 0){
        console.log(y,"Buzz");
        }

    }
}*/
//Trial 1 -chessboard
/*
for (let count = 0 ;count < x; count ++){
    for(var  string = 0; string < x;string ++){
        //count and string variables to change
        if(count % 2 == 0){
             if(string % 2 != 0){
             document.write("#");
             }else{
                 //introduce &nbsp -non breaking space and this tells the browser to create a space between two items even if the browsers intends to wrap them.
                 document.write("&nbsp;");
             }
        }else{
            if(string % 2 == 0){
             document.write("#");
             }else{
                 document.write("&nbsp;");
             }
        }
    }
    document.write(count);
    document.write("<br>");
}*/
//functions
/*function function1(){
        let base=eval(prompt("Enter the base number for your program"));
        let exponent=eval(prompt("Enter the Exponent number for your program"));
        //recurssion example as got from the book
        function power(base,exponent){
            if(exponent == 0){
                return (1);
            }else{ //recurssion occuring in this particular line of code
                return base * power(base,exponent -1 );
            }
        }
       document.write(power(base,exponent)); //function call within the main function.
    }   
*/
/*function div(x){//trial 1
if(x%2 == 0){
return true,("even");
}if(x%2 == 1){
return false,("not even");
}else{
    return div(x-2); 
}
}*/
/*function div(x){//trial 2
if(x == 0){
    return "even";
}if(x == 1){
    return "odd";
}else{
   return div(x-2);
}
}*/
/*function div(x){//trial 3
if(x == 0){
    return "even";
}if(x == 1){
    return "odd";
}if(x < 0 || x > 1){
   return div(x-2);
}
}*/
//document.write(div(x));
/*not working code
function countBs(){
let wordy= prompt('Enter a string with b');
   
    for(let x =0;x < wordy.length;x++){
        if(wordy['B'] == true || wordy['b'] == true){
            let count = 0;
            count = count+1;
            return count;
        }
        
    }
}
console.log(countBs());*/
 /*code that has helped me understand how count works based on scope and hoisting
 for(let x = 0 ;x < wordy.length;x++){

count = count + 1;
}
return count;*/
//program to count only Bs.Concept on growing functions
/*
function countBs(){
let wordy= prompt('Enter a string with b');
let count = 0;
let x = 0;
function div(x){
let z = wordy.indexOf('B',x);
    if(z >= 0){
    x=z+1;
    count = count + 1;
    //console.log(z);
    div(x);//recurssive function so as to find the total number of Bs
    }else{
        console.log("Computing,Waiting for results.");
    }
}
setTimeout(function(){
    console.log(`The number of b(s) in the text is ${count}`);
},3000);
div(x);

}
countBs();*/
/*
function countChar(){
let wordy= prompt('Enter a string ');
let char =prompt("Enter one alphabetical character you want to count in the line/sentence");
let count = 0;
let x = 0;
function div(x){
let z = wordy.indexOf(char,x);
    if(z >= 0){
    x=z+1;
    count = count + 1;
    //console.log(z);
    div(x);//recurssive function so as to find the total number of Bs
    }else{
        console.log("Computing,Waiting for results.");
    }
}
setTimeout(function(){
    console.log(`The number of ${char}(s) in the text is ${count}`);
},3000);
div(x);

}
countChar();
 */
 //objects.
 /*
 let obj={
     left:1,
     right: 2,
 }
 console.log(obj.left);
 console.log(obj.right);
 obj.true ="true";
 console.log(obj.true);
 console.log(Object.keys(obj));//gets to see the properties within a particular object
 //copying data from one object to another.
 let newObj ={
     left:1,
     right:2,
 };
 let objectC =obj;
 /*let objectC ={
     new:'tets',
    };*///i want object C to have both the two objects in it.
//Object.assign(objectC,obj,newObj);
/*
console.log(objectC);
console.log(Object.keys(objectC));//new properties will be acquired by Object C.
obj.left = 5;
console.log(objectC);
console.log(newObj);
//const how it can be used under mutability.
const score = {visitors: 0, home: 0};// This is okay
score.visitors=2;
console.log(score);//this is okay.
console.log("coconut".indexOf("u",));
*/
//object exercises
//1st iteration of the code
/*
let start=eval(prompt("Enter the starting point of your range "));
let end = eval(prompt("Enter the end of your range"));
function range(start,end){
let numbers=[]//array for storing the numbers
    for(let i = start;i <= end;i++){
        numbers.push(i);
    }
 console.log(numbers);
let count =0;
//closure concept is important and scoping too.
    function sum(){//sum for each array element
        for(i = 0;i< numbers.length;i++){
        count+=numbers[i];
        }
        return count;
    }
return sum();    
}
console.log(range(start,end));*/
//2nd code iteration involves adding a 3rd parameter for the step in how numbers in the array are formed.
/*let start=eval(prompt("Enter the starting point of your range "));
let end = eval(prompt("Enter the end of your range"));
let step = eval(prompt("Enter the interval you want your array to appear"));
//let x =eval(prompt("Enter the range interval sequence of the array"));
function range(start,end,step){
let count =0;
let numbers=[];//array for storing the numbers
    for(let i = start;i <= end;i+=step){
        if(step == undefined){
            alert("Because step hasn't been defined,we will assume step is equal to 1.(recurssion)");
           return range(start,end,step = 1 );
        }else{
            numbers.push(i);
        }
        
    }
console.log(numbers);
//closure concept is important and scoping too.
    function sum(){//sum for each array element
        for(i = 0;i< numbers.length;i++){
        count+=numbers[i];
        }
        return count;
    }
return `The sum of the above array is ${sum()}`;
}
console.log(range(start,end,step));
*/
//reversing an array
/*function reverseArray(){
let arr =[];
let newArr=[];
let count = 0;
let x=eval(prompt("Enter the limit number you want your code to reach to"));
let step =eval(prompt("Enter the interval range of your numbers"));
for (let a = 0;a <= x;a +=step){
    arr.push(a);//we have random numbers based on the variables set.
}
//now we want to reverse the process
for(let z = 0 ; z < arr.length; z++){
    //declare a new array to store all this
   count +=1;
   newArr.push(arr[arr.length - count]);
  
}
console.log(newArr);
}*/
//part 2
//decided to rely on the unshift method to do what reverse method does.
/*function reverseArrayInPlace(){
let x=eval(prompt("Enter the limit number you want your code to reach to"));
let step =eval(prompt("Enter the interval range of your numbers"));
//same array modifying and not using another new array to print the opposite
let newArray=[];
for(let q=0 ; q<x;q+=step){
 newArray.unshift(q);
} 

console.log(newArray);
}
reverseArrayInPlace();*/
//part 3
//understanding how the reverse array method works
/*let newArr=[];
for(let n =0; n<10;n++){
    newArr.push(n)
}
console.log(newArr.reverse());*/
//creating a list using objects.
//1st try
/*function arrayToList(){
let x = eval(prompt("Enter how many lists you want."));
let list={
    a:0,
    };
let rest = {
    a:1,
    };

if(x == 0){
console.log(list);
}if(x == 1 ){
list.b = rest;
console.log(list);
}
else{
for(n=2;n <= x; n++){
let other={};
Object.assign(other,rest);
list.b = rest;
rest.b =other;
other.a = x;
console.log(list);
    }

}
}
arrayToList();*/
//the new instance of the object is what we call our node or new list
//list
//1st object holding reference to the second object.
/*let x = 1;
let node;
let object={
    number:x, 
    rest:0,
};
node = object;//both variables point to the mutable data type the object
node.rest = node;//points to an object that points to another 
console.log(node);*/
//the result is a continous nested object(list).Though this is just the prototype
//2nd try using for loop
//declare a global object
/*let x ;
let y =3;
let node;//new object instance
let list={
    number:x,
    rest:0,
}
node = list; //node is equal as list.so they share the same property
//console.log(node); will show us node is equal to list
for(let z = 0;z < y; z++){
    for( x = 0 ;x < z;x++){
    node.number = x;
    }
    list.rest = node;
}
console.log(list);*/
let x =("12 12 23 23 43");
let y = [];
for(let a = 0 ; a<x.length;x++){
   
    if(x[x] == " "){
        y.push(0);
    }else{
    let z =eval(x[x]);
    y.push(z);
    }
}
console.log(y);



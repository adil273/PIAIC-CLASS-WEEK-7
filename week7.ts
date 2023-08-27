//PUT SIMPLE FUCNTION INTO ARROW FUNCTION
function test1(n1:number){

    console.log(n1)
}
test1(20);
// ARROW FUNCTION
const test2 = (n1:number) =>{
    console.log(n1)
}
test2(40);

//DELETE NUMBERS IVE OR EVEN/ODD FROM AN ARRAY WITH SPLICE METHOD
//EXAMPLE 1/3
let array1:number[]=[2,3,4,55,67,68];
for(var i:number=0;i<array1.length;i++){
if(array1[i] % 2 == 0){
    array1.splice(i,1);
    i--;
  
}
}
console.log(array1);

// //EXAMPLE 2/3
let array2:number[]=[-1,2,3,-1,-5,55,67,-6,-7,98,68,-68];
for(var i:number=0;i<array2.length;i++){
if(array2[i] > 0){
    array2.splice(i,1);
    i--;
  
}
}
console.log(array2);

// //EXAMPLE 3/3
let array3:number[]=[1,2,3,1,5,55,67,6,7,98,68,73,73,68];
while(i<array3.length){
if(array3[i] % 2 == 0){
    array3.splice(i,1);
        }
else{
  i++;
    }
}
console.log(array3);

// MAP (RETURN SAME LENGTH)
//EXAMPLE 1/2
let array4:number[]=[1,2,3,4,5,6,7,8,9,10];

let updatedarray4=array4.map((number)=>
{

if(number % 2 == 0){
    
return "even";
  
}
  
else{
    
return "odd";
  
}
});

console.log(updatedarray4);

//EXAMPLE 2/2
let array5:number[]=[13,22,33,14,55,26,47,18,9,110];
let UpdatedArray5=array5.map((age)=>{
  if(age>=18){
    return "vote";
  }  
  else{
    return "not vote";
  }
})
console.log(UpdatedArray5);

//FILTER (RETURN SAME LENGTH OR LESS)
//EXAMPLE 1/2
let array6:number[]=[13,22,33,14,55,26,47,18,9,110];
let UpdatedArray6=array6.filter((age)=>{
  if(age>=18){
    return "vote";
  }  
  
})
console.log(UpdatedArray6);

let array7:number[]=[13,22,33,14,55,26,300,43,47,18,9,110];
let UpdatedArray7=array7.filter((age)=>{
  if(age>18){
    return true;}
});
console.log(UpdatedArray7);

//FOREACH (RETURN NOTHING)
//EXAMPLE 1/1

let names:string[]=["Ali","Ahmad","Aslam"];
names.forEach((data) => {
  console.log("Your class on time", data);
});



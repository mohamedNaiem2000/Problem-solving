problem=[
    {  "number":1,"title":"Even Or Odd" },
    {  "number":2,"title":"Even" },
    {  "number":2,"title":"Even" },
    {  "number":2,"title":"Even" },
    {  "number":2,"title":"Even" }, 
]
let btn1=document.querySelector(".btn1");
console.log(btn1);
let result= problem.map((obj)=>{
    return `<div>
          number-  ${ obj.number}
          name-  ${obj.title}
             <button>finish</button>
          </div>
           `
});
document.write(result)
/*----------------------------------------*/
//problem 1
// function evenorodd(value){
//     if(value%2===0){
//         console.log("Even");
//     }
//     else{
//         console.log("odd");
//     }
// }

// evenorodd(2 );
// //another solution
// function evorod(number){
//     return number%2==0 ?"even":"odd";
// }
// console.log(evorod(5));
/*--------------------------------------*/
//problem 2
let sum=0;
function sumposetive(arr){
for (let i = 0; i < arr.length; i++) {
    if(arr[i]>0){
        sum += arr[i];
    }   
}
console.log(sum);
}
sumposetive([5,6,-7,8,9,-4]);
//another solution
function sumition(arr){
    return arr.filter((x)=>x>1).reduce((acc,current)=>acc+current,0)
}

console.log(sumition([1,2,3,-3,6,-9]));
/*------------------------------------------*/


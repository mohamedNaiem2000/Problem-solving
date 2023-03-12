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
function evenorodd(value){
    if(value%2===0){
        console.log("Even");
    }
    else{
        console.log("odd");
    }
}
evenorodd(2 );
//another solution
function evorod(number){
    return number%2==0 ?"even":"odd";
}
console.log(evorod(5));
/*--------------------------------------*/

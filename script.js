problem = [
  { number: 1, title: "Even Or Odd" },
  { number: 2, title: "sum without negative" },
  { number: 2, title: "Even" },
  { number: 2, title: "Even" },
  { number: 2, title: "Even" },
];
let btn1 = document.querySelector(".btn1");
console.log(btn1);
let solve = problem.map((obj) => {
  return `<div>
          number-  ${obj.number}
          name-  ${obj.title}
             <button>finish</button>
          </div>
           `;
});
document.write(solve);
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
// let sum=0;
// function sumposetive(arr){
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]>0){
//         sum += arr[i];
//     }
// }
// console.log(sum);
// }
// sumposetive([5,6,-7,8,9,-4]);

// //another solution

// function sumition(arr){
//     return arr.filter((x)=>x>1).reduce((acc,current)=>acc+current,0)
// }

// console.log(sumition([1,2,3,-3,6,-9]));
/*------------------------------------------*/
//problem3

// function sumwithouthm(arr) {
//   if (arr == null) return 0;
//   return arr
//     .filter((x) => x !== Math.min(...arr) && x !== Math.max(...arr))
//     .reduce((acc, current) => acc + current, 0);
// }
// console.log(sumwithouthm([1, 6, 8, 2,9,12]));
//another solution
// function sumouthm(arr) {
//     let maxvalue = Math.max(...arr);
//     let minvalue = Math.min(...arr);
//     let filterarr = arr.filter((x) => x !== maxvalue && x !== minvalue);
//     let result=filterarr.reduce((acc, current) => acc + current, 0);
//     console.log(result);
//   }
//   sumouthm([1, 6, 8, 2,9,12]);

//another solution هنا لو اصغر او اكبر رقم متكرر بيشيل واحد بس
function sumhm(arr) {
  if (arr === null) return 0;
  return arr
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, current) => acc + current, 0);
}
console.log(sumhm([1,1,6,8,2,9,12,12]));
/*-------------------------------------*/

problem = [
  { number: 1, title: "Even Or Odd" },
  { number: 2, title: "sum without negative" },
  { number: 3, title: "sum without max and min" },
  { number: 4, title: "repeat string" },
  { number: 5, title: "revese number" },
  { number: 6, title: "counter true" },
  { number: 7, title: "get opposite" },
  { number: 8, title: "make negative" },
  { number: 9, title: "correct code" },
  { number:10, title: "find Neddle" },
  { number:11, title: "count Positive Sum Negatives"}
];
let btn1 = document.querySelector(".btn1");
console.log(btn1);
let solve = problem.map((obj) => {
  return `<h3>
          number-  ${obj.number} name-  ${obj.title} <button>finish</button>
          </h3>
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
// function sumhm(arr) {
//   if (arr === null) return 0;
//   return arr
//     .sort((a, b) => a - b)
//     .slice(1, -1)
//     .reduce((acc, current) => acc + current, 0);
// }
// console.log(sumhm([1,1,6,8,2,9,12,12]));
/*-------------------------------------*/
//problem 4
// function repeatstr(number,str){
//     for(let i=0;i<number;i++){
//         return str.repeat(number);
//     }
// }
// console.log(repeatstr(4,"moh "));
/*----------------------------------------*/
//problem 5
// function digitize(num){
// return num.toString().split("").map((x)=>Number(x)).reverse();
// }
//  console.log(digitize(98563));
/*----------------------------------------*/
//problem 6
//  let calc=0;
// function countsheep(arr){
// for (let i = 0; i < arr.length; i++) {
//   if(arr[i]===true){
//     calc++;
//   }

// }
// return calc;
// }
// console.log(countsheep([true,false,true,false,true,false,
//   true,false,true,false,]));

//another solution
// function countsheep(arr){
//   let calc=0;
//   arr.map((item)=>{
//     if(item===true)calc++;
//   })
//   return calc;
// }
// console.log(countsheep([true,false,true,false,true,false,
//   true,false,true,false,]));
/*-----------------------------------------------*/
//problem 7
// function getoppesite(num){
//  return num * -1;
// }
// console.log(getoppesite(-6));
/*-----------------------------------------------*/
// problem 8
//  function makenegative(num){
//   return num > 0 ? -num: num
//  }
//  console.log(makenegative(-5));
/*-------------------------------------------------*/
//problem9
// function greet(name){
//   return name !=="johnny"? "hello ,"+ name:"hello my love"
// }
// console.log(greet("mohamed"))
// console.log(greet("johnny"));
/*-----------------------------------------------*/
//problem 10
// function findNeddle(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "neddle") {
//       return `found the neddle at index ${i}`;
//     }
//   }
// }
// console.log(findNeddle(["ahmed","ali", "neddle","omar"]));

//another solution
// function findNeddle(arr){
//   return "found the neddle at index" + arr.indexof("neddle")
// }
// console.log(findNeddle(["ahmed","ali", "neddle","omar"]));

/*-----------------------------------------------*/
//problem 11
// let calcnegative = 0;
// let numberofpostive = 0;
// function countPositiveSumNegatives(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       calcnegative += arr[i];
//     }
//     else{
//       numberofpostive+=1;
//     }
//   }
//   return [numberofpostive,calcnegative];
// }
// console.log(countPositiveSumNegatives([1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15]));
 //another solution
//  function countPositiveSumNegatives(arr){
//   let calcnegative = arr.filter((x)=> x>0).length;
//   let numberofpostive = arr.filter((x)=>x<0).reduce((acc,current)=>acc+current,0);
//   return [numberofpostive,calcnegative];
//  }
//  console.log(countPositiveSumNegatives([1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15]));
/*-----------------------------------------*/
//problem 12
// string = ssttrriinngg

function doubleChar(str){
  return str.split("").map((char)=>char.repeat(2)).join("")
}
console.log(doubleChar("hello"));
/*------------------------------*/
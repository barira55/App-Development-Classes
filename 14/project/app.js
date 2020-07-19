// var a= new Date();
// console.log(a);

// var b = a.toString();
// console.log(b);

// var c = b.slice(0,3);
// console.log(c);

// console.log(a);

// d = a.getDay();
// console.log(d);

// e = a.getMonth();
// console.log(e);

// f = a.getSeconds();
// console.log(f);

// g = a.getHours();
// console.log(g);

// h = a.getFullYear();
// console.log(h);




// dob = new Date("Nov 17, 1997");
// dobmili = dob.getTime;
// today = new Date();
// todaymili = today.getTime();
// console.log(dobmili);
// console.log(todaymili);
//  diff = todaymili - dobmili;
// console.log(diff);
// diffyear = diff / (1000 * 60 * 60 * 24 * 30 * 12);
// console.log(diffyear);
// accurate = Math.floor(diffyear);
// console.log(accurate);


// var a= new Date();
// b = a.setFullYear(2001);
// console.log(a);


// // FUNCTIONS

// function greeting(){
//     alert("hello world")
// }
// greeting();

// // 2
// function greeting(greet){
//     alert(greet)
// }
// greeting("hello world");

// //3
// function add(a,b,c){
//     alert(a+b+c)
// }
// add(5,8,11);

// //4
// function add(a,b,c){
//     z = a+b+c;
//     return z;
// }
// g= add(5,8,11);
// alert(g);

// //5 error b/c global var 
// function add(a,b,c){
//     f = 15;
//     z = a+b+c;
//     return z;
// }
// g= add(5,8,11);
// alert(f);

// //6
// h = 15;
// function add(a,b,c){
//     alert(h);
//     z = a+b+c;
//     return z;
// }
// g= add(5,8,11);
// alert(g);

// //7
// function agecalc(){
// dob = new Date("Nov 17, 1997");
// dobmili = dob.getTime;
// today = new Date();
// todaymili = today.getTime();
// console.log(dobmili);
// console.log(todaymili);
//  diff = todaymili - dobmili;
// console.log(diff);
// diffyear = diff / (1000 * 60 * 60 * 24 * 30 * 12);
// console.log(diffyear);
// accurate = Math.floor(diffyear);
// console.log(accurate);
// }
// agecalc();

// // revision of function
// //1
// // console.log("hello");
// function first(){
//     alert("hello world");
// }
// // console.log(" world");
// first();
// first();
// first();
// first();
// first();

// //2
// function first(a, b) {
//     // return a + b;
//     return "hello";
// }
// console.log(first (2,3));
// console.log(first (10,5));
// console.log(first (4,4));

// //3 o/p= she
// a = "bia";
// function foo() {
//     a = "she";
// }
// foo();
// console.log(a); //b/c var a updated b/c function call in above line

// //4 o/p = bia
// a = "bia";
// function foo() {
//     a = "she";
// }
// console.log(a);

// //5 calculator
// function calc (num1, opr, num2){
//     if (opr === "+"){
//         return num1 + num2;
//     }
//     else if (opr === "-"){
//         return num1 - num2;
//     }
//     else if (opr === "/"){
//         return num1 / num2;
//     }
//     else if (opr === "*"){
//         return num1 * num2;
//     }
//     else{
//         return"Incorrect operator";
//     }
// }
// var result = calc (5, "-", 5);
// var result1 = calc (4,"+",6);
// var result2 = calc (4,"$",9);
// console.log(result);
// console.log(result1)
// console.log(result2);

// //6 o/p NaN b/c b not defined
// function foo(a,b){
//     return a+b;
// }
// console.log(foo(1));

// //7 o/p 4
// function foo(a,b=3){
//     return a+b;
// }
// console.log(foo(1));

// //8
// function foo(a,b=3){
//     return a+b;
// }
// console.log(foo(1,5));

// //9 o/p undefined
// function foo() {

// }
// console.log(foo(1, 5));

// SWITCH STATEMENT

// // 1
// name = "she"
// switch (name) {
//     case "bia":
//         alert("hello bia");
//         break;
//     case "she":
//         alert("helllo she");
//         break;
//     default:
//         alert("hello");
//         break;
// }




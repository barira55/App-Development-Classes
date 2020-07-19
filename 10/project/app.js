// var a = + prompt("enter value","your value is:");
// // alert(a);
// var b = a + 10; 
// console.log("The output is" + " " + b);
 

// var x = "enter value";
// var y = "your value is:"
// var a = +prompt(x,y);
// var b = a + 10;
// console.log("the output is " , + " " + b);

// var x = "enter value";
// var y = "your value is:"
// var a = +prompt(x,y);
// var b = a + 10;
// document.write("the output is " , + " " + b);

// var age = 16;
// if (age < 28){
//     alert("your age is less")
// }
// else {
// alert("you are no more with less age")
// }

// var age = +prompt("Enter age");
// if (age == 22)
// {
//     alert("you are bia's age");
// }
// else if (age <= 19)
// {
//     alert("your age on teens")
// }
 
// else(age >= 20)
// {
// alert("you are no more with less age")
// }

// var age = +prompt("enter age");
// var gender = prompt("enter gender");
// // if (age > 18 && gender == 'male')
// if (age > 18 || gender == 'male')
// {
//     alert("you are allowed to ride")
// }
// else{
//     alert("you are not allowed")
// }

// var a = "5";
// if (a === 5)
// {
//     alert("true")
// }
// else 
// {
//     alert("false")
// }

// var x = 5;
// var y = 10;
// var a = 30;
// var b = 15;
// if (x+y === a-b)
// {
//     alert('correct')
// }
// else
// {
//     alert('incorrect')
// }

// var a = 10;
// if (a !== 15)
// {
//     document.write("correct")
// }
// else
// {
//     document.write('incorrect')
// }

// MARKSHEET

// var percent = +prompt("enter your percent")
// if (percent >= 80 && percent <= 100)
// {
//     alert("A+")
// }
// else if (percent >=60 && percent <= 70)
// {
//     alert("B+")
// }
// else if (percent >=50 && percent <= 60)
// {
//     alert("C")
// }
// else if (percent >=40 && percent <= 50)
// {
//     alert("D")
// }
// else if (percent >=30 && percent <= 40)
// {
//     alert("E")
// }
// else if (percent >=0 && percent <= 30)
// {
//     alert("F")
// }
// else
// {
//     alert("You didn't write correct percent")
// }


// var name = "bia";
// var name1 = "she";
// var name2 = "zee";
// console.log(name1)
// console.log(name2)


// var students = ["bia", "she", "zee",123]
// document.write(students[0])
// alert("welcome " + students[3] )

// var names = [];
// names[0] = "bia";
// names[1] = "she";
// console.log(names)

var students = ["bia", "she", "zee",123]
students.pop()
students.push("hello")
students.shift()
students.unshift("ammi", "abbu")
students.splice(0,2,"anty")

console.log(students)
// anty, she, zee, hello
var copyStudents = students.slice(1,3)
console.log(copyStudents)
// she, zee
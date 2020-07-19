// var arr = ["cat", "dog", "tiger", "elephant"];
// console.log(arr[2]);

// var arr1 = new Array ("bia", "she", "ami");
// console.log(arr1); 

// arr[4] = "lion";
// console.log(arr);

// var x;
// for (x = 1; x <= 10 ; x= x+2)
// {
//     console.log(x)
// }

// for (var i = 0; i<5 ; i++)
// {
//     alert("hello world")
// }

// for (var a = 1 ; a<=10 ; a++) 
// {
//     document.write("2" + "x" + a + "=" + 2*a + "<br>")
// }

// var names = ["bia", "she", "zuni"];
// for ( var a= 0; a< names.length; a++)
// {
// document.write(names[a] + "<br>")
// }

// var cities = ["khi", "lhr", "isb"];
// for (var a=0 ; a < cities.length; a++)
// {
//     if (cities[a] == "khi")
//     {
//         alert(cities[a] + " is the cleanest city")
//         break
//     }
//     // console.log(cities[a])
// }

// for (var i=1; i > 0; i++)
// {
//     if (i === 10)
//     {
//         break;
//     }
//     console.log("hello")
// }
 
// for (var i= 0 ; i<5; i++)
// {
//     for (var j=0 ; j<3 ; j++)
//     {
//         document.write("pakistan zindabad" + "<br>")
//     }
// }

// var firstNames = ["bia", "she", "zuni"]
// var lastNames = ["na", "nas", "nash"]
// for (var i=0; i < firstNames.length; i++)
// {
//     for(var x=0; x < lastNames.length; x++)
//     {
//         console.log(firstNames[i] + " " + lastNames[x])
//     }
// }

// for (var i=0; i < 10; i++)
// {
//     for (var j=0; j< i ; j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }

// run in console
// var name = "bia";
// name[0]
// name[1]
// name[2]

// to reverse a string
// var word = prompt("enter your word");
// var check; 
// for (var i= word.length -1 ; i>=0 ; i--)
// {
//     console.log(word[i] )
// }

// // to check word is paralgram or not
// var word = prompt("enter your word");
// var check = ""; 
// for (var i= word.length -1 ; i>=0 ; i--)
// {
//    check += word[i];
// }
// if (check === word)
// { 
//     console.log(word + " is palindrome word");
// }

// // changing case 
// var name  = "bia";
// name = name.toUpperCase();
// console.log(name)

// // finding segments
// var name = "bia kahn";
// console.log(name.indexOf("a"))

// // calculator
// var val1 = prompt('enter your first value')
// var sign = prompt('enter operator')
// var val2 = prompt('enter your second value')


// console.log(val1 + sign + val2)

// if (sign === '+'){
//     alert((+val1) +(+val2))
// }
// else if (sign === '-'){
//     alert(val1-val2)
// }
// else if (sign === '*'){
//     alert(val1*val2)
// }
// else if (sign === '/'){
//     alert(val1/val2) 
// }
// else if (sign === '%'){
//     alert((val1/val2)*100 + "%")
// }

var equ = prompt('enter your equation');
var num = equ.length;
for (var i=0; i<num ; i++ )
{
    if (equ.slice(i,i+1) === '+' || equ.slice(i,i+1) === '-' || equ.slice(i,i+1) === '*' || equ.slice(i,i+1) === '/')

    {
        alert(sign)
    }
}
// for (var a = 1; a <= 100; a = a + 10) {
//     for (b = a; b < a + 10; b++) {
//         document.write(b + "  ");
//     }
//     document.write("<br>")
// }

// // CHANGING CASE

// var city = prompt("Enter your city name");
// var arr = ['Karachi', 'Islamabad', 'Peshawar']
// for (var i= 0 ; i<arr.length; i++) {
//     if (arr[i] === city ){
//         alert("city has found");
//     }
//     else {
//         alert("city not found");
//     }
// }

// var city = prompt("Enter your city name");
// city = city.toLowerCase();
// var arr = ['karachi', 'islamabad', 'peshawar']
// for (var i= 0 ; i<arr.length; i++) {
//     if (arr[i] === city ){
//         alert("city has found");
//     }
//     else {
//         alert("city not found");
//     }
//     break;
// }

// // MEASURING LENGTH AND EXTRACTING PARTS

// var city = prompt("Enter your city name");
// var firstChar = city.slice(0,1);
// firstChar = firstChar.toUpperCase();
// var otherChar = city.slice(1);
// otherChar = otherChar.toLowerCase();
// var city = firstChar + otherChar;
// console.log(city);
// var arr = ['Karachi', 'Islamabad', 'Peshawar']
// for (var i= 0 ; i<arr.length; i++) {
//     if (arr[i] === city ){
//         alert("city has found");
//     }
//     else {
//         alert("city not found");
//     }
//     break;
// }

// // CHECK DOUBLE SPACES

// var str = prompt("Enter some text");
// var numChars = str.length;
// console.log(numChars);
// for (var i = 0; i < numChars; i++) {
//     if (str.slice(i, i + 2) === "  ") {
//         alert("Double spaces found!");
//         break;
//     }
// }

// // FINDING SEGMENTS

// // REPLACING PARTICULAR TEXT

// var text = "The New Yorker magazine doesn't allow the phrase World War II.  They say it should be the Second World War.So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers. It is startling to think that, even in the darkest depths of World War II, J.R.R.Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his."

// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//         console.log(text);
//     }
// }

// // FINDING INDEX OF AND REPLACING WORD

// var text = "The New Yorker magazine doesn't allow the phrase World War II.  They say it should be the Second World War.So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers. It is startling to think that, even in the darkest depths of World War II, J.R.R.Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his."
// var indexNum = text.indexOf("World War II");
// console.log(indexNum);
// firstText = text.slice(0,indexNum);
// replaceText = "The second world war";
// thirdText = text.slice(indexNum+12);
// console.log(firstText + replaceText + thirdText);

// // FINDING LAST INDEX OF AND REPLACING

// var text = "The new Yorker magazine doesn't allow the phrase World War II.  They say it new should be the Second World War.So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers. It is startling to think that, even in the darkest depths of World War II, J.R.R.Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his."
// var indexNum = text.lastIndexOf("new");
// console.log(indexNum);
// firstText = text.slice(0,indexNum);
// replaceText = "The second world war";
// thirdText = text.slice(indexNum+12);
// console.log(firstText + replaceText + thirdText);

// var a = "bia";
// console.log(a.charAt(2))

// var para = "this is example";
// para1 = para.replace("example", "text")
// console.log(para1)

// var para = "this is example, this is example";
// para1 = para.replace(/example/g, "text")
// console.log(para1)

// var num = 1.2;
// round = Math.ceil(num);
// console.log(round);

// // GENERATING RANDOM NUMBERS

// var headsuser = prompt("enter heads username");
// var tailssuser = prompt("enter tails username");
// var toss = Math.random() * 2;
// var floor = Math.floor(toss);
// console.log(floor);
// if (floor === 0){
//     alert("heads " + headsuser + " winner");
// }
// else {
//     alert("Tails " + tailssuser + " winner");
// }

// a = Number("10");
// console.log(a)
// a = parseInt("10");
// console.log(a);

// a = 10;
// console.log(a.toString())

// CONTROLLING LENGTH OF DECIMAL POINT

var num = 10.543458234;
var cont = num.toFixed(2);
console.log(cont)
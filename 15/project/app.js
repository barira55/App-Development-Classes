// for(a=0; a<10; a++){
//     console.log(a)
// }

// //WHILE LOOP
// b = 0;
// while(b<10){
//     console.log(b);
//     b++;
// }

// //DO WHILE LOOP
// c = 0;
// do{
//     console.log(c)
//     c++
// }
// while(c<10)

// // EVENTS

// function foo(){
//     alert("hello world")
// }

// function foo(greet){
//     alert(greet)
// }

// function clickBtn(){
//     alert("click")
// }

// function getName(){
//     var name = document.getElementById("name");
//     console.log(name.value);
//     name.value = ""
// }

// function setName(){
//     var name = document.getElementById('name')
//     name.value = "bia"
//     var para = document.getElementById("para")
//     para.innerHTML = "hello this is example"
// }
// setName()


// calculator

function getNumber(num) {
    var result = document.getElementById("result");
    result.value += num;
}

function clearResult() {
    var result = document.getElementById("result");
    result.value = "";
}

function getResult() {
    var result = document.getElementById("result");
    console.log(result.value);
    result.value = eval(result.value);
}

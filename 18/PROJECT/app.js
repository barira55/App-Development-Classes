// //1
// var list = document.getElementById("li1")
// console.log(list)

// //2
// var list = document.getElementsByTagName("li")
// console.log(list)

// //3
// var list = document.getElementsByTagName("li")
// console.log(list[3])

// //4
// var list = document.getElementsByTagName("li")
// console.log(list.length)

// //5
// var target = document.getElementById("p1")
// if (target.hasAttribute("class")){
//     alert("available")
// }
// else{
//     alert("na")
// }

// console.log(target.getAttribute("id"))
// target.setAttribute("class","blue")
// console.log(target.attributes)
// console.log(target.attributes[1].nodeName)
// console.log(target.attributes[1].nodeValue)

// //chp 67
// //6
// var p = document.createElement("p")
// console.log(p)
// var text = document.createTextNode("hello world")
// p.appendChild(text)
// var main = document.getElementById("main")
// main.appendChild(p)

//7
function addMessage(){
    var val = document.getElementById("val")
    var p = document.createElement("p")
    var textNode = document.createTextNode(val.value)
    p.appendChild(textNode)
    var message = document.getElementById("message")
    message.appendChild(p)
    val.value = ""
}



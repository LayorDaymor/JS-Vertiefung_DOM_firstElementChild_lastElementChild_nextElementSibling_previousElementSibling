const buttons=document.querySelectorAll("button");
const list =document.querySelector("#myList");
const output=document.querySelector("output");
buttons[0].addEventListener("click",e=>{
output.innerHTML=list.firstElementChild.innerHTML
})

buttons[1].addEventListener("click",e=>{
    output.innerHTML=list.lastElementChild.innerHTML
})

buttons[2].addEventListener("click",e=>{
    output.innerHTML=list.firstElementChild.nextElementSibling.innerHTML
})

buttons[3].addEventListener("click",e=>{
    output.innerHTML=list.lastElementChild.previousElementSibling.innerHTML
})



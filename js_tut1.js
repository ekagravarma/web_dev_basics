let hash1 = document.getElementById("nav")
console.log(hash1)
let hash2= document.getElementsByClassName("container")
console.log(hash2)
let hash3 =  document.querySelector("#nav>li")
console.log(hash3)
//let hash4 = document.getElementById("btn")
let btn = document.getElementById("btn")
let para = document.getElementById("para")
function togglehide()
{

    if (para.style.display != 'none')
    {
        para.style.display= 'none'
    }
    else
        para.style.display = 'block'
}
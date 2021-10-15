const colorChange = (id) =>{
let elem =document.getElementById(id)
let elemColor = getComputedStyle(elem).backgroundColor
let result = document.getElementById("colors");
result.style.backgroundColor=elemColor;
result.innerHTML= elemColor
}
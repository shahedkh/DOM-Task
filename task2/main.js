const colors=["blue","red","green"];
let i = 0;
const changeColor = () =>{
    i = i < colors.length-1 ? ++i : i = 0;
    document.getElementById("changeColor").style.background = colors[i]
}

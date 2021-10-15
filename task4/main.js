const div2 =document.getElementById("div2")

const selectFontFamily= () =>{
    let textFontFamily = document.getElementById("fontFam").value;
    div2.style.fontFamily = textFontFamily;
}

const selectFontSize= () =>{
    let textFontSize =document.getElementById("fontSiz").value;
    div2.style.fontSize = textFontSize ;
}

const italic= () =>{
    let italicSelected = document.getElementById("Italic").checked;
    italicSelected? div2.style.fontStyle = "italic": div2.style.fontStyle = "unset"
}

const makeBold= () =>{
    let boldSelected = document.getElementById("bold").checked;
    boldSelected?div2.style.fontWeight  = "bold" :div2.style.fontWeight  = "unset" ;
}
const makeUnderLine= () =>{
    let underLineSelected = document.getElementById("underline").checked;
    underLineSelected?div2.style.textDecoration = "underline":div2.style.textDecoration = "unset" ;
}
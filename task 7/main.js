const addSong =(event) =>{
    event.preventDefault();
    let x = document.getElementById("text").value ;
    let tag = document.createElement("div");
    let element = document.getElementById("new");
    element.appendChild(tag);
    tag.innerHTML=x
    tag.style.backgroundColor="rgb(196, 196, 196)"
    tag.style.border="1px solid black"
    tag.style.height = "40px"
    tag.style.fontSize="30px"
}
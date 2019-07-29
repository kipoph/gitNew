var list = document.getElementById("list");
var h1= document.getElementById("our-headline");
var button=document.getElementById("ourButton");
var newItemCounter=1;


list.addEventListener("click", activateItem)
button.addEventListener("click", createNewItem);

function activateItem(e){
    if("LI"==e.target.nodeName){
        var ListLength = document.getElementById("list").getElementsByTagName("li").length;
         
        for(i=0;i<ListLength;i++){
            e.target.parentNode.children[i].classList.remove("active");
        }
        e.target.classList.add("active");
        h1.innerHTML=e.target.innerText;
    }
    
}

function createNewItem() {
    list.innerHTML += "<li>Somthing new number: "+newItemCounter+"<hr></li>";
    newItemCounter++;
}

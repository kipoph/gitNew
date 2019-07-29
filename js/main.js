var listItems = document.getElementById("list").getElementsByTagName("li");
var list = document.getElementById("list");
var h1= document.getElementById("our-headline");
var listLength=listItems.length;
var button=document.getElementById("ourButton");
var newItemCounter=1;
document.write(listItems[1].innerText)
for(i=0;i<listLength;i++)
{
    listItems[i].addEventListener("click", activateItem);
}
function activateItem() {
    for(i=0;i<listLength;i++)
    {
        listItems[i].classList.remove("active");
    }
    h1.innerHTML=this.innerHTML;
    this.classList.add("active");
}

button.addEventListener("click", createNewItem);

function createNewItem() {
    list.innerHTML += "<li>Somthing new number: "+newItemCounter+"<hr></li>";
    newItemCounter++;
}

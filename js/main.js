var listItems = document.getElementById("list").getElementsByTagName("li");
var h1= document.getElementById("our-headline");
var listLength=listItems.length;
for(i=0;i<listLength;i++)
{
    listItems[i].addEventListener("click", activateItem);
}
function activateItem() {
    h1.innerHTML=this.innerHTML;
}

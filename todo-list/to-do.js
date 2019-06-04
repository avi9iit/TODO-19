var ul =document.getElementById('mylist');
var add=document.getElementById('bt');
var removeall=document.getElementById('removeall');



function adl(){
var inputText =document.getElementById('txt').value;
var li=document.createElement('li');

 var node=document.createTextNode(inputText);

 var removebutton=document.createElement('button');
document.getElementById('txt').value="";

if(inputText.length === 0)
{
    alert('empty box');
 
}
else{
removebutton.className="remove";
removebutton.innerHTML="REMOVE!!!";
removebutton.setAttribute("onclick","removeme(this)");
var check=document.createElement('input');
check.type="checkbox";
check.setAttribute("onclick","ch(this,this.checked)");

li.appendChild(check);
li.appendChild(node);
li.appendChild(removebutton);

ul.appendChild(li);
}
}
function removeme(item){
    var parent=item.parentElement;
    parent.parentElement.removeChild(parent);
}
removeall.onclick=function()
{
    ul.innerHTML="";
}
function ch(item,ischecked)
{
    if(ischecked)
    {
        item.parentElement.style.backgroundColor="green";
    }
    else{
        item.parentElement.style.backgroundColor="peachpuff";
    }
}
menuListArray = ["Pizza Vegetariana",
"pizza de frango","pizza portuguesa","pizza quatro queijos","pizza de calabresa","pizza extravaganza"];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0;i,menuListArray.legth;i++){htmldata=htmldata+ menuListArray[i]  + '<br>'}
document.gerelementbyid("displaymenu").innerhtml = htmldata;
}

function addItem(){
var htmldata;
var imgtags='<img id="im1" src""images/pizzaimg.png"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.legth;i++){
 htmldata=htmldata+imgtags+ menuListArray[i]+"<br>";   
}
document.getElementById("displayaddedmenu").innerHTML = htmldata;
}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();    
}
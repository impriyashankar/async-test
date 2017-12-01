//choose from listbox
var sel=document.querySelector('select');
var pree=document.querySelector('pre');

sel.onchange=function(){
	
	var val=sel.value;
	updateDisplay(val);
}
function updateDisplay(val){
//choose txt file based on val parameter and populate the contentin pre box.
console.log("in fn");
console.log(val);
val=(val.replace(" ","").toLowerCase())+".txt";
/*this text file needs to be requested for over the server.
for that we use XHR*/
	
	var request=new XMLHttpRequest();
request.open("GET",val);
request.send();
request.onload=function(){
	pree.textContent=request.response;


}


}
updateDisplay("Verse 1");

//based on choice update verse in pre box.

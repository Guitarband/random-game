var link = document.createElement('link');
  
// set the attributes for link element 
link.rel = 'stylesheet'; 

link.type = 'text/css';

link.href = 'style.css';




var incrementAmount = 0;
function StartUp(){
	var output = "\nTotal Increments:	0";
	document.getElementById("totalIncrements").innerHTML = output.appendChild(link);
}
StartUp();

function Increment(){
	incrementAmount = incrementAmount + 1;
	var output = " Total Increments:	" + incrementAmount;
	document.getElementById("totalIncrements").innerHTML = output.appendChild(link);
}

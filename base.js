/*var link = document.createElement('link');
  
// set the attributes for link element 
link.rel = 'stylesheet'; 

link.type = 'text/css';

link.href = 'main.css';

*/


var increments = 0;
var autoincrementer1 = 0;

function StartUp(){
	var output = "\nTotal Increments:	2";
	document.getElementById("totalIncrements").innerHTML = output;
	//document.getElementById("totalIncrements").innerHTML = output.appendChild(link);
}
StartUp();


function Increment(){
	increments = increments + 1;
	var output = " Total Increments:	" + increments;
	document.getElementById("totalIncrements").innerHTML = output;
	//document.getElementById('totalIncrements').appendChild(link);
}

function AutoIncrementer(){
	autoincrementer1 = autoincrementer1 + 1;
	var output = " Auto Incrementers:	" + autoincrementer1;
	document.getElementById("autoIncrementers").innerHTML = output;
}

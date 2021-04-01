/*var link = document.createElement('link');
  
// set the attributes for link element 
link.rel = 'stylesheet'; 

link.type = 'text/css';

link.href = 'main.css';

*/


var increments = 0;
var autoincrementer1 = 0;
var output;

function StartUp(){
	output = "\nTotal Increments:	0";
	document.getElementById("totalIncrements").innerHTML = output;
	//document.getElementById("totalIncrements").innerHTML = output.appendChild(link);
}
StartUp();


function Increment(){
	increments = increments + 1;
	Update();
	
	//document.getElementById('totalIncrements').appendChild(link);
}

function AutoIncrementer(){
	if(increments >= 10){
		increments = increments - 10;
		autoincrementer1 = autoincrementer1 + 1;
		
		Update();
	}
}

function Update(){
	output = " Total Increments:	" + increments;
	document.getElementById("totalIncrements").innerHTML = output;
	
	output = " Auto Incrementers:	" + autoincrementer1;
		document.getElementById("autoIncrementers").innerHTML = output;
}

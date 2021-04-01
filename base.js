/*var link = document.createElement('link');
  
// set the attributes for link element 
link.rel = 'stylesheet'; 

link.type = 'text/css';

link.href = 'main.css';

*/


var increments = 0;
var autoincrementer1 = 0;
var incrementOutput;
var autoIncrementOutput;

function StartUp(){
	output = "\nTotal Increments:	0";
	document.getElementById("totalIncrements").innerHTML = output;
	//document.getElementById("totalIncrements").innerHTML = output.appendChild(link);
}
StartUp();


function Increment(){
	increments = increments + 1;
	Update();
	forever();
	
	//document.getElementById('totalIncrements').appendChild(link);
}

function AutoIncrementer(value){
	if(increments >= 10){
		increments = increments - 10;
		autoincrementer1 = autoincrementer1 + value;
		
		Update();
	}
}

function Update(){
	incrementOutput = " Total Increments:	" + increments;
	document.getElementById("totalIncrements").innerHTML = incrementOutput;
	
	autoIncrementOutput = " Auto Incrementers:	" + autoincrementer1;
	document.getElementById("autoIncrementers").innerHTML = autoIncrementOutput;
}

function forever(){
	increments = increments + (autoincrementer1 * 1);
	setTimeout(1000);
	Update();
	forever();
}

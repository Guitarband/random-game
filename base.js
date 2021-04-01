var link = document.createElement('link');
  
// set the attributes for link element 
link.rel = 'stylesheet'; 

link.type = 'text/css';

link.href = 'style.css';




var increments = 0;
var autoIncrementers_1 = 0;
var autoIncrementers_10 = 0;
var autoIncrementers_100 = 0;


function StartUp(){
	var output = "\nTotal Increments:	0";
	document.getElementById("totalIncrements").innerHTML = output.appendChild(link);
}
StartUp();


function Increment(){
	increments = increments + 1;
	var output = " Total Increments:	" + increments;
	document.getElementById("totalIncrements").innerHTML = output;
	document.getElementById('totalIncrements').appendChild(link);
}


function autoIncrement(var value){
	if(value == 1){
		if(increments >= 10){
			increments = increments - 10;
			autoIncrementers_1 = autoIncrementers_1 + 1;
			var output1 = " Auto Incrementers(1):	    " + autoIncrementers_1;
			document.getElementById("AutoIncrement1").innerHTML = output1;
			var output2 = " Total Increments:	" + increments;
			document.getElementById("totalIncrements").innerHTML = output2;
		}
	}
	else if(value == 10){
		if(increments >= 1000){
			increments = increments - 10;
			autoIncrementers_10 = autoIncrementers_10 + 1;
			var output = " Auto Incrementers(10):	    " + autoIncrementers_10;
			document.getElementById("AutoIncrement10").innerHTML = output;
			var output = " Total Increments:	" + increments;
			document.getElementById("totalIncrements").innerHTML = output;	
		}
	}
	else if(value == 100){
		if(increments >= 100000){
			increments = increments - 10;
			autoIncrementers_100 = autoIncrementers_100 + 1;
			var output = " Auto Incrementers(100):	    " + autoIncrementers_100;
			document.getElementById("AutoIncrement100").innerHTML = output;
			var output = " Total Increments:	" + increments;
			document.getElementById("totalIncrements").innerHTML = output;	
		}
	}
	else{
		increments = increments + 1 - 1;
	}
}


function forver(){
	increments = increments + autoIncrementers_1 * 1;
	increments = increments + autoIncrementers_10 * 1;
	increments = increments + autoIncrementers_100 * 1;
	var output = " Total Increments:	" + increments;
	document.getElementById("totalIncrements").innerHTML = output;
	setTimeout(1000);
	forever();
}

forever();

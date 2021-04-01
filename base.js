var incrementAmount = 0;
function StartUp(){
	document.getElementById("totalIncrements").innerHTML = "\nTotal Increments:	0";
}
StartUp();

function Increment(){
	incrementAmount = incrementAmount + 1;
	var output = " Total Increments:	" + incrementAmount;
	document.getElementById("totalIncrements").innerHTML = output;
}

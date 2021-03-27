var total = 0;

function increment1() {
	var buttonName = document.getElementById("increment1");
	total = total + 1;
	document.getElementById("totalIncrement").innerHTML="Total Increments	" + num.toString(total);
}

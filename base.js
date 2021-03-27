var total = 0;

function increment1() {
	var buttonName = document.getElementById("increment1");
	total = total + 1;
	document.getElementById("totalIncrement").value="Total Increments	" + num.toString(total);
}

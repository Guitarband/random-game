var total = 0;

function increment1() {
	var buttonName = document.getElementById("increment1");
	total = total + 1;
	var increment = document.getElementById("totalIncrement");
	totalIncrement.value = "Total Increments	" + num.toString(total);
}

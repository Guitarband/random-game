var total = 0;

function increment(amount) {
	total = total + parseint(amount);
	update();
}

function update(){
	document.getElementById("total").innerHTML = "Total Increments	" + num.toString(total);
	$(".increment-total").html(total);
}

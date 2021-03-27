var total = 0;

function increment(amount) {
	total = total + parseint(amount);
	update(total);
}

function update(total){
	$('.total').html("Total Increments	1" + num.toString(total));
	document.getElementById("total").innerHTML = "Total Increments	1" + num.toString(total);
}

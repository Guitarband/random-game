var total = 0;

function increment(amount) {
	total = total + amount;
}

function update(){
	$(".increment-total").html(total);
}

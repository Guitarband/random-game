var total = 0;

function increment(amount) {
	total = total + amount;
	update();
}

function update(){
	$(".increment-total").html(total);
}

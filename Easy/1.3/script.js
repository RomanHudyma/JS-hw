var inputArr = [1, 4, 2];
function returnAvarage() {
	var sum = 0;
	var i = 0;
	for (; i < inputArr.length; i++) {
		sum += inputArr[i];
	}
	console.log(sum/i);

}

returnAvarage();
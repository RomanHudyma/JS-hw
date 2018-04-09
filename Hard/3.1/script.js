function recursiveNumbersLog(number) {
	if(number == 0 ) {
		console.log(0);
		return;
	} else {
		console.log(number);
		recursiveNumbersLog(number-1);
	}
}

recursiveNumbersLog(10);
function factorial(value) {
	var result = 1;
	for (var i = value; i > 0; i--){
		result*=i;
	}
	console.log(result);
	return result;
}

factorial(5);
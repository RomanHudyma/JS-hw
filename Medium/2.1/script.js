function reverseNumber(number) {
	var reversed = 0;

	while (number > 0) {
		reversed*=10;
		reversed+=(number%10);
		number=parseInt(number/10); 
	}

	console.log(reversed);
}

reverseNumber(32243);
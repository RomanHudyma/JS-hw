var inputArr = [10, 15, 6, 25, 44, 3];
function returnPairNumbers() {
	console.log(inputArr);
	var outputArr = [];
	var counter=0;
	for (i=0; i < inputArr.length; i++) {
	  if (inputArr[i] % 2 == 0) {
	  	outputArr[counter]=inputArr[i];
	  	counter++;
	  }
	}
    console.log(outputArr);
}

returnPairNumbers();
var inputArr = [10, 15, 6, 25, 44, 3];
function returnPairNumbers(inputArr) {
	console.log(inputArr);
	var outputArr = [];
	for (var i=0; i < inputArr.length; i++) {
	  if (inputArr[i] % 2 == 0) {
	  	outputArr.push(inputArr[i]);
	  }
	}
    console.log(outputArr);
}

returnPairNumbers(inputArr);
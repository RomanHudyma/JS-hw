var inputArr = [5, 10, 2, 3, 9, 47, 23, 4, 5, 5, 9, 7, 2, 9];
var duplicateValues = [];
function findDuplicateValues(){
	console.log(inputArr);
	for (var i = 0; i < inputArr.length; i ++) {
		for (var j = i + 1; j < inputArr.length; j++) {
			if (inputArr[i] == inputArr[j] && !CheckIfPresent(inputArr[j])) {
				duplicateValues.push(inputArr[j]);
				break;
			}
		}
	}

	console.log(duplicateValues);
	return duplicateValues;
}

function CheckIfPresent(number) {
	for (var i = 0; i < duplicateValues.length; i++){
		if (number == duplicateValues[i]) {
			return true;
		}
	}

	return false;
}

findDuplicateValues();
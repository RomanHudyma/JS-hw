var inputArr = [5, 10, 2, 3, 9, 47, 23, 4, 5, 5, 9, 7, 2, 9];
function findDuplicateValues(inputArr){
	var duplicateValues = {};
	var obj = [];
	console.log(inputArr);
	for (var i = 0; i < inputArr.length; i ++) {
		for (var j = i + 1; j < inputArr.length; j++) {
			if (inputArr[i] == inputArr[j] && !duplicateValues.hasOwnProperty(inputArr[i])) {
				duplicateValues[inputArr[i]] = inputArr[i];
				break;
			}
		}
	}
	console.log(Object.keys(duplicateValues));
	return Object.keys(duplicateValues);
}

findDuplicateValues(inputArr);
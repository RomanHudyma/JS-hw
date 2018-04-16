var inputArr = [66, 10, 15, 6, 25, 44, 3];
function returnMinAndMax(inputArr) {
	var max = inputArr[0];
	var min = inputArr[0];
	for (var i=1; i < inputArr.length; i++) {
	  if (inputArr[i] > max) max = inputArr[i];
	  if (inputArr[i] < min) min = inputArr[i];
	}
  console.log("min: ", min, "max: ", max);
}

returnMinAndMax(inputArr);

function bubbleSorting(array) {
	
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < (array.length - i - 1); j++) {
			if (array[j] < array[j+1]) {
				var tmp = array[j];
				array[j] = array[j + 1];
				array[j+1] = tmp;
			}
		}
	}
	console.log(array);
	return array;
}

bubbleSorting([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]);


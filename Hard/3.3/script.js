function binarySearch(number, {from, to}) {
	if (number > to || number < from) {
		console.log("Not found!");
		return false;
	}

	var array = [];
	for (var i = from; i <= to; i++){
		array.push(i);
	}

	doSearch(number, array, {from, to});
	return true;
}

function doSearch(number, array, {from, to}) {
	if (from > to ) {
		console.log("Not found!");
		return -1;
	}
	
	var mid = Math.round((to+from)/2);
	console.log(mid);

	if ( array[mid] < number ) {
		doSearch(number, array, {from: mid+1, to: to});
	} 
	if (array[mid] > number) {
		doSearch(number, array, {from: from, to: mid-1});
	}
	if (array[mid] == number) {
		console.log("Successful!");
		return array[mid];
	}
}

binarySearch(27, {from: 0,to: 100});
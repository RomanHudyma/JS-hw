const DIFF = 32;
const MULTIPLIER = 1.8;

function convertToFahrenheit(value) {
	console.log("Temperature in Fahrenheit: ", value*MULTIPLIER+DIFF);
}

convertToFahrenheit(10);
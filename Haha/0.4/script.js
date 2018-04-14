while(true) {

	var date = prompt("Enter date:");
	var name = prompt("Enter name:");
	var city = prompt("Enter city:");

	var regExp_Name_City = /\D/;

	if (!regExp_Name_City.test(name) || !regExp_Name_City.test(city)) {
		alert("Your input is not valid! Try again)");
	} else {
		alert(name + " has a meeting " + date + " somewhere in " + city + ".");
		break;
	}
}
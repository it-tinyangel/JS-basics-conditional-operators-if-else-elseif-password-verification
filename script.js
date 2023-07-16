let username = prompt("Enter name:");

if (username == null) {
	alert("Login is cancelled");
} else if (username >= 0 || username <= 0 || username == "") {
	alert("I don't know you");
} else {
	let password = prompt("Enter password:");

	if (password === "LOGOS") {
		alert(`Welcome, ${username}!`);
	} else if (password == null) {
		alert("Login is cancelled");
	} else {
		alert("Error password. Please, try again.");
	}
}
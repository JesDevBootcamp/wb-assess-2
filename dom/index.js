// Get form and form close button:
const form = document.getElementsByTagName("form")[0];
const closeForm = document.getElementById("close-form");

// Toggle hide class on form, and change content of close button:
closeForm.addEventListener("click", () => {
	form.classList.toggle("hide");
	closeForm.textContent = form.classList.contains("hide") ? "+" : "X";
});

// Process form data:
form.addEventListener("submit", (event) => {
	// Prevent default action for the tests validator:
	event.preventDefault();

	// Get name element and check if empty:
	const name = document.getElementById("name");
	const nameEmpty = name.value.trim() === "";

	// Get email element and check if empty:
	const email = document.getElementById("email");
	const emailEmpty = email.value.trim() === "";

	// If name value is empty:
	if (nameEmpty) {
		name.style.border = "2px solid red";
		alert("Please enter a name to subscribe.");
	}

	// If email value is empty:
	if (emailEmpty) {
		email.style.border = "2px solid red";
		alert("Please enter an email address to subscribe.");
	}

	// If name and email value are empty:
	if (nameEmpty && emailEmpty) {
		alert("You must enter a name and an email address to subscribe!");
	}

	// If form is properly filled out:
	if (!nameEmpty && !emailEmpty) {
		form.parentElement.textContent = "Thank you for subscribing!";
	}
});
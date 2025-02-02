const features_link = document.getElementById("features-link");
const company_link = document.getElementById("company-link");
const features_dropdown = document.getElementById("features-dropdown-container");
const company_dropdown = document.getElementById("company-dropdown-container");
const burger_menu_button = document.getElementById("burger-menu-button");
const close_menu_button = document.getElementById("close-menu-button");

// Display features dropdown container when button text is clsiked:
features_link.addEventListener("click", (event) => {
	event.preventDefault();
	features_dropdown.style.display = "flex";
});

// Remove features dropdown container when user clicks outside of dropdown container:
document.addEventListener("click", (event) => {
	if (!features_dropdown.contains(event.target) && event.target !== features_link) {
		features_dropdown.style.display = "none";
	}
});

// Display company dropdown container when button text is clsiked:
company_link.addEventListener("click", (event) => {
	event.preventDefault();
	company_dropdown.style.display = "flex";
});

// Remove company dropdown container when user clicks outside of dropdown container:
document.addEventListener("click", (event) => {
	if (!company_dropdown.contains(event.target) && event.target !== company_link) {
		company_dropdown.style.display = "none";
	}
});

burger_menu_button.addEventListener("click", () => {
	burger_menu_button.style.display = "none";
	close_menu_button.style.display = "block";
});

close_menu_button.addEventListener("click", () => {
	close_menu_button.style.display = "none";
	burger_menu_button.style.display = "block";
});

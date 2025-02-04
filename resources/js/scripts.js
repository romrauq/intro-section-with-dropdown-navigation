const overlay = document.getElementById("overlay");
const features_link = document.getElementById("features-link");
const company_link = document.getElementById("company-link");
const features_arrow_down = document.getElementById("features-arrow-down");
const features_arrow_up = document.getElementById("features-arrow-up");
const company_arrow_down = document.getElementById("company-arrow-down");
const company_arrow_up = document.getElementById("company-arrow-up");
const features_dropdown = document.getElementById("features-dropdown-container");
const company_dropdown = document.getElementById("company-dropdown-container");
const burger_menu_button = document.getElementById("burger-menu-button");
const close_menu_button = document.getElementById("close-menu-button");
const side_menu_container = document.getElementById("side-menu-container");

// Display features dropdown container when button text is clicked:
features_link.addEventListener("click", (event) => {
	event.preventDefault();
	features_dropdown.style.display = "flex";
	features_arrow_down.style.display = "none";
	features_arrow_up.style.display = "block";
});

// Remove features dropdown container when user clicks outside of dropdown container:
document.addEventListener("click", (event) => {
	event.preventDefault();
	if (!features_dropdown.contains(event.target) && event.target !== features_link) {
		features_dropdown.style.display = "none";
		features_arrow_down.style.display = "block";
		features_arrow_up.style.display = "none";
	}
});

// Display company dropdown container when button text is clsiked:
company_link.addEventListener("click", (event) => {
	event.preventDefault();
	company_dropdown.style.display = "flex";
	company_arrow_down.style.display = "none";
	company_arrow_up.style.display = "block";
});

// Remove company dropdown container when user clicks outside of dropdown container:
document.addEventListener("click", (event) => {
	event.preventDefault();
	if (!company_dropdown.contains(event.target) && event.target !== company_link) {
		company_dropdown.style.display = "none";
		company_arrow_down.style.display = "block";
		company_arrow_up.style.display = "none";
	}
});

burger_menu_button.addEventListener("click", (event) => {
	event.preventDefault();
	burger_menu_button.style.display = "none";
	close_menu_button.style.display = "block";
	overlay.style.display = "block";
	side_menu_container.style.right = "0";
});

close_menu_button.addEventListener("click", (event) => {
	event.preventDefault();
	close_menu_button.style.display = "none";
	burger_menu_button.style.display = "block";
	overlay.style.display = "none";
	side_menu_container.style.right = "-70%";
});

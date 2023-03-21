const header = document.querySelector("header");
const inputSearch = document.querySelector(".input_search");
const input = document.querySelector(".input_search input");
const buttonSearch = document.querySelector(".input_search button");

input.addEventListener("focus", e => {
	header.classList.add("header_search");
});

input.addEventListener("blur", e => {
	header.classList.remove("header_search");
});

buttonSearch.addEventListener('click', e => {
	if (window.innerWidth >= 542){
		console.log("buscar");
	}
	else{
		input.focus();
	}
});
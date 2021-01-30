document.getElementsByClassName('frameC6')[0].addEventListener('click', animation);
let poly1 = document.getElementsByClassName("white")[0];
let poly2 = document.getElementsByClassName("purple")[0];
//console.log(poly1);

function animation() {
	poly1.classList.toggle("normal");
	poly1.classList.toggle("big");

	poly2.classList.toggle("small");
	poly2.classList.toggle("normal");
};

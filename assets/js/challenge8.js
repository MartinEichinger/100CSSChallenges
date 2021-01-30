document.querySelector('.frameC8').addEventListener('click', toggleClass);

let line = document.getElementsByClassName('C8line');
let body = document.getElementsByClassName('C8body');
console.log('body', body);

function toggleClass(){
	[].forEach.call(line, (val) => {
		val.classList.toggle('pause');
		val.classList.toggle('active');
	});
	console.log(body);
	body[0].classList.toggle('hidden');
	body[0].classList.toggle('notHidden');
}

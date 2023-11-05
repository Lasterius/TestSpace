const burger = document.getElementById('burger');
const container = document.querySelector('.container');
const text = document.getElementById('text1');

burger.addEventListener('click', function () {
	container.classList.toggle('open');
	if (container.classList.contains('open')) {
		text.classList.toggle('space-block__parag');
	} else {
		text.classList.toggle('space-block__parag');
	}
});

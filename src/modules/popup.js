const popupButton = document.querySelectorAll('.popup__button');
const popup = document.querySelector('.popup');
const closePopupButton = document.getElementById('close-popup');
const successPopup = document.querySelector('.success-popup');
const closeSuccessPopupButton = document.querySelector('.close-success-popup');

popupButton.forEach((button) => {
	button.addEventListener('click', function () {
		popup.style.display = 'block';
	});
});

closePopupButton.addEventListener('click', function () {
	popup.style.display = 'none';
});

closeSuccessPopupButton.addEventListener('click', function () {
	document.querySelector('.success-popup').style.display = 'none';
});

document.getElementById('submit').addEventListener('click', function (event) {
	event.preventDefault();

	const id = Date.now() + '-' + Math.floor(Math.random() * 1000);
	const name = document.getElementById('name').value;
	const phone = document.getElementById('phone').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('message').value;

	if (!isValidName(name)) {
		alert('Введите корректное ФИО');
		return;
	}

	if (!isValidPhone(phone)) {
		alert('Введите корректный телефон (формат: +79059871256)');
		return;
	}

	if (!isValidEmail(email)) {
		alert('Введите корректный Email');
		return;
	}

	if (!isValidMessage(message)) {
		alert('Сообщение не должно превышать 200 символов');
		return;
	}

	const formData = {
		id,
		name,
		phone,
		email,
		message,
	};

	fetch('https://jsonplaceholder.typicode.com/users', {
		method: 'POST',
		body: JSON.stringify(formData),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((response) => response.json())
		.then((data) => {
			popup.style.display = 'none';
			successPopup.style.display = 'block';

			name.value = '';
			phone.value = '';
			email.value = '';
			message.value = '';
		})
		.catch((error) => {
			console.error('Произошла ошибка при отправке данных:', error);
		});
});

function isValidName(name) {
	return /^[^0-9]+$/.test(name);
}

function isValidPhone(phone) {
	return /^(\+7)?\d{10}$/.test(phone);
}

function isValidEmail(email) {
	return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email);
}

function isValidMessage(message) {
	return message.length <= 200;
}

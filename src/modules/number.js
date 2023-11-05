let numbers = [];

const getNumbers = (n, arr) => {
	if (n > 121) {
		return;
	}
	arr.push(n);
	getNumbers(n + 1, arr);
};

getNumbers(1, numbers);

export const randomNumber = () =>
	numbers[Math.floor(Math.random() * numbers.length)];

export function randomDate() {
	const startDate = new Date('2010-01-01');
	const endDate = new Date();
	const randomTime =
		startDate.getTime() +
		Math.random() * (endDate.getTime() - startDate.getTime());
	const randomDate = new Date(randomTime);

	let day = randomDate.getDate();
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const month = monthNames[randomDate.getMonth()];
	const year = randomDate.getFullYear();

	const maxDaysInMonth = new Date(year, randomDate.getMonth() + 1, 0).getDate();
	if (day > maxDaysInMonth) {
		day = maxDaysInMonth;
	}
	return `${month} ${day}, ${year}`;
}

const titles = [
	'Bridge',
	'Forest',
	'Nature',
	'Water',
	'Fire',
	'Space',
	'Loft1890',
];

export const randomTitle = () =>
	titles[Math.floor(Math.random() * titles.length)];

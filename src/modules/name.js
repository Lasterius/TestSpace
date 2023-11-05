const users = [
	'Mary',
	'John',
	'Vasya',
	'Igor',
	'Konstantin',
	'Alex',
	'Debora',
	'Ingeborga',
	'Valentine',
	'Patrick',
	'Jessica',
	'Laima',
	'Angelica',
	'Helen',
	'Cpt.Price',
];

export const randomNames = () =>
	users[Math.floor(Math.random() * users.length)];

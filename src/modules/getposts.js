import { randomDate } from './date';
import { randomNames } from './name';
import { randomNumber } from './number';
import { randomTitle } from './title';

const cardsList = document.querySelector('.cards__list');
const downloadButton = document.querySelector('.cards__button');

const state = {
	cards: [],
	page: 1,
	perPage: window.innerWidth < 768 ? 5 : 10,
	totalPages: window.innerWidth < 768 ? 6 : 3,
	loading: false,
};

const createCard = (card, index) => {
	const rUrl =
		card.imageUrl || `https://randomfox.ca/images/${randomNumber()}.jpg`;
	const rTitle = card.tit || randomTitle();
	const rName = card.name || randomNames();
	const rDate = card.date || randomDate();

	return `<div class='card'>
		  <div class='card__img'>
        <img src='${rUrl}' alt='lisichka'>
      </div>
		  <div class='wrapper'>
        <h1 class='wrapper__randomTitle'>${rTitle}</h1>
        <h2 class='wrapper__title'>${card.title}</h2>
			  <div class='wrapper__body'>${card.body}</div>
        <div class='wrapper__posted'>Posted by <strong>${rName}</strong>, on ${rDate}</div>
			  <div class='wrapper__button'>
				  <a href='/'>Continue reading</a>
			  </div>
		  </div>
	  </div>`;
};

const fillCardsList = (cards) => {
	cardsList.innerHTML = '';
	if (cards.length) {
		cards.forEach(
			(card, index) => (cardsList.innerHTML += createCard(card, index))
		);
	}
};

function getPosts() {
	if (state.page <= state.totalPages) {
		if (!state.loading) {
			state.loading = true;
			return fetch(
				`https://jsonplaceholder.typicode.com/posts?_page=${state.page}&_limit=${state.perPage}`
			)
				.then((response) => response.json())
				.then((cards) => {
					state.cards = state.cards.concat(
						cards.map((card) => ({
							...card,
							imageUrl: `https://randomfox.ca/images/${randomNumber()}.jpg`,
							tit: randomTitle(),
							name: randomNames(),
							date: randomDate(),
						}))
					);
					state.page++;
					state.loading = false;
				});
		}
	}
}

getPosts().then(() => fillCardsList(state.cards));

downloadButton.addEventListener('click', async function () {
	await getPosts();
	fillCardsList(state.cards);
});

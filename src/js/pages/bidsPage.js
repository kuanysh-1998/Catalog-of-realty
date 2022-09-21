import bids from './../bids/bidsController.js';

export default function (state) {
	// Очищаем контейнер app
	document.querySelector('#app').innerHTML = '';

	// Запускаем компонент bids
	bids(state);
}

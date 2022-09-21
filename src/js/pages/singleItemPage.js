import singleItem from './../singleItem.js/singleItemController';

export default function (state) {

	// Очищаем контейнер приложения
	document.querySelector('#app').innerHTML = "";

	// Запускаем компонент singleItem
	singleItem(state);
}

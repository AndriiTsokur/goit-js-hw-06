//* Завдання 7
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const refs = {
	fontSizeController: document.querySelector('#font-size-control'),
	text: document.querySelector('#text'),
};

changeFontSize();

refs.fontSizeController.addEventListener('input', changeFontSize);

function changeFontSize() {
	refs.text.setAttribute(
		'style',
		`font-size:${refs.fontSizeController.value}px`
	);
}

//* Завдання 9
// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const refs = {
	changeColorBtn: document.querySelector('.change-color'),
	colorHexDisplay: document.querySelector('.color'),
};

refs.changeColorBtn.addEventListener('click', () => {
	const randomColor = getRandomHexColor();

	refs.colorHexDisplay.innerText = randomColor;
	document.body.setAttribute('style', `background-color:${randomColor}`);
});

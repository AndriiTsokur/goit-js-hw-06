//* Завдання 10 (виконувати не обов'язково)
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

//= Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// 1) Розміри найпершого <div> - 30px на 30px.
// 2) Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 3) Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

let boxesStorage = [];
let boxesLayout = 'embedded';

const refs = {
	boxesQuantity: document.querySelector('input[type="number"]'),
	layoutOptions: document.querySelectorAll('input[type="radio"]'),
	btnCreate: document.querySelector('button[data-create]'),
	btnDestroy: document.querySelector('button[data-destroy]'),
	boxesField: document.querySelector('#boxes'),
};

refs.layoutOptions.forEach(option => {
	option.addEventListener('change', event => {
		boxesLayout = event.target.value;
	});
});

refs.btnCreate.addEventListener('click', () => {
	cancelCollection();
	createBoxes(Number(refs.boxesQuantity.value));
});

refs.btnDestroy.addEventListener('click', () => {
	cancelCollection();
	refs.boxesQuantity.value = '';
});

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

function createBoxes(amount) {
	if (amount < 1 || amount > 100) {
		return alert(
			'The number of boxes cannot be less than 1 or more than 100. Please change!'
		);
	}

	let boxDimension = 30;

	for (let i = 0; i < amount; i++) {
		boxesStorage.push({
			size: boxDimension,
			color: getRandomHexColor(),
		});

		boxDimension += 10;
	}

	activateCollection(boxesStorage);
}

function activateCollection(arr) {
	let boxesBundle = '';

	if (boxesLayout === 'embedded') {
		arr.forEach(({ size, color }) => {
			boxesBundle = `<div style="
				display:flex;
				align-items:center;
				justify-content:center;
				width:${size}px; 
				height:${size}px; 
				margin-inline:auto;
				border:1px solid #ffffff;
				background-color:${color};">${boxesBundle}</div>`;
		});
	} else {
		arr.forEach(({ size, color }) => {
			boxesBundle += `<div style="
				width:${size}px; 
				height:${size}px; 
				margin:0 auto 5px;
				border:1px solid #000000;
				background-color:${color};"></div>`;
		});
	}

	refs.boxesField.insertAdjacentHTML('afterbegin', boxesBundle);
}

function cancelCollection() {
	boxesStorage = [];
	refs.boxesField.innerText = '';
}

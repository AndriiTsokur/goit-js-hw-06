//* Завдання 4
//? Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

//= Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//= Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//= Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const refs = {
	counter: document.querySelector('#value'),
	decrBtn: document.querySelector('button[data-action="decrement"]'),
	incrBtn: document.querySelector('button[data-action="increment"]'),
};

refs.decrBtn.addEventListener('click', updateCounter);
refs.incrBtn.addEventListener('click', updateCounter);

function updateCounter(event) {
	counterValue += Number(event.currentTarget.innerText);
	refs.counter.innerText = counterValue;
}

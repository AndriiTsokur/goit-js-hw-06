//* Завдання 6
// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.

//= Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
//= Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', event => {
	event.currentTarget.value.length ===
	Number(event.currentTarget.getAttribute('data-length'))
		? event.currentTarget.classList.add('valid')
		: event.currentTarget.classList.add('invalid');
});

inputRef.addEventListener('focus', event => {
	event.currentTarget.removeAttribute('class');
});

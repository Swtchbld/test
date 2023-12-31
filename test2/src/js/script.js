window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.side'),
		menuItem = document.querySelectorAll('.menu__item'),
		hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('side__active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('menu_active');
		});
	});
});
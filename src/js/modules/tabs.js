export const tabs = (tabSelector, contentSelector) => {
	const tabs = document.querySelectorAll(tabSelector);
	const content = document.querySelectorAll(contentSelector);

	const hideTabContent = () => {
		tabs.forEach(item => item.firstElementChild.classList.remove('active'));
		content.forEach(item => (item.style.display = 'none'));
	};

	tabs.forEach((tab, i) => {
		tab.addEventListener('click', e => {
			hideTabContent();
			e.preventDefault();
			tab.firstElementChild.classList.add('active');
			content[i].style.display = 'block';
		});
	});
};

export default tabs;

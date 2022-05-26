import tippy from 'tippy.js';

export const createTippy = () => {
	const items = document.querySelectorAll('.technologies__item');
	const names = ['HTML5', 'CSS3', 'SASS', 'Bootstrap', 'Materialize', 'Tailwindcss', 'EcmaScript 6', 'React', 'Git', 'npm', 'Gulp', 'Webpack', 'Babel'];

	items.forEach((item, i) => {
		tippy(item, {
			content: names[i],
		});
	});
};

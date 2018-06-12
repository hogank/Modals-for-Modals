window.onload = () => {
	let header = document.getElementById('header');
	let header_rect = header.getBoundingClientRect();
	var modal_defaults = {
		min_top: header_rect.height + 5,
		width: document.getElementById('modal').getBoundingClientRect().width
	};
	const render = () => {
		let app = document.getElementById('app');
		let modal = document.getElementById('modal');
		let modal_rect = modal.getBoundingClientRect();
		modal.style.left = ((window.innerWidth / 2) - (modal_rect.width / 2)) + 'px';
		modal.style.top = Math.max(60, (window.innerHeight / 2) - (modal_rect.height / 2)) + 'px';
		if (window.innerWidth <= modal_rect.width) {
			modal.style.width = window.innerWidth + 'px';
		} else {
			modal.style.width = modal_defaults.width + 'px';
		}
		modal.style.visibility = 'visible';
		app.style['min-height'] = (modal_defaults.min_top + modal_rect.height + 5) + 'px'
	};
	window.onresize = render;
	var observer = new MutationObserver(render);
	observer.observe(document.getElementById('modal'), {
		attributes: true,
		characterData: true,
		childList: true,
		subtree: true,
		attributeOldValue: true,
		characterDataOldValue: true
	});
	render();
};
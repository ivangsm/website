function loadImage(id, targetId) {
	const el = document.getElementById(id);
	const targetEl = targetId ? document.getElementById(targetId) : el;
	let imageToLoad;
	
	if (el.dataset.image) {
		imageToLoad = el.dataset.image;
	} else if (typeof el.currentSrc === 'undefined') {
		imageToLoad = el.src;
	} else {
		imageToLoad = el.currentSrc;
	}

	if (imageToLoad) {
		var img = new Image();
		img.src = imageToLoad;
		img.onload = function() {
			targetEl.classList.add('is-loaded');
		};
	}
}

document.addEventListener('DOMContentLoaded', function() {
	window.onload = loadImage('pictureImage', 'picture');
	window.onload = loadImage('wallpaper');
});

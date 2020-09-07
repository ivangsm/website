const loadImage = (id, targetId) => {
	const elt = document.querySelector(`#${id}`)
	const targetElt = targetId ? document.querySelector(`#${targetId}`) : elt
  
	const imageToLoad = elt.dataset.image
	  ? elt.dataset.image
	  : typeof elt.currentSrc === 'undefined'
		? elt.src
		: elt.currentSrc
  
	if (imageToLoad) {
	  const img = new window.Image()
	  img.src = imageToLoad
	  img.onload = _ => targetElt.classList.add('is-loaded')
	}
  }
  
  document.addEventListener('DOMContentLoaded', _ => {
	loadImage('wallpaper')
	loadImage('pictureImage', 'picture')
  })
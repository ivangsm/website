"use strict";

const loadImage = (id, targetId) => {
  const elt = document.querySelector(`#${id}`);
  const targetElt = targetId ? document.querySelector(`#${targetId}`) : elt;

  const imageToLoad = elt.dataset.image
    ? elt.dataset.image
    : typeof elt.currentSrc === "undefined"
    ? elt.src
    : elt.currentSrc;

  if (imageToLoad) {
    const img = new window.Image();
    img.src = imageToLoad;
    img.onload = (_) => targetElt.classList.add("is-loaded");
  }
};

document.addEventListener("DOMContentLoaded", (_) => {
  loadImage("pictureImage", "picture");
  loadImage("wallpaper");

  const firstTime = localStorage.getItem("firstTime?");
  const isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

  if (firstTime === null && !isFirefox) {
    localStorage.setItem("firstTime?", 0);
    location.reload();
  }
});

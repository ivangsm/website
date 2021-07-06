"use strict";

function loadImage(id, targetId) {
  // console.log(id);
  const el = document.getElementById(id);
  const targetEl = targetId ? document.getElementById(targetId) : el;
  let imageToLoad;

  if (el.dataset.image) {
    imageToLoad = el.dataset.image;
  } else if (typeof el.currentSrc === "undefined") {
    imageToLoad = el.src;
  } else {
    imageToLoad = el.currentSrc;
  }

  if (imageToLoad) {
    const img = new Image();
    img.src = imageToLoad;
    img.onload = function () {
      targetEl.classList.add("is-loaded");
    };
  }
}

document.addEventListener("DOMContentLoaded", function () {
  loadImage("pictureImage", "picture");
  loadImage("wallpaper");

  const firstTime = localStorage.getItem("firstTime?");
  const isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

  if (firstTime === null && !isFirefox) {
    localStorage.setItem("firstTime?", 0);
    location.reload();
  }
});

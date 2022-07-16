// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

btn.addEventListener('click', (e) => {
  if (!e.currentTarget.classList.contains('slide')) {
    e.currentTarget.classList.add('slide');
    video.pause();
  } else {
    e.currentTarget.classList.remove('slide');
    video.play();
  }
});

// preloader
const preload = document.querySelector('.preloader');

window.addEventListener('load', () => {
  preload.classList.add('hide-preloader');
})
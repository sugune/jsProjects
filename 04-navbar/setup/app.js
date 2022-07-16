// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const links = document.querySelector('.links');
const toggle = document.querySelector('.nav-toggle');

toggle.addEventListener('click', () => {
  if (links.classList.contains('show-links')) {
    links.classList.toggle('show-links');
  } else {
    links.classList.toggle('show-links');
  }
});
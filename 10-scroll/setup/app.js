// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const linksContainer = document.querySelector('.links-container');
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
  const height = links.getBoundingClientRect().height;
  if (linksContainer.getBoundingClientRect().height === 0) {
    linksContainer.style.height = `${height}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', () => {
  const scroll = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scroll > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
  if (scroll > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});
// ********** smooth scroll ************
// select links
const link = document.querySelectorAll('.scroll-link');

link.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    // calculate position
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.clientHeight;
    const fixed = navbar.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;
    
    if (!fixed) {
      position = position - navHeight;
    }
    
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
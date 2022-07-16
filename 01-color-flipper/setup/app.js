const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const i = getRandomNumber();
  document.body.style.backgroundColor = colors[i];
  color.textContent = colors[i];
  console.log(i);
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
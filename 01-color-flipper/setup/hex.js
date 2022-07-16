const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');



btn.addEventListener('click', () => {
  /*
  const a = hex[getRandomNum()];
  const b = hex[getRandomNum()];
  const c = hex[getRandomNum()];
  const d = hex[getRandomNum()];
  const e = hex[getRandomNum()];
  const f = hex[getRandomNum()]; 
  const hexColor = `#${a}${b}${c}${d}${e}${f}`;
  */
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    let hexI = getRandomNum();
    hexColor += hex[hexI];
  }
  
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
  color.style.color = hexColor;
});

function getRandomNum() {
  return Math.floor(Math.random() * hex.length);
}
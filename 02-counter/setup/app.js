// initial value
let count = 0;

const btn = document.querySelectorAll('.btn');
const val = document.querySelector('#value');

/*
btn.forEach((btn) => {
  if (btn.classList.contains('decrease')) {
    btn.addEventListener('click', () => {
      count--;
      val.textContent = count;
    });
  } else if (btn.classList.contains('increase')) {
    btn.addEventListener('click', () => {
      count++;
      val.textContent = count;
    });
  } else {
    btn.addEventListener('click', () => {
      count = 0;
      val.textContent = count;
    });
  }
}); */

btn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const button = e.currentTarget.classList;
    if (button.contains('decrease')) {
      count--;
    } else if (button.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    
    if (count > 0) val.style.color = 'green';
    if (count < 0) val.style.color = 'red';
    if (count === 0) val.style.color = 'black';
    
    val.textContent = count;
  });
});
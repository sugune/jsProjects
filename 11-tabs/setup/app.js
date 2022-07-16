const btns = document.querySelectorAll('.tab-btn');
const content = document.querySelectorAll('.content');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const data = e.currentTarget.dataset.id;
    const element = document.getElementById(data);
    content.forEach((item) => {
      item.classList.remove('active');
    });
    btns.forEach((item) => {
      item.classList.remove('active');
    });
    element.classList.add('active');
    e.currentTarget.classList.add('active');
    /*ďcontent.forEach(item => {
      console.log(item.classList)
    });
    console.log(element) */
  });
});
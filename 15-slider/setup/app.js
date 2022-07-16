// select element
 const slides = document.querySelectorAll('.slide');
 const nextBtn = document.querySelector('.nextBtn');
 const prevBtn = document.querySelector('.prevBtn');
 /*
 // increment holder
 let left = 0;
 let x = 0;
 slides.forEach(item => {
   item.style.left = `${left}%`;
   left += 100;
 });
 
 nextBtn.addEventListener('click', () => {
   if (x === left - 100) {
     x = 0;
    slides.forEach(item => {
      item.style.transform = `translateX(-${x}%)`;
    });
   } else {
      x += 100;
      slides.forEach(item => {
        item.style.transform = `translateX(-${x}%)`;
      });
   }
 });
 
 prevBtn.addEventListener('click', () => {
   if (x === 0) {
     x = left - 100;
    slides.forEach(item => {
      item.style.transform = `translateX(-${x}%)`;
    });
   } else {
      x -= 100;
      slides.forEach(item => {
        item.style.transform = `translateX(-${x}%)`;
      });
   }
 }); */
 
 slides.forEach((item, index) => {
   item.style.left = `${index * 100}%`;
 });
 
 // increment holder
 let x = 0;
 
 nextBtn.addEventListener('click', () => {
   x++;
   move();
 });
 
 prevBtn.addEventListener('click', () => {
   x--;
   move();
 });
 
 function move() {
   /*
   if (x === slides.length) {
     x = 0;
   }
   
   if (x === -1) {
     x = slides.length - 1;
   }*/
   
   if (x === slides.length - 1) {
     nextBtn.style.display = 'none';
   } else {
     nextBtn.style.display = 'block';
   }
   if (x > 0) {
     prevBtn.style.display = 'block';
   } else {
     prevBtn.style.display = 'none';
   }
   slides.forEach(item => {
     item.style.transform = `translateX(-${x * 100}%)`;
   });
  }
prevBtn.style.display = 'none';
 
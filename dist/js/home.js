window.addEventListener("scroll", function () {
  const scroller1 = document.querySelector('.banner__half');
  const scroller2 = document.querySelector('.banner__slider');
  const items1 = scroller1.querySelectorAll('ul li:not(:first-child)');
  const items = scroller2.querySelectorAll('ul li:not(:first-child)');
  const cruiser = document.getElementById('cruiser');
  
  if (window.scrollY >= cruiser.offsetTop) {
    scroller1.classList.add('bg-dark');
    scroller2.classList.add('bg-dark');
    items[0].classList.add('is-active');
  }
  else {
    scroller1.classList.remove('bg-dark');
    scroller2.classList.remove('bg-dark');
    items[0].classList.remove('is-active');
  }

  const carving = document.getElementById('carving');
  if (window.scrollY >= carving.offsetTop) {
    items[0].classList.remove('is-active');
    items[1].classList.add('is-active');
  }
  else {
    items[1].classList.remove('is-active');
  } 

  const downhill = document.getElementById('downhill');
  if (window.scrollY >= downhill.offsetTop) {
    items[1].classList.remove('is-active');
    items[2].classList.add('is-active');
  }
  else {
    items[2].classList.remove('is-active');
  }   
});
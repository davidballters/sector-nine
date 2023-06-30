window.addEventListener("scroll", function () {
  const scroller = document.querySelector('.banner__slider');
  const cruiser = document.getElementById('cruiser');
  if (window.scrollY >= cruiser.offsetTop) {
    scroller.classList.add('bg-dark');
  }
  else {
    scroller.classList.remove('bg-dark');
  }
});

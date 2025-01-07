const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;

function changeslide() {
  imgs.forEach((img, index) => {
    img.style.display = 'none'; // Hide all images
  });
  imgs[n].style.display = 'block'; // Show current image
}

changeslide();

prev_btn.addEventListener('click', (e) => {
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1; // Reset to the last image
  }
  changeslide();
});

next_btn.addEventListener('click', (e) => {
  if (n < imgs.length - 1) {
    n++;
  } else {
    n = 0; // Reset to the first image
  }
  changeslide();
});

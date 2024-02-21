const reveal = Array.from(document.querySelectorAll('.reveal'));

function isVisible() {
  reveal.forEach((item) => {
    const { top, bottom } = item.getBoundingClientRect();
    if(bottom <= innerHeight && top >= 0) {
      item.classList.add('reveal_active');
    } else {
        item.classList.remove('reveal_active');
    }
  });
}

window.addEventListener('scroll', isVisible);
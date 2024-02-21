const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
setInterval(() => {
  let index = rotatorCase.findIndex(item => item.classList.contains('rotator__case_active'));
  rotatorCase[index].classList.remove('rotator__case_active');
  index++;

  if(index === rotatorCase.length) {
    index = 0;
  }
  rotatorCase[index].classList.add('rotator__case_active');
}, 1000)
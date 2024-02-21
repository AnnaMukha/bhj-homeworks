const fontControl = Array.from(document.querySelectorAll('.font-size'));
const bookControl = document. querySelector('.book__content');

fontControl.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();

    fontControl.forEach((button) => {
      button.classList.remove('font-size_active');
    });
    
    item.classList.add('font-size_active');

    if(item.classList.contains('font-size_small')) {
      bookControl.classList.add('book_fs-small');
      bookControl.classList.remove('book_fs-big');
    } else if(item.classList.contains('font-size_big')) {
      bookControl.classList.add('book_fs-big');
      bookControl.classList.remove('book_fs-small');
    } else {
      bookControl.classList.remove('book_fs-small');
      bookControl.classList.remove('book_fs-big');
    }

  
  });

});
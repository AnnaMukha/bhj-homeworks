const button = document.getElementById('tasks__add');
const taskInput = document.getElementById('task__input');
console.log(taskInput);
const form = document.getElementById('tasks__form');
const taskList = document.getElementById('tasks__list');
console.log(taskList);

function addToTheList() {
  let addedTask = taskInput.value.trim();
  if(addedTask !== '') {
    taskList.insertAdjacentHTML('beforeEnd', `<div class="task"> 
    <div class="task__title">${addedTask}</div>
    <a href="#" class="task__remove">&times;</a>
    </div>`); 
    form.reset();
  }
}

form.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
    e.preventDefault();
    addToTheList();
  }
});

button.addEventListener('click', (e) => {
  e.preventDefault();
  addToTheList();
})

taskList.addEventListener('click', (e) => {
  let target = e.target;

  if(target.classList.contains('task__remove')) {
    target.closest('.task').remove();
  }
});
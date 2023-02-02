const btn = document.createElement('button');
document.addEventListener("DOMContentLoaded", () => {

  function addToDo(task) {
    const li = document.createElement('li');
    //const btn = document.createElement('button');
    li.textContent = `${task}`;
    btn.textContent = 'delete'
    document.querySelector('ul').appendChild(li);
    document.querySelector('li').appendChild(btn);
  }
  document.querySelector('form').addEventListener('submit', (e) => 
  {e.preventDefault();
  addToDo(e.target.newTaskDesc.value);

  btn.addEventListener('click', deleteTask)
  function deleteTask (e) {
e.target.parentElement.remove();
  }
});

//function addToDo(task) {
 // const li = document.createElement('li');
  //li.innertext = e.target.newTaskDesc.value;
  //document.querySelector('ul').appendChild(li);
});

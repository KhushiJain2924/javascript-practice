const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function renderList(){
  let todoListHTML = '';
for(let i=0;i<todoList.length;i++){
  let todoObj = todoList[i];
  //let {name,date} = todoObj;
  let name = todoObj.name;
  let date = todoObj.date;
  const html = `
  <div class="name-text">${name}</div>
  <div class="date-text">${date}</div>
  <button class="delete-button" onclick="
    todoList.splice(${i},1);
    renderList();
    localStorage.removeItem('todoList');
  ">Delete</button>
  `;
  todoListHTML += html;
}
document.querySelector('.js-input-text').innerHTML = todoListHTML;
}

function myList(){
  let inputElement = document.querySelector('.js-input-value');
  let name = inputElement.value;
 
  let dateElement = document.querySelector('.js-due-date-value');
  let date = dateElement.value;
  todoList.push({
    name: name,
    date: date
  });
  inputElement.value= '';
  dateElement.value = '';
  renderList();
  localStorage.setItem('todoList',JSON.stringify(todoList));
}
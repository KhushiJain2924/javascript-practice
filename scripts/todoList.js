const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function renderList(){
  let todoListHTML = '';
  todoList.forEach(function(todoObj, index){
    let name = todoObj.name;
    let date = todoObj.date;
    const html = `
    <div class="name-text">${name}</div>
    <div class="date-text">${date}</div>
    <button class="delete-button js-delete-button">Delete</button>
    `;
    todoListHTML += html;
  })
document.querySelector('.js-input-text').innerHTML = todoListHTML;

document.querySelectorAll('.js-delete-button')
.forEach((deleteButton,index)=>{
  deleteButton.addEventListener('click',()=>{
    todoList.splice(index,1);
    renderList();
    localStorage.removeItem('todoList');
  });
});
}

document.querySelector('.js-add-button').addEventListener('click',()=>{
  myList();
})




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
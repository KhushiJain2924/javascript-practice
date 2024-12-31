const taskList = []; 

function renderValue(){
  let todoHTML = '';
  for(let i=0; i<taskList.length; i++){
    let taskObj = taskList[i];
    let name = taskObj.name;
    const html = `
    <div>${name}</div>
    
    <button onclick="
      taskList.splice(${i},1);
      renderValue();
    ">Delete</button>
    `;
    
    todoHTML += html;
  }
  document.querySelector('.js-show-value').innerHTML = todoHTML;
}

function addList(){
  let taskElement = document.querySelector('.js-get-value');
  let name = taskElement.value;
  taskList.push(name);
  taskElement.value ='';
  renderValue();
}
function addTask(){
  var taskList =  document.getElementById("tasks");
  var newTaskContent = document.getElementById("newTaskContent");

  var newTaskList = taskList.innerHTML + 
  '<div class="task">' +
  '<input type="checkbox">' +
  '<label class="taskLabel">' +
  newTaskContent.value +
  '</label>' +
  '<button class="deleteTask">X</button>' +
  '</div>';

  document.getElementById("tasks").innerHTML=newTaskList;
  updateEventListeners();
}

function deleteTask(DOMelement){
  DOMelement.parentNode.parentNode.removeChild(DOMelement.parentNode);
}

document.getElementById("addTask").onclick = function(){
  addTask()
};

function updateEventListeners(){
  var taskList = document.getElementsByClassName("deleteTask");
  for(var i = 0; i<taskList.length; i++){
    taskList[i].onclick = function(){
      deleteTask(this);
    }
  }
}

updateEventListeners();

document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.getElementById('create-task-form'); // creates a variable for the form
  const taskList = document.getElementById('tasks'); // creates a variable for the task list
  

  form.addEventListener('submit', function (e) { // adds the event listener method to the form (with 'submit' as the event)
    
    e.preventDefault(); // suppresses the default action on the form element (submit button)
    
    let newTaskEntry = document.getElementById('new-task-description').value; // converts the text input to a value and assigns to a variable
    let stringNode = document.createTextNode(newTaskEntry); // creates a text node out of the text input value and assigns to a variable
    let listItem = document.createElement('li'); // creates the list item element and assigns to a variable
    listItem.class = 'list-item'; // assigns the list item a class. Not sure if this is needed.
    taskList.appendChild(listItem); // appends the list item to the task list
    listItem.appendChild(stringNode); // appends the string node (the text input value) to the list item
    
  });

})















  











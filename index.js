const addTask = document.getElementById('add-task');
const inputTask = document.getElementById('input-task');
const taskContainer = document.getElementById('task-container');

addTask.addEventListener('click', function(){

     let task = document.createElement('div');
     task.classList.add('task');

     let li = document.createElement('li');
     li.innerText = `${inputTask.value}`;
     task.appendChild(li);

     let checkBtn = document.createElement('button');
     checkBtn.classList.add('checkBtn');
     checkBtn.innerHTML = '&check;';
     task.appendChild(checkBtn);

     let deleteBtn = document.createElement('button');
     deleteBtn.classList.add('deleteBtn');
     deleteBtn.innerHTML = '&times;';
     task.appendChild(deleteBtn);

     if (inputTask.value === "") {
        alert('Please Enter your Task');   
     }else{
        taskContainer.appendChild(task);
     }

    inputTask.value = '';

    let state = 0;

    checkBtn.addEventListener('click', function(){
        if(state === 0){
            li.style.textDecoration = 'line-through';
            li.style.color = 'green';
            state = 1;
        }else{
            li.style.textDecoration = 'none';
            li.style.color = 'black';
            state = 0;
        }
        
    });

    deleteBtn.addEventListener('click', function(e){
        let target = e.target;
        target.parentElement.remove();
    });

});
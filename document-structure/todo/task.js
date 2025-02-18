let listTask = document.getElementById('tasks__list')
let inputTask = document.getElementById('task__input')
let addTask = document.getElementById('tasks__add')


function addNewTask(e) {
    e.preventDefault()
    inputTask.value = inputTask.value.trim()
    if (inputTask.value != '') {
        listTask.insertAdjacentHTML('afterBegin', 
            `<div class="task">
                <div class="task__title">
                ${inputTask.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`);
        inputTask.value = ''
        e.preventDefault()

        let remove = document.querySelector('.task__remove')
        let task = document.querySelector('.task')
        
        remove.addEventListener('click', function(e) {
            e.preventDefault()
            task.remove()
        });
        return false;
    } 
}

addTask.addEventListener('click', addNewTask)

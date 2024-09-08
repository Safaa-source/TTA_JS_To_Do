let tasks = ['buy milk', 'clean the room', 'go to the gym']

function  displayTasks(){
    console.log('tasks on your to do list are:');
    tasks.forEach((task,index) => {
        console.log(`${index + 1}: ${task}`)
    })
    console.log('\n')
}

function sortTask(){
    tasks.sort();
    console.log('tasks sorted in alphabetical order')
    displayTasks()
}

function searchTask(task){
    let index = tasks.indexOf(task);
    if(index != -1){
        console.log(`Task ${task} found at index ${index+1}`)
    }
    else{
        console.log(`Task ${task} not found`)
    }
}

displayTasks()
sortTask()

searchTask('buy milk')
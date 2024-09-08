let tasks = ['Buy Milk' , 'Clean Room' , 'Go To GYM']

function displayTask(){
    console.log('Tasks on your to-do lost are:')
    tasks.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`)
    })
}

function addTask(task){
    tasks.push(task)    //or you can use tasks[tasks.length]=task
    console.log(`"${task}" Successfully added to the list\n`)
    displayTask()
}

function addTaskAtStart(task){
    for (let i = tasks.length; i > 0; i--){
        tasks[i] = tasks[i - 1]
    }
    tasks[0] = task;
    console.log(`"${task}" Successfully added on the begining of the list\n`)
}

function removeTask(index){
    if(index >= 0 && index < tasks.length){
        let removedTask = tasks[index];
        for (let i = index; i < tasks.length; i++){
            tasks[i] = tasks[i+1]
        }
        // tasks.length = tasks.length -1;
        tasks.length--;
        console.log(`"${removedTask}" Successfully removed from the list\n`)
    }
    else{
        console.log(`Task with index ${index} does not exist \n`)
    }
}

displayTask()

addTask('Buy eggs')
displayTask()

addTaskAtStart('buy bread')
displayTask()

removeTask(2)
displayTask()
let tasks = [
    ["WORK", ['complete the report', 'email the team', 'call the client']],
    ["PERSONAL", ['buy groceries', 'pick up the kids', 'do laundry']]
]

// Function to display tasks and their category
function displayCategorizedTasks(){
    tasks.forEach((category) =>{
        console.log(`\t ${category[0]} TASKS:`)
        category[1].forEach((task, index) => {
            console.log(`\t\t  ${index + 1}. ${task}`)
        })
    })
}

function addCategorizedTask(category, task){
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i][0] === category){
            tasks[i][1].push(task);
            console.log(`Task "${task}" added to "${category} "tasks\n`);
            return;
        }
    }
    console.log(`Category "${category}" not found\n`)
}

//function to remove a task from a category
function removedCategorizedTask(category, index){
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i][0] === category){
            if (index >= 0 && index <tasks[i][1].length){
                let removedTask = tasks[i][1][index];
                for (let j = index; j < tasks[i][1].length; j++){
                    tasks[i][1][j] = tasks[i][1][j + 1];
                }
                tasks[i][1].length--;
                console.log(`\n Task '${removedTask}' was removed from '${category}' tasks\n`)
                console.log('to do list after removing a task\n');
                return;
            }
        }
    }
    console.log(`category '${category}' not found\n`)
}

//sorting function
function sortTasks(category){
    for (let i = 0; i < tasks.length; i++){
        if(tasks[i][0] === category){
            tasks[i][1].sort();
            console.log(`\n'${category}' taks have been sorted\n`)
            console.log('to do list after sorting tasks\n')
            return;
        }
    }
    console.log(`categoer '${category}' not found\n`)
}

//function to search thru a category for a task
function searchTask(category, task){
    for (let i = 0;i < tasks.length;i++){
        if(tasks[i][0] === category){
            let index = tasks[i][1].indexOf(task);
            if (index != -1){
                console.log(`task '${task}' found at index '${index + 1}' in "${category}" tasks\n` )
                return
            }
        }
    }
    console.log(`task '${task}' not found in "${category}" tasks\n`)
}

console.log('to do lis b4 adding a new task\n')
displayCategorizedTasks()

addCategorizedTask('WORK', 'Complete the presentation')
displayCategorizedTasks()

removedCategorizedTask('PERSONAL', 1)
displayCategorizedTasks()

sortTasks('WORK')
displayCategorizedTasks()

searchTask('WORK', 'email the team')
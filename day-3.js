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

console.log('to do lis b4 adding a new task\n')
displayCategorizedTasks()

addCategorizedTask('Work', 'Complete the presentation')
displayCategorizedTasks()
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

displayCategorizedTasks()
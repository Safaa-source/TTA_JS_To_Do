function createTask(title, description, category){
    // console.log('to do list:')
    return {
        title,
        description,
        category,
        completed: false,

        toggleCompleted(){
            this.completed = !this.completed;
        },

        displayDetails(){
            console.log("+-------------------------------------------------------------------+")
            console.log(`\tCategory: ${this.category}`)
            console.log(`\tTask: ${this.title}`)
            console.log(`\tDescription: ${this.description}`)
            console.log(`\t${this.completed ? "\tTask is completed" : "\tTask is not completed"}`)
            console.log("+-------------------------------------------------------------------+")
        },

        updateTitle(newTitle){
            this.title = newTitle
            console.log('Task Title updated successfully');
        },

        updateDescription(newDescription) {
            this.description = newDescription
            console.log('Task Description updated successfully')
        },

        updateCategory(newCategory) {
            this.category = newCategory
            console.log('Task category updated successfully')
        },
    }
}

function createWorkTask(title, description, deadline){
    let task = createTask(title, description, "Work")
    return {
        ...task,
        deadline,

        toggleCompleted(){
            task.toggleCompleted()
        },

        displayDetails(){
            task.displayDetails()
            console.log(`\t Deadline: ${this.deadline}`)
        }
    }
}

function createPersonalTask(title, description, priority){
    let task = createTask(title, description, "personal")
    return{
        ...task,
        priority,

        toggleCompleted(){
            task.toggleCompleted()
        },

        displayDetails(){
            task.displayDetails()
            console.log(`\tPriorty: ${this.priority}`)
        }
    }
}

let task1 = createTask('buy groceries' , 'get milk, eggs, and bread from the store' , "shopping")

console.log("+-------------------------------------------------------------------+")
task1.displayDetails()
console.log("+-------------------------------------------------------------------+")

let task2 = createTask('complete report' , 'finish the report for the meeting' , "friday")
console.log('work related tasks')
console.log("+-------------------------------------------------------------------+")
task2.displayDetails()
console.log("+-------------------------------------------------------------------+")

task2.toggleCompleted()
console.log("+-------------------------------------------------------------------+")
task2.displayDetails()
console.log("+-------------------------------------------------------------------+")

let task3 = createPersonalTask("call mom" , 'call mom to wish her a happy birthday' , 'high')
console.log('personal related tasks')
console.log("+-------------------------------------------------------------------+")
task3.displayDetails()
console.log("+-------------------------------------------------------------------+")


// normal task
// task1.toggleCompleted()
// console.log("|\t new task details \t|")
// task1.displayDetails()

// task1.updateTitle('buy groceries - 1')
// console.log("\t Updated Task Details \t")
// task1.displayDetails()

// task1.updateDescription('1. Get milk, eggs, and bread from the store.' )
// console.log('\t updated task details \t')
// task1.displayDetails()

// task1.updateCategory('shopping - 1')
// console.log("\t Updated Task category \t")
// task1.displayDetails()
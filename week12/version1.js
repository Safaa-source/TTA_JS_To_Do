class Task{
    constructor(title,description,category) {
        this.title = title;
        this.description = description;
        this.category = category
        this.completed = false;
    }

    toggleCompleted(){
        this.completed = !this.completed
    }

    displayDetails(){
        console.log('+-------------------------------------------------+')
        console.log(`\tCaregory: ${this.category}`)
        console.log(`\tTask: ${this.title}`)
        console.log(`\tDescription: ${this.description}`)
        // console.log(`\tCompleted: ${this.completed}`)
        // if (this.completed) {
        //     console.log('\tTask is completed')
        // }
        // else{
        //     console.log('\tTask is not completed')
        // }
        console.log(`${this.completed ? "\tTask is completed" : "\tTask is not completed"}`);
        console.log('+-------------------------------------------------+')
    }

    // updateTask(newTitle, newDescription, newCategory){
    //     this.title = newTitle
    //     this.description = newDescription
    //     this.category = newCategory
    //     console.log('Task updated successfully')
    // }
    updateTaskTitle(newTitle){
        this.title = newTitle
        console.log('Task Tilte updated successfully')
    }

    updateTaskDescription(newDescription){
        this.description = newDescription
        console.log('Task Description updated successfully')
    }

    updateTaskDescription(newCaregory){
        this.caregory = newCaregory
        console.log('Task Caregory updated successfully')
    }
}

let task1 = new Task ('buy groceries' , 'get eggs, milk and bread form the store' , 'shopping')

task1.displayDetails()

task1.updateTaskTitle('buy groceries - 1' , '1. get eggs, milk and bread form the store' , 'm1- shopping')
console.log('\t Updated task details')
task1.displayDetails()

task1.toggleCompleted()
console.log('|\t New Task Details \t|')
task1.displayDetails()
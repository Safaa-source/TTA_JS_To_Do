function createTask(title, description, category){
    // console.log('to do list:')
    return {
        title,
        description,
        category,
        // completed: false,

        toggleCompleted(){
           this.completed = ! this.completed;
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

let task1 = createTask('Task 1' , "Description 1" ,"work")
task1.displayDetails()

task1.toggleCompleted()
task1.displayDetails()
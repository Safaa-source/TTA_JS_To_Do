class Task{
    constructor(title,description) {
        this.title = title;
        this.description = description;
        this.completed = false;
    }

    toggleCompleted(){
        this.completed = !this.completed
    }

    displayDetails(){
        console.log('+-------------------------------------------------+')
        console.log(`\tTask: ${this.title}`)
        console.log(`\tDescription: ${this.description}`)
        // console.log(`\tCompleted: ${this.completed}`)
        if (this.completed) {
            console.log('\tTask is completed')
        }
        else{
            console.log('\tTask is not completed')
        }
        console.log('+-------------------------------------------------+')
    }
}

let task1 = new Task ('buy groceries' , 'get eggs, milk and bread form the store')

task1.displayDetails()

task1.toggleCompleted()
console.log('|\t New Task Details \t|')
task1.displayDetails()
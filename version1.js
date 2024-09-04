let tasks = ['buy milk' , 'clean the room' , 'go to gym']

console.log('Tasks on my to do list')
console.log(`1. ${tasks[0]}`)
console.log(`2. ${tasks[1]}`)
console.log(`3. ${tasks[2]}`)

tasks.push('do the laundry')
console.log(`4. ${tasks[3]}`)

tasks.pop()
console.log(tasks)

tasks.shift()
console.log(tasks)

tasks.unshift('cook dinner')
console.log(tasks)

tasks.splice(1, 1);
console.log(tasks)

tasks.splice(1, 0, 'wash the dishes')
console.log(tasks)

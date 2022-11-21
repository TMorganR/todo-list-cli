const prompt = require('prompt-sync')({sigint: true})

console.log('\n')
console.log('Welcome to the To-Do List Manager Application!\n')



while(chooseToDo !== 6){

    toDoCount = arrayStore.length

    taskCount()

console.log('\n')
console.log('Select an option: ')
console.log('[1] Create a new item')
console.log('[2] Complete an item')
console.log('[3] Incomplete an item')
console.log('[4] Delete an item')
console.log('[5] Modify an item')
console.log('[6] Exit ToDo List')
chooseToDo = Number(prompt('> '))

choosetask()
}

console.log(`~ Exit ToDo List ~`)

function taskCount(){
    if(toDoCount > 0){
        console.log(`Your to-do list has ${toDoCount} items.`)
        for (let i = 0; toDoCount > i; i++){
            let completionStatus = ""
            if (arrayBool[i] === false){
                completionStatus = "[incomplete]"
            } else if (arrayBool[i] === true){
                completionStatus = "[complete]"
            }
            console.log(`${i + 1}. ${completionStatus} ${arrayStore[i]}`)

        }
    }else if (toDoCount === 0){
        console.log('Your to-do list is empty.')
    }
}

function choosetask(){
    if( chooseToDo === 1){
        console.log(`~ Creating a new to-do item ~`)
        console.log(`What is the to-do list called?`)
        let itemCall = prompt('> ')
        arrayStore.push(itemCall)
        arrayBool.push(false)    
    } else if(chooseToDo === 2 && toDoCount > 0){
        console.log('~ Completing a to-do item ~')
        console.log('Please input the number of the completed task: ')
        let itemComplete = Number(prompt('> '))
        while(isNaN(incomplete) || itemComplete > arrayBool.length || itemComplete < 1){
            console.log("ERROR! Enter a number from the list.")
            itemCompleten = Number(prompt('> '))
        }

        arrayBool[itemComplete -1] = false
    } else if(chooseToDo === 4) {
        console.log(`~ Erasing a to-do item ~`)
        console.log('Please input the number of the task to delete: ')
        itemDel = Number(prompt('> '))

        while (isNaN(itemDel) || itemDel > arrayBool.length || itemDel < 1){
            console.log("ERROR! Enter a number from the list.")
            itemDel = Number(prompt('> '))
        }

        arrayStore.splice(itemDel -1)
        arrayBool.splice(itemDel -1)
    } else if(chooseToDo === 5) {
        console.log(`~ Modifying a to-do item ~`)
        console.log('Input the number of the task to modify: ')
        let itemModify = Number(prompt('> '))

        while(isNaN(itemModify) || itemModify > arrayBool.length || itemModify < 1){
            console.log("ERROR! Enter a number from the list!")
            itemModify = Number(prompt('> '))
        }

        console.log('Type your new task: ')
        let itemReplace = String(prompt('> '))
        arrayStore[itemModify -1] = itemReplace
    } else if(chooseToDo === 6) {
        console.log("")
    } else {
        console.log("You need to put a correct number or you need a to-do list item before completing.")
    }
}
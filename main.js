// Select the container element where the to-do items will be added
const container = document.querySelector('.container')

// Get references to the submit and delete buttons
const submitBtn = document.getElementById('submitBtn')
const deleteBtn = document.getElementById('deletSelectedItems')

// Initialize a counter to keep track of the number of to-do items
let counter = 0

// Add event listeners to the submit and delete buttons
submitBtn.addEventListener("click", addToDo)
deleteBtn.addEventListener("click", deleteToDos)

// This allows the user to add new to-do items by pressing the "Enter" key while typing in the input field.
const input = document.getElementById('toDo')
input.addEventListener("keyup", function(event) {
    if (event.key === "Enter" || event.keyCode === 13 || event.which === 13) {
        addToDo()
    }
})

/*  This function is triggered when the user clicks the submit button 
    and it creates a new to-do item in the container element. */
function addToDo() {

    // Create a new element to hold the to-do item
    const toDoWrapper = document.createElement('form')
    toDoWrapper.classList.add('toDoWrapper')

    const newToDo = document.createElement('label')
    newToDo.setAttribute('for', `toDoList${counter}`)

    const inputWrapper = document.createElement('div')
    const selectToDo = document.createElement('input')
    selectToDo.setAttribute('type', 'checkbox')
    selectToDo.setAttribute('id', `toDoList${counter}`)
    selectToDo.classList.add('select')

    counter ++

    // Get the value of the to-do input field and whether the priority checkbox is checked
    const toDo = document.getElementById('toDo').value
    const isPriority = document.getElementById('priority').checked

    if (toDo !== "") {
        if (isPriority) {
            newToDo.classList.add('priorityToDo')
            newToDo.innerHTML = `Priority: ${toDo}`
        } else {
            newToDo.innerHTML = toDo
        }
        container.prepend(toDoWrapper)
        toDoWrapper.append(inputWrapper)
        inputWrapper.append(selectToDo)
        toDoWrapper.append(newToDo)
    }

    // Clear the value of the to-do input field and uncheck the priority checkbox
    document.getElementById('toDo').value = ""
    document.getElementById('priority').checked = false
}


// If the user clicks the delete button it removes all selected to-do items
function deleteToDos() {
    const selectedItems = document.querySelectorAll('.select:checked')
    selectedItems.forEach(item => {
        item.parentNode.parentNode.remove()
    })
    // Check if there are any to-do items remaining, if not reset the counter
    const remainingItems = document.querySelectorAll('.toDoWrapper')
    if(remainingItems.length === 0) {
        counter = 0
    }
}

// Get references to the priority and show all buttons
const priorities = document.getElementById('filterPriority')
priorities.addEventListener("click", filterPriority)

const showAllItems = document.getElementById('showAll')
showAllItems.addEventListener("click", showAll)

// This is a filter for all priority items
function filterPriority() {
    const allItems = document.querySelectorAll('.toDoWrapper')
    allItems.forEach(item => {
        if (!item.children[1].classList.contains('priorityToDo')) {
            item.style.display = 'none'
        }
    })
    showAllItems.removeAttribute('class', 'active')
    priorities.classList.add('active')
}

// This function is used to filter the to-do items based on their priority
function showAll() {
    const allItems = document.querySelectorAll('.toDoWrapper')
    allItems.forEach(item => {
        item.style.display = 'flex'
    })
    priorities.removeAttribute('class', 'active')
    showAllItems.classList.add('active')
}


// Change light and dark mode
const bgImage = document.querySelector('.bg-image')
const filterSection = document.querySelector('.filter')
const modusIconSun = document.getElementById('sun')
const modusIconMoon = document.getElementById('moon')

switchModeToDark()
switchModeToLight()

/* switchModeToLight() function adds 'lightModusWhite', 'bgWhite' class 
to document body, input and container, 
removes 'activeModus' class from modusIconSun and 
adds 'activeModus' class to modusIconMoon */
function switchModeToLight() {
    modusIconSun.addEventListener("click", () => {

        document.body.classList.add('lightModusWhite')
        input.classList.add('bgWhite')
        container.classList.add('bgWhite')
        filterSection.classList.add('bgWhite')    
        bgImage.classList.add('lightModus')

        //get all existing todo items
        const toDoWrappers = document.querySelectorAll('.toDoWrapper')
        //iterate through each todo item and add class
        toDoWrappers.forEach(toDoWrapper => toDoWrapper.classList.add('borderBottomWhite'))
    
        modusIconSun.classList.remove('activeModus')
        modusIconMoon.classList.add('activeModus')
    })
}

/* switchModeToDark() function removes 'lightModusWhite', 'bgWhite' class 
from document body, input and container, adds 'activeModus' class to modusIconSun 
and removes 'activeModus' class from modusIconMoon. */
function switchModeToDark() {
    modusIconMoon.addEventListener("click", () => {

        document.body.classList.remove('lightModusWhite')
        input.classList.remove('bgWhite')
        container.classList.remove('bgWhite')
        filterSection.classList.remove('bgWhite')    
        bgImage.classList.remove('lightModus')

        //get all existing todo items
        const toDoWrappers = document.querySelectorAll('.toDoWrapper')
        //iterate through each todo item and add class
        toDoWrappers.forEach(toDoWrapper => toDoWrapper.classList.remove('borderBottomWhite'))
    
        modusIconSun.classList.add('activeModus')
        modusIconMoon.classList.remove('activeModus')
    })
}
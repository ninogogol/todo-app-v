# To-Do Application
** This is a simple to-do application that allows users to add, delete and filter to-do items. **

## Adding a To-Do Item
- Click the submit button to add a new to-do item to the container.
- The user can also mark an item as priority by checking the priority checkbox.

## Deleting a To-Do Item
- Select the checkbox of the item(s) you want to delete.
- Click the delete button to remove the selected item(s) from the container.

## Filtering To-Do Items
- Click the 'Filter Priority' button to only show items that are marked as priority.
- Click the 'Show All' button to show all items in the container.

### Note
- If the user submits an empty input field, nothing will be added to the container.

### Technical details
- The code uses the DOM API to interact with the HTML elements on the page.
- It uses ```document.querySelector``` and ```document.getElementById``` to select elements, and ```addEventListener``` to attach event listeners to buttons.
- The addTodo function creates new div, p, and input elements, sets their attributes and classes, and appends them to the container.
- The deleteTodos function selects all elements with the class ```select:checked``` and removes their parent node.
- The filterPriority and showAll functions hide and show items based on the priority class.

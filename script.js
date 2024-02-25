const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const add = document.querySelector('.submit_button');
const clear_all_button=document.querySelector('.clear_all_button');
const filter_input=document.querySelector('.filter-input');
function addItem(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const newItemText = itemInput.value; // Get the value from the input element

    // Create a new list item element
    const newItem = document.createElement('li');
    newItem.textContent = newItemText; // Set its text content to the input value
    itemList.appendChild(newItem); // Append it to the item list

    // Create a remove mark element 
    const removemark = document.createElement('i');
    removemark.className = 'fa fa-remove';
    removemark.style.color = 'red';

    newItem.appendChild(removemark); // Append the remove mark to the new item

    // Define the remove function inside addItem to access newItem
    function remove() {
        newItem.remove();
    }
    function clearall(){
        newItem.remove();
    }
    function filter() {
        const filterValue = filter_input.value.toLowerCase(); // Get the input value and convert to lowercase
        const items = itemList.getElementsByTagName('li'); // Get all list items
    
        // Loop through each list item
        for (let i = 0; i < items.length; i++) {
            const itemText = items[i].textContent.toLowerCase(); // Get the text content of the current list item
            // Rest of the code within the loop
        
        
            // Check if the item's text content contains the filter value
            if (itemText.includes(filterValue)) {
                items[i].style.display = ''; // If it contains the filter value, display the item
            } else {
                items[i].style.display = 'none'; // If not, hide the item
            }
        }
    }
    

    // Add event listener to remove mark
    removemark.addEventListener('click', remove);
    clear_all_button.addEventListener('click',clearall);
    filter_input.addEventListener('input',filter)



    // Clear the input field after adding the item
    itemInput.value = '';
    
}

add.addEventListener('click', addItem);




/*function addItem(e) {
    e.preventDefault();

    // Validate input
    const newItemValue = itemInput.value.trim(); // Use the trimmed value for validation
   // if (newItemValue === '') {
     //  alert('Please add an item');
      //  return;
   // }

    // Create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItemValue)); // Use newItemValue

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);
    itemList.appendChild(li);
    itemInput.value = '';
}
function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon); // Use the icon variable, not the string 'icon'
    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}


// Event listeners
itemForm.addEventListener('submit', addItem); */ 

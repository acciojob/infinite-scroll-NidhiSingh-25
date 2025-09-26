//your code here!
const list = document.querySelector('#infi-list');
let itemCount = 0;

// Function to add items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    itemCount++;
    const li = document.createElement('li');
    li.textContent = 'Item ' + itemCount;
    list.appendChild(li);
  }
}

// Add 10 items initially
addItems(10);

// Listen for scroll events
list.addEventListener('scroll', () => {
  // Check if the user is at the bottom (or very close)
  if (list.scrollTop + list.clientHeight >= list.scrollHeight - 1) {
    addItems(2); // keep adding 2 items
  }
});

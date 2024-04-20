const items = Symbol('items');

class ShoppingList {
  constructor() {
    this[items] = [];
  }

  get itemList() {
    return this[items];
  }

  addItem(item) {
    this[items].push(item);
  }

  removeItem(index) {
    this[items].splice(index, 1);
  }
}

const shoppingList = new ShoppingList();

const itemInput = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');

function addItemToList() {
  const newItem = itemInput.value.trim();
  if (newItem !== '') {
    shoppingList.addItem(newItem);
    renderItems();
    itemInput.value = '';
  }
}

function removeItemFromList(index) {
  shoppingList.removeItem(index);
  renderItems();
}

function renderItems() {
  itemList.innerHTML = '';
  shoppingList.itemList.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => removeItemFromList(index));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
  });
}

addItemBtn.addEventListener('click', addItemToList);

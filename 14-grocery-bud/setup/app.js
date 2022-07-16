// ****** SELECT ITEMS **********
const form = document.querySelector('.grocery-form');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const input = document.getElementById('grocery');
const alerts = document.querySelector('.alert');
const clear = document.querySelector('.clear-btn');

//let array = [];
// edit option
let edit = false;
let editElement;
let editId = '';
// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem);
clear.addEventListener('click', clearItem);
window.addEventListener('DOMContentLoaded', setUpItem);

// ****** FUNCTIONS **********

function clearItem() {
  const items = list.querySelectorAll('.grocery-item');
  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  container.classList.remove('show-container');
  localStorage.removeItem('data');
  displayAlert('list cleared', 'success')
}

function addItem(e) {
  e.preventDefault();
  const value = input.value;
  const id = new Date().getTime().toString();
  
  if (value && !edit) {
    
    displayStorage(id, value);
    displayAlert('item added', 'success');
    // back to default
    setBackToDefault();
    // add to local STORAGE
    addToLocalStorage(id, value);
  } else if (value && edit) {
    editElement.innerHTML = value;
    //edit local storage 
    editLocalStorage(editId, value);
    displayAlert('item edited', 'success');
    setBackToDefault();
  } else {
    displayAlert('enter a damn value!', 'danger');
  }
}

// display alert
function displayAlert(text, alert) {
  alerts.innerHTML = text;
  alerts.classList.add(`alert-${alert}`);
  // remove alerts
  setTimeout(() => {
    alerts.innerHTML = '';
    alerts.classList.remove(`alert-${alert}`);
    
  }, 1000);
}

// delete btn 
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  let removeId = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove('show-container');
  }
  // remove to local storage 
  removeToLocalStorage(removeId);
  displayAlert('item removed', 'success');
}

// edit item
function editItem(e) {
  edit = true;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  editId = editElement.parentElement.dataset.id;
  input.value = editElement.textContent;
  submitBtn.textContent = 'edit';
}

// set to default
function setBackToDefault() {
  edit = false;
  input.value = '';
  submitBtn.textContent = 'submit';
}

// add to local STORAGE
// ****** LOCAL STORAGE **********

function removeToLocalStorage(id) {
  let storage = getLocalStorage();
  storage = storage.filter((item) => {
    if (item.id !== id) return item;
  });
  
  // rewrite storage local 
  localStorage.setItem('data', JSON.stringify(storage));
}

function addToLocalStorage(id, value) {
  const object = { id, value };
  let item = getLocalStorage();
  item.push(object);
  
  // re write local STORAGE
  localStorage.setItem('data', JSON.stringify(item));
  
}

function editLocalStorage(id, value) {
  /*
  // remove the edit element to local storage
  let storage = getLocalStorage();
  storage = storage.filter(item => {
    if (item.id !== id) return item;
  });
  
  // now add it 
  storage.push({ id, value });*/
  
  let storage = getLocalStorage();
  storage = storage.map(item => {
    if (item.id === id) item.value = value;
    return item;
  });
  localStorage.setItem('data', JSON.stringify(storage));
 
}

function getLocalStorage() {
  return localStorage.getItem('data') 
  ? JSON.parse(localStorage.getItem('data'))
  : [];
}
// ****** SETUP ITEMS **********

function setUpItem() {
  let storage = getLocalStorage();
  if (storage.length > 0) {
    storage.forEach(item => {
      displayStorage(item.id, item.value);
    });
  }
}

function displayStorage(id, value) {
    const element = document.createElement('article');
    // add class
    element.classList.add('grocery-item');
    // add attribute
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    // add content
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <button class="edit-btn" type="submit">
                <i class="fas fa-edit"></i>
              </button>
              <button class="delete-btn" type="submit">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;
    // select
    const editBtn = element.querySelector('.edit-btn');
    const deleteBtn = element.querySelector('.delete-btn');
    
    // add even LISTENERS
    editBtn.addEventListener('click', editItem);
    deleteBtn.addEventListener('click', deleteItem);
    list.appendChild(element);
    container.classList.add('show-container');
}
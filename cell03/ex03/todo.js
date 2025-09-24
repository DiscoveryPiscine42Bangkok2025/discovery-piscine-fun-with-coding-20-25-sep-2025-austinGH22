
const COOKIE_NAME = "todos";    
const listEl = document.getElementById("ft_list");
const newBtn = document.getElementById("new_btn");


function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days*24*60*60*1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

function getCookie(name) {
  const target = name + "=";
  const ca = document.cookie.split(";");
  for (let c of ca) {
    c = c.trim();
    if (c.indexOf(target) === 0) {
      return decodeURIComponent(c.substring(target.length, c.length));
    }
  }
  return "";
}

let todos = []; 

function loadTodos() {
  const raw = getCookie(COOKIE_NAME);
  if (!raw) {
    todos = [];
    return;
  }
  try {
    const arr = JSON.parse(raw);
    todos = Array.isArray(arr) ? arr : [];
  } catch {
    todos = [];
  }
}

function saveTodos() {
  setCookie(COOKIE_NAME, JSON.stringify(todos), 365);
}

function render() {
  listEl.innerHTML = ""; 

  for (const text of todos) {
    const item = document.createElement("div");
    item.className = "todo-item";
    item.textContent = text;        
    item.addEventListener("click", () => {
      const ok = confirm(`Remove this TO DO?\n\n"${text}"`);
      if (ok) {
        
        const idx = todos.indexOf(text);
        
        if (idx > -1) {
          todos.splice(idx, 1);
          saveTodos();
          render();
        }
      }
    });
    listEl.appendChild(item);
  }
}


function addNewTodo() {
  const value = prompt("Enter a new TO DO:");
  if (value && value.trim() !== "") 
    todos.unshift(value.trim());
    saveTodos();
    render();
  }
}


document.addEventListener("DOMContentLoaded", () => {
  loadTodos();
  render();
  newBtn.addEventListener("click", addNewTodo);
});

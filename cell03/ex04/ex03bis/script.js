
const COOKIE_NAME = "todos"; 
let todos = [];              


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
      return decodeURIComponent(c.substring(target.length));
    }
  }
  return "";
}

function loadTodos() {
  const raw = getCookie(COOKIE_NAME);
  if (!raw) { todos = []; return; }
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
  const $list = $('#ft_list');
  $list.empty(); // เคลียร์ก่อน

 
  for (const text of todos) {
    const $item = $('<div>')
      .addClass('todo-item')
      .text(text)                
      .on('click', function () {
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

    $list.append($item);          
  }
}


function addNewTodo() {
  const value = prompt("Enter a new TO DO:");
  if (value && value.trim() !== "") {
    todos.unshift(value.trim());  // อันใหม่ไว้บนสุด
    saveTodos();
    render();
  }
}


$(function () {
  loadTodos();
  render();


  $('#new_btn').on('click', addNewTodo);
});

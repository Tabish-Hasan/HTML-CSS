let listContainer = document.getElementById("list-container");

let inputBox = document.getElementById("input-box");

function add(){
  if(inputBox.value === ""){
    alert ("Add Your To-Do");
  }
  else{
    let toDo = document.createElement("li");
    toDo.textContent = inputBox.value;
    listContainer.appendChild(toDo);

    let span = document.createElement("span");
    span.textContent = "\u00d7";
    toDo.appendChild(span);

  }
  inputBox.value = "";
  saved();
}

listContainer.addEventListener("click", (el) => {
  if(el.target.tagName === "LI"){
    el.target.classList.toggle("checked")
    saved();
  }
  else if(el.target.tagName === "SPAN"){
    el.target.parentElement.remove();
    saved();
  }
})

function saved (){
  localStorage.setItem("toDos", listContainer.innerHTML);
}

function showed(){
  listContainer.innerHTML = localStorage.getItem("toDos");
}

showed();
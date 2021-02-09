// Initialisation avec la sélection

const todoList = document.querySelector("#list-items");
const todoInput = document.querySelector("#list-input");
const todoAdd = document.querySelector(".btn-add");
const msg = document.querySelector("#msg");
// Evènements
todoAdd.addEventListener('click',(e)=>{
    e.preventDefault();

    if(todoInput.value !== ""){
        const li = document.createElement("li");
        li.innerText = `${todoInput.value}`;
        todoList.appendChild(li);
        todoInput.value = '';
    }else{
        msg.innerText = "Error";
    }
});

todoList.addEventListener('click', (e)=>{
    console.log(e.target.remove());

});
//! Update pour un commit
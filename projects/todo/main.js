// Initialisation avec la sélection

const todoList = document.querySelector("#list-items");
const todoInput = document.querySelector("#list-input");
const todoAdd = document.querySelector(".btn-add");
const msg = document.querySelector("#msg");
// Evènements
todoAdd.addEventListener('click',(e)=>{
    console.log("Hey !");
    e.preventDefault();
    const newTodo = document.createElement('li');
    newTodo.className = "list-item";
    newTodo.appendChild(document.createTextNode(`${todoInput.value}`));
    if(todoInput.value === ""){
        msg.innerText = "Veuillez remplir les champs avant d'ajouter";
        msg.style.background = "yellow";
        setTimeout(()=>{
            msg.innerText = "";
            msg.style.background="transparent";
        }, 2500);
    }else{
        const todoRemove = document.createElement('button');
        const todoCheck = document.createElement('button');
        todoCheck.innerHTML = '<i class="far fa-check-square"></i>';
        todoRemove.innerHTML = '<i class="far fa-trash-alt"></i>';
        todoCheck.classList.add('item-check');
        todoRemove.classList.add('item-remove');
        newTodo.appendChild(todoCheck);
        newTodo.appendChild(todoRemove);
        todoList.appendChild(newTodo);
        todoInput.value="";
    }

});

todoList.addEventListener('click', (e)=>{
    console.log(e.target.parentNode);
    const button = e.target.parentNode;
    if(button.classList.contains('item-remove')){
        msg.innerText = `La tâche "${button.parentNode.textContent}" a bien été supprimée !`;
        msg.style.background = "greenyellow";
        setTimeout(()=>{
            msg.innerText = "";
            msg.style.background="transparent";
        }, 2500);
        button.parentNode.remove();
        console.log(button.parentNode.textContent);
    }else if(button.classList.contains('item-check')){
        if(button.parentNode.style.textDecoration==="line-through"){
            button.parentNode.style.textDecoration ="none";
        }else{
            button.parentNode.style.textDecoration ="line-through";
        }
        console.log(button.parentNode.style.textDecoration)
    }
});
//! Update pour un commit
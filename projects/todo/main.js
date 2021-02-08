// Initialisation avec la sélection

const todoList = document.querySelector("#list-items");
const todoInput = document.querySelector("#list-input");
const todoAdd = document.querySelector(".btn-add");
const msg = document.querySelector("#msg");
// Evènements
todoAdd.addEventListener('click',(e)=>{
    e.preventDefault();
    const newTodo = document.createElement('li');
    newTodo.className = "list-item";
    newTodo.appendChild(document.createTextNode(`${todoInput.value}`));
    newTodo.style.display="flex";
    newTodo.style.justifyContent = 'space-between';
    if(todoInput.value === ""){
        msg.innerText = "Veuillez remplir les champs avant d'ajouter";
        msg.style.background = "yellow";
        setTimeout(()=>{
            msg.innerText = "";
            msg.style.background="transparent";
        }, 2500);
    }else{
        const todoRemove = document.createElement('button');
        todoRemove.innerHTML = '<i class="far fa-trash-alt"></i>';
        todoRemove.classList.add('item-remove');
        newTodo.appendChild(todoRemove);
        
        todoList.appendChild(newTodo);
        todoInput.value="";
    }

});

todoList.addEventListener('click', (e)=>{
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
    }
})
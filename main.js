let todoInput;
let errorInfo;
let addBtn;
let ulList;
let newTodos;
let deleteBtn;

let popup;
let popupInfo;
let todoToEdit;
let popupInput;
let popupAddBtn;
let popupCloseBtn;


const main = () => {

    prepareDOMElements();
    prepareDOMEvents();
    
}

const prepareDOMElements = () => {

    todoInput = document.querySelector('.todo-input');
    errorInfo = document.querySelector('.error-info');
    addBtn = document.querySelector('.btn-add');
    ulList = document.querySelector('.todolist ul');
    
    popup = document.querySelector('.popup');
    popupCloseBtn = document.querySelector('.cancel');
    popupInfo = document.querySelector('.popup-info');
    // todoToEdit = document.querySelector('.');
    popupInput = document.querySelector('.popup-input');
    popupAddBtn = document.querySelector('.accept');
    deleteBtn = document.querySelector('.delete');

}


const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo);
    ulList.addEventListener('click', checkClick);
    popupCloseBtn.addEventListener('click',closePopup);
    popupAddBtn.addEventListener('click', changeTodoText);
    deleteBtn.addEventListener('click',deleteTodoText);
    todoInput.addEventListener('keyup',enterKeyCheck);
}


const addNewTodo =()=>{
    
    if(todoInput.value!=='')
    {
        
        newTodos = document.createElement('li');
        newTodos.textContent = todoInput.value;
        console.log(newTodos);
        ulList.append(newTodos);
        createToolsArea();
        todoInput.value = '';
        errorInfo.textContent = '';
        
        
    }else{
        errorInfo.textContent = 'brak treści zadania';

    }

}

const createToolsArea = () => {

    // <div class="tools">
    //     <button class="complete"><i class="fas fa-check"></i></button>
    //     <button class="edit">EDIT</button>
    //     <button class="delete"><i class="fas fa-times"></i></button>
    // </div>
    var div = document.createElement('div');
    div.classList.add('tools');
    newTodos.append(div);


    var btnComplete = document.createElement('button');
    btnComplete.classList.add('complete');
    btnComplete.innerHTML='<i class="fas fa-check"></i>'
    
    var btnEdit = document.createElement('button');
    btnEdit.classList.add('edit');
    btnEdit.innerHTML='EDIT'

    var btnDelete = document.createElement('button');
    btnDelete.classList.add('delete');
    btnDelete.innerHTML='<i class="fas fa-times"></i>';

    div.append(btnComplete,btnEdit,btnDelete);

    
}

const checkClick = e =>{

    if(e.target.matches('.complete')){
        e.target.closest('li').classList.toggle('completed');
        e.target.classList.toggle('completed');
    }else if(e.target.matches('.edit')){
        editTodo(e);
        
    }else if(e.target.matches('.delete')){
        console.log('delete');
        deleteTodoText(e);
    }

}

const editTodo = e => {

    todoToEdit=e.target.closest('li');
    //console.log(todoToEdit);
    popupInput.value = todoToEdit.firstChild.textContent;
    popup.style.display = 'flex';


}

const closePopup = () =>{

    popup.style.display = 'none';
    popupInfo.textContent = '';
}

const changeTodoText = () => {

    if(popupInput.value !== ''){

        todoToEdit.firstChild.textContent = popupInput.value;
        popup.style.display='none';
        popupInfo.textContent = '';

    }else{
        popupInfo.textContent='musisz podac jakas tresc!';
    }

}

const deleteTodoText = e => {

        
        e.target.closest('li').remove();
        const allTodos = ulList.querySelectorAll('li');
        if(allTodos.length===0){
            errorInfo.textContent = 'brak zadan na liscie';
        }
}

const enterKeyCheck = e => {

    if(e.key ==='Enter'){

        addNewTodo();

    }


}

document.addEventListener('DOMContentLoaded', main);

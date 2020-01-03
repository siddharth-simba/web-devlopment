const form = document.querySelector("#task-form");
const tasklist = document.querySelector(".collection");
const clearbtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskinput = document.querySelector("#task");


loadEventListeners();

function loadEventListeners(){
    form.addEventListener('submit',addTask);
    tasklist.addEventListener('click',removetask)
    clearbtn.addEventListener('click' , cleartasks)
    filter.addEventListener('keyup',filtertasks)
    document.addEventListener('DOMContentLoaded' , gettasks)

}

function gettasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = []; 
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        const li = document.createElement("li");
        li.className = "collection-item";
        li.appendChild(document.createTextNode(task));

        link.className = "delete-item secondary-content";
        link.innerHTML = '<i class="fa fa-remove"></i>'
        li.appendChild(link);
        tasklist.appendChild(li);
    });

}

function addTask(e){
    if(taskinput.value ===""){
        alert("add task")
    }

   const li = document.createElement("li");
   li.className = "collection-item";
   li.appendChild(document.createTextNode(taskinput.value));

   const link = document.createElement("a");
   link.className = "delete-item secondary-content";
   link.innerHTML = '<i class="fa fa-remove"></i>'
   li.appendChild(link);
   tasklist.appendChild(li);
   storeTaskInLocalStorage(taskinput.value)
   taskinput.value = "";

  


    e.preventDefault();
}

function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task)

    localStorage.setItem('tasks' , JSON.stringify(tasks));
}

function removetask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm("are you sure"))
        e.target.parentElement.parentElement.remove();
    }

}

function cleartasks(){
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }
}

function filtertasks(e){
    const text = e.target.value.toLowerCase()
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }
        else{
            task.style.display = 'none'
        }

    });

}

function addTask(){
    var taskText = document.getElementById("taskInput").value;

    //this is if I try to add a empty task
    if(taskText.length === 0) return alert("This is empty");



    var newTask = document.createElement("p");

    //I added a button element
    const deleteTask = document.createElement("button");

    //I add a placeholder on the button
    deleteTask.textContent = 'Delete';

    //I added an id to the button
    deleteTask.id = 'deleteBtn';


    /*I need to get the function to work
    so I dont have to use the id cause i already have a variable
    assigned to it
    
    
    I added the function in the event listener instead of
    calling an existing function*/
    deleteTask.addEventListener("click",function(){
        newTask.remove();
    });

    newTask.innerText = taskText;

    document.getElementById("taskList").appendChild(newTask);
    

    //how to attach the new tasks that is added with the delete btn
    newTask.appendChild(deleteTask);

    document.getElementById("taskInput").value="";

    newTask.addEventListener("click",function(){
        newTask.classList.toggle("completed");
    });
    
}




document.getElementById("addBtn").addEventListener("click",addTask);


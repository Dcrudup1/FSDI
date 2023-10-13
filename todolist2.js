let toDoArray = [];

function addToDo(){
    const addInput = document.getElementById("add-input");
    const addList = document.getElementById("add-list");
    const addCount = document.getElementById("add-count");
    
    const addnew = addInput.value.trim();
    if (addnew === ""){
        alert("please Enter a new Task");
        return;
    }
    toDoArray.push(addnew);
    
    addInput.value = "";

    const addItem = document.createElement("li");
    addItem.textContent = addnew;
    addList.appendChild(addItem);

    addCount.textContent = toDoArray.length;
    
    console.log("Task: ", toDoArray)
}

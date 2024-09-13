function addNewTask() {

    //Obtengo el valor del campo de la nueva tarea
    const newTaskText = document.getElementById("newTask").value;

    //Validamos que el valor no este vacío
    if(newTaskText === "") {
        alert("Tienes que ingresar una tarea");
    return;
    }

    //Creamos el elemento lista
    let newTask = document.createElement("li");
    newTask.textContent = newTaskText + " ";

    //Creamos botón eliminar
    let buttonDelete = document.createElement("Button");
    buttonDelete.textContent = "Eliminar";
    
    buttonDelete.onclick = function() {
        newTask.remove();
    }

    //Agregar botón de eliminar al elemento de la lista
    newTask.appendChild(buttonDelete);

    //Agregar tarea a la lista
    document.getElementById("listTask").appendChild(newTask);

    //Limpiar cuadro de texto luego de agregar tarea
    document.getElementById("newTask").value = " ";

}



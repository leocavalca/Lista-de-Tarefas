
//Selecionando/localizando todas as tags que serão trabalhadas inicialmente
const inputElement = document.querySelector("#new_task_input");
const addTaskButton = document.querySelector("#new_task_btn");
const listItemRow = document.querySelector(".list-item-row");
const confirmItemRow = document.querySelector(".confirm-item-row");
const deleteItemRow = document.querySelector(".delete-item-row");
const tasksContainer = document.querySelector(".task-container");
const confirmBtn = document.querySelector(".confirm-icon");
const deleteBtn = document.querySelector(".delete-icon");
const canceledTasks = document.querySelector(".canceled-tasks");
const doneTasks = document.querySelector(".done-tasks");
//Variáveis de uso global para controle
var idNumber = 0;


//Criando a chamada de clicar para adicionar tarefa
addTaskButton.addEventListener("click", () => handleAddTask());



//Seção de  funções
/*--------------------------------------------------------------- */

//Função que adiciona a tarefa
const handleAddTask = () => {
    let valorTask = inputElement.value;
    if(valorTask == ""){
        return inputElement.classList.add("error");
    }
    else{

      //Realizando contagem para atribuir valor dinâmico a cada id de cada linha de tarefas adicionadas
      ++idNumber;
      idNumber.toString();

      //Criando p, que ficará dentro da list-item-row e definindo seus atributos
      const taskContent = document.createElement("p");
      taskContent.innerText = valorTask;
      taskContent.classList.add("task-item");
      taskContent.setAttribute("id",idNumber);
      
      //Criando i, que ficará dentro da confirm-item-row e definindo seus atributos e funções
      const confirmItem = document.createElement("button");
      confirmItem.classList.add("fa-solid");
      confirmItem.classList.add("fa-check");
      confirmItem.classList.add("confirm-icon");
      confirmItem.setAttribute("id",idNumber);
      confirmItem.addEventListener("click",() => handleConfirmTask(event));

      //Criando i, que ficará dentro da delete-item-row e definindo seus atributos e funções
      const deleteItem = document.createElement("button");
      deleteItem.classList.add("far");
      deleteItem.classList.add("fa-trash-alt");
      deleteItem.classList.add("delete-icon");
      deleteItem.setAttribute("id",idNumber);
      deleteItem.addEventListener("click", () => handleDeleteTask());

      //Colocando cada tag criada em seu lugar
      listItemRow.appendChild(taskContent);
      confirmItemRow.appendChild(confirmItem);
      deleteItemRow.appendChild(deleteItem);
      

      handleInputChange();
      inputElement.classList.remove("error");
      inputElement.value = "";
      
    }
    
}

//Função que executa tarefa
const handleConfirmTask = () => {
  const confEl = event.target || event.srcElement;
  const id = confEl.id;
  //Removendo texto, levando esse mesmo texto para a aba de tarefas feitas
  let confTask = document.getElementById(id);
  const taskConfirm = document.createElement("p");
  taskConfirm.innerText = confTask.innerText;
  doneTasks.appendChild(taskConfirm);
  confTask.remove();
  //Removendo ícones
  const confirmedConf = document.getElementById(id);
  confirmedConf.remove();
  const confirmedDel = document.getElementById(id);
  confirmedDel.remove();

}


//Função que cancela a tarefa
const handleDeleteTask = () => {
  const deleEl = event.target || event.srcElement;
  const id = deleEl.id;
  //Removendo texto, levando esse mesmo texto para a aba de tarefas canceladas
  let delTask = document.getElementById(id);
  const taskCancel = document.createElement("p");
  taskCancel.innerText = delTask.innerText;
  canceledTasks.appendChild(taskCancel);
  delTask.remove();
  //Removendo ícones
  const delIconConf = document.getElementById(id);
  delIconConf.remove();
  const delIconDel = document.getElementById(id);
  delIconDel.remove();
  
  
  

}

const handleInputChange = () => {
  let valorTask = inputElement.value;
  if (valorTask != "") {
    return inputElement.classList.remove("error");
  }
};
/*-------------------------------------------------------------- */

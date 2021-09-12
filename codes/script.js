let input = document.getElementById("task");
let button = document.getElementById("buttonTask");

let lista_de_tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
function addTask() {
    let itemList = input.value;
    if (input.value === "") {
        alert("Digite a tarefa");
    } else {
        
        let tarefa = { id: Math.random(), conteudo: itemList };
        
        document.getElementById("items").innerHTML += `<li>${tarefa.conteudo} 
    <button id="btnDelete" onclick="apagar_tarefa(${tarefa.id})">Apagar</button></li>`;
        lista_de_tarefas.push(tarefa);
        localStorage.setItem("tarefas", JSON.stringify(lista_de_tarefas));
    }
}
function apagar_tarefa(id) {
    let nova_lista = [];
  
    for (let i = 0; i < lista_de_tarefas.length; i++) {
        if (lista_de_tarefas[i].id != id) {
            nova_lista.push(lista_de_tarefas[i]);
        }
    }
    
    localStorage.setItem("tarefas", JSON.stringify(nova_lista));
    
    location.reload();
}


if (lista_de_tarefas.length > 0) {
    for (let index = 0; index < lista_de_tarefas.length; index++) {
        document.getElementById("items").innerHTML += `<li>${lista_de_tarefas[index].conteudo} 
        <button onclick="apagar_tarefa(${lista_de_tarefas[index].id})">Apagar</button></li>`;
    }
}
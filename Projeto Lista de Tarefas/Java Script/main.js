const pegaValores = document.getElementById('pegaValores')
const adicionarTarefas = document.getElementById('adicionaTarefas')
const listaDeTarefas = document.getElementById('listaDeTarefas')
const removeValores = document.getElementById(`removeValores`)


function clicar() {
    const ler = pegaValores.value;
    if (!ler) {
        alert(`O campo de texto está vazio`)
        return
    }
    const tarefasExistentes = listaDeTarefas.querySelectorAll('li')
    for (const tarefa of tarefasExistentes) {
        if (tarefa.textContent === ler) {
            alert(`você já digitou essa tarefa`)
            return
        }
    }
    const novaLista = document.createElement(`li`)
    novaLista.textContent = ler;
    listaDeTarefas.appendChild(novaLista)
    const tarefaFeita = document.createElement(`button`)
    tarefaFeita.textContent = 'Feito'
    tarefaFeita.addEventListener('click', () => {
        novaLista.style.textDecoration = 'line-through';
    })
    listaDeTarefas.appendChild(tarefaFeita)
    const remover = removeValores
    remover.addEventListener('click', () => {
        remover = listaDeTarefas.innerHTML = ``
    })
   
    

    

    
    
}


adicionarTarefas.addEventListener('click', clicar)



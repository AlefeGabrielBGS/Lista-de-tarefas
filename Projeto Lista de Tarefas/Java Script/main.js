const pegaValores = document.getElementById('pegaValores')
const adicionarTarefas = document.getElementById('adicionaTarefas')
const listaDeTarefas = document.getElementById('listaDeTarefas')


function clicar() {
    const ler = pegaValores.value;
    const novaLista = document.createElement(`li`)
    novaLista.textContent = ler;
    listaDeTarefas.appendChild(novaLista)
    const tarefaFeita = document.createElement(`button`)
    tarefaFeita.textContent = 'Feito'
    tarefaFeita.addEventListener('click', () => {
        novaLista.style.textDecoration = 'line-through';
    })
    listaDeTarefas.appendChild(tarefaFeita)

    
    
}


adicionarTarefas.addEventListener('click', clicar)



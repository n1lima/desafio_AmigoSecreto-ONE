//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo(){
    let inputAmigo  = document.querySelector('#amigo');
    let nomeAmigo = inputAmigo.value;

    if (nomeAmigo == ''){
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(nomeAmigo);
        inputAmigo.value = '';
        inputAmigo.focus();
    }
}

function atualizarLista(){
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = ''; 

    for(let i = 0; i < amigos.length; i++){
        let elementoLista = document.createElement('li');
        elementoLista.innerHTML = amigos[i];
        lista.appendChild(elementoLista);
    }
}
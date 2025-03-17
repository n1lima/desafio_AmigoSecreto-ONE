//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo(){
    let inputAmigo  = document.querySelector('#amigo');
    let nomeAmigo = inputAmigo.value;

    if (nomeAmigo == ''){
        alert('Por favor, insira um nome.');
        return;
    } 

    amigos.push(nomeAmigo);
    inputAmigo.value = '';
    inputAmigo.focus();

    atualizarLista();
}

function atualizarLista(){
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = ''; 

     amigos.forEach((amigo) => {
       let elementoLista = document.createElement('li');
       elementoLista.textContent = amigo;
       lista.appendChild(elementoLista);
     });
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert('Você não adicionou nenhum amigo!');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.querySelector('#resultado');
    if (resultado){
        resultado.innerHTML = `<li>${amigoSorteado}</li>`;
    } else {
        console.error("Elemento com id='resultado' não encontrado.");
    }
}
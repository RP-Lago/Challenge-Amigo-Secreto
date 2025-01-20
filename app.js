//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Desafio de Programação em JavaScript.
// Lista para armazenar os nomes dos amigos
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    // Valida se o campo de texto está vazio
    if (nomeAmigo === '') {
        alert("Por favor, digite um nome válido.");
        return; // Encerra a função caso o campo esteja vazio
    }

    // Adiciona o nome à lista de amigos
    listaAmigos.push(nomeAmigo);
    inputAmigo.value = ''; // Limpa o campo de texto

    // Atualiza a lista de nomes na tela
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigosElemento = document.getElementById('listaAmigos');
    listaAmigosElemento.innerHTML = ''; // Limpa a lista anterior

    // Cria um item de lista para cada nome na listaAmigos
    listaAmigos.forEach(amigo => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigosElemento.appendChild(itemLista);
    });
}


// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    const resultadoElemento = document.getElementById('resultado');
     // Verifica se há pelo menos dois amigos na lista para realizar o sorteio
     if (listaAmigos.length < 2) {
        resultadoElemento.innerHTML = '<p>Adicione pelo menos dois amigos para sortear.</p>';
        return;
    }

    // Sorteia um índice aleatório na lista
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado];

    // Exibe o resultado na tela
    resultadoElemento.innerHTML = `<p>O amigo sorteado foi: <strong>${amigoSorteado}</strong></p>`;
}
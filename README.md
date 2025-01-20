# <h1 align="center"> Amigo Secreto - Desafio de Lógica de Programação </h1>

![demonstração](https://github.com/user-attachments/assets/5f0ea4c2-d5d0-47a5-9d8a-c20c1f5e041c)

## Descrição do Projeto

Este projeto é parte de um desafio para fortalecer minhas habilidades em lógica de programação. O objetivo é desenvolver uma aplicação web simples que permita sortear um amigo secreto entre os participantes.

A aplicação permite aos usuários:

*   Adicionar nomes de amigos a uma lista.
*   Validar se o campo de nome foi preenchido.
*   Visualizar a lista de amigos adicionados.
*   Realizar um sorteio aleatório para determinar quem é o amigo secreto de cada participante.

## Como Executar o Projeto

1.  **Clonar o repositório:**

    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```
2.  **Abrir o arquivo `index.html` em seu navegador:**
    *   O projeto será exibido na tela do seu navegador

## Funcionalidades

*   **Adicionar Nomes:** Digite o nome do amigo no campo de texto e clique em "Adicionar". O nome será exibido na lista abaixo.
*   **Validação de Entrada:** Se o campo estiver vazio ao adicionar um nome, um alerta será exibido solicitando que você digite um nome válido.
*   **Visualizar Lista:** A lista com os nomes dos amigos adicionados é exibida abaixo do campo de entrada.
*   **Sortear Amigo Secreto:** Ao clicar no botão "Sortear Amigo", um dos nomes da lista será selecionado aleatoriamente e exibido na tela como resultado.

## Estrutura do Projeto

O projeto é composto por três arquivos principais:

*   **`index.html`**: Contém a estrutura HTML da página web, incluindo elementos de entrada (campos de texto), botões e a área de exibição dos resultados.
*   **`style.css`**: Define os estilos visuais da página web, como cores, layout e fontes.
*   **`app.js`**: Contém o código JavaScript que implementa a lógica do sorteio, a validação da entrada, a manipulação da lista de nomes e o resultado do sorteio.

##  Tecnologias Usadas

*   **HTML5:** Para a estrutura da página.
*   **CSS3:** Para os estilos e layout da página.
*   **JavaScript:** Para a lógica da aplicação e manipulação do DOM (Document Object Model).

##  Desafios Encontrados e Soluções

*   **Validação de Entrada:** Inicialmente, o botão "Adicionar" não verificava se o campo de nome estava vazio. Adicionei uma validação em JavaScript para alertar o usuário caso ele tente adicionar um nome sem preencher o campo.
*   **Sorteio Aleatório:** Implementei uma função que utiliza `Math.random()` para selecionar um nome aleatoriamente da lista de nomes. Adicionei uma verificação na função para garantir que o usuário adicione pelo menos dois amigos para poder realizar o sorteio.
*   **Exibição do Resultado:** Usei o DOM para adicionar um texto na página que mostre o nome sorteado, garantindo que o resultado apareça logo após o sorteio ser realizado.

## Próximos Passos

*   Adicionar tratamento de erro para os casos em que o sorteio não é válido ou se houver algum erro na leitura do campo de texto.
*   Personalizar os estilos, adicionando elementos visuais para que o desafio fique mais atraente para os usuários.

##  Observações

Este projeto é uma forma de aplicar o que aprendi no curso e aprofundar meus conhecimentos em lógica de programação.

O README é uma ferramenta muito importante para documentar seu código, além de facilitar o entendimento por outras pessoas, e também te ajuda a entender a sua própria lógica mais tarde.

## Autor

| [<img loading="lazy" src="https://github.com/user-attachments/assets/cbc3d1d5-895f-4612-8385-2be587d3a10b" width=115><br><sub>Robson Pereira Lago</sub>](https://www.linkedin.com/in/rp-lago/) |
| :---: |


## Com quem venho aprendendo.
<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/guilherme-lima-458925178/" target="_blank">
        <img src="https://github.com/user-attachments/assets/d1730b96-e01d-4d7f-893c-b1e0a212aa93" alt="Guilherme Lima" style="border-radius: 50%; width: 120px; height: 120px;">
      </a>
      <br>Guilherme Lima
    </td>
    <td align="center">
      <a href="https://br.linkedin.com/in/rafaella-ballerini-45875016a" target="_blank">
        <img src="https://github.com/user-attachments/assets/e9d5c5f2-e1d1-47c4-8369-910c85904e19" alt="Rafaella Ballerini" style="border-radius: 50%; width: 120px; height: 120px;">
      </a>
      <br>Rafaella Ballerini
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/guilhermeazevedosilveira/" target="_blank">
        <img src="https://github.com/user-attachments/assets/55906ff9-4ad1-4f80-8807-15733485e917" alt="Guilherme Silveira" style="border-radius: 50%; width: 120px; height: 120px;">
      </a>
      <br>Guilherme Silveira
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/valquiria-alencar" target="_blank">
        <img src="https://github.com/user-attachments/assets/4766f2e6-617c-460c-a4f6-236493bef7e6" alt="Valquiria Alencar" style="border-radius: 50%; width: 120px; height: 120px;">
      </a>
      <br>Valquiria Alencar
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/monicamhillman/" target="_blank">
        <img src="https://github.com/user-attachments/assets/99cf8912-188a-4e08-8d95-68a39cea0a48" alt="Monica Hillman" style="border-radius: 50%; width: 120px; height: 120px;">
      </a>
      <br>Monica Hillman
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/gabrielleribeiro/" target="_blank">
        <img src="https://github.com/user-attachments/assets/fc88c37f-4f13-4ea6-85b7-bf624adf1af2" alt="Gabrielle Ribeiro" style="border-radius: 50%; width: 120px; height: 120px;">
      </a>
      <br>Gabrielle Ribeiro
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/rcaneppele" target="_blank">
        <img src="https://github.com/user-attachments/assets/526109fb-9eb0-47d4-a736-6060f668b472" alt="Rafael Caneppele" style="border-radius: 50%; width: 120px; height: 120px;">
      </a>
      <br>Rafael Caneppele
    </td>
  </tr>
</table>


##  Links Úteis

[Como escrever um README incrível](https://www.alura.com.br/artigos/escrever-bom-readme)

Acesse: [Alura](https://cursos.alura.com.br/) e meu [LinkedIn](https://www.linkedin.com/in/rp-lago/).

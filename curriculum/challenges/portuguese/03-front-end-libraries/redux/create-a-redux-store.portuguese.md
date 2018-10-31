---
id: 5a24c314108439a4d403614b
title: Create a Redux Store
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Crie um repositório Redux
---

## Description
<section id="description"> O Redux é uma estrutura de gerenciamento de estado que pode ser usada com diversas tecnologias da Web, incluindo o React. No Redux, existe um único objeto de estado que é responsável por todo o estado do seu aplicativo. Isso significa que se você tivesse um aplicativo React com dez componentes e cada componente tivesse seu próprio estado local, todo o estado do seu aplicativo seria definido por um único objeto de estado hospedado no <code>store</code> do Redux. Este é o primeiro princípio importante a ser entendido ao se aprender Redux: a loja Redux é a única fonte de verdade quando se trata do estado da aplicação. Isso também significa que sempre que qualquer parte do seu aplicativo quiser atualizar o estado, ele <strong>deverá</strong> fazê-lo através da loja Redux. O fluxo de dados unidirecional facilita o acompanhamento do gerenciamento de estado no seu aplicativo. </section>

## Instructions
<section id="instructions"> O <code>store</code> Redux é um objeto que mantém e gerencia o <code>state</code> aplicativo. Existe um método chamado <code>createStore()</code> no objeto Redux, que você usa para criar o <code>store</code> Redux. Esse método usa uma função de <code>reducer</code> como um argumento obrigatório. A função de <code>reducer</code> é coberta em um desafio posterior e já está definida para você no editor de código. Ele simplesmente toma o <code>state</code> como um argumento e retorna o <code>state</code> . Declare uma variável de <code>store</code> e atribua-a ao método <code>createStore()</code> , passando o <code>reducer</code> como argumento. <strong>Nota:</strong> O código no editor usa a sintaxe do argumento padrão ES6 para inicializar este estado para manter um valor de <code>5</code> . Se você não estiver familiarizado com os argumentos padrão, consulte a <a target="_blank" href="https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions">seção ES6 no Currículo</a> que aborda este tópico. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O armazenamento do redux existe.
    testString: 'assert(typeof store.getState === "function", "The redux store exists.");'
  - text: O repositório do redux tem um valor de 5 para o estado.
    testString: 'assert(store.getState()=== 5, "The redux store has a value of 5 for the state.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

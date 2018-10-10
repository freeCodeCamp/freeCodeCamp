---
id: 5a24c314108439a4d403615b
title: Copy an Object with Object.assign
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Copiar um objeto com Object.assign
---

## Description
<section id="description"> Os últimos vários desafios trabalharam com matrizes, mas existem maneiras de ajudar a impor a imutabilidade do estado quando o estado é um <code>object</code> também. Uma ferramenta útil para manipular objetos é o utilitário <code>Object.assign()</code> . <code>Object.assign()</code> pega um objeto de destino e objetos de origem e mapeia propriedades dos objetos de origem para o objeto de destino. Todas as propriedades correspondentes são substituídas por propriedades nos objetos de origem. Esse comportamento é comumente usado para fazer cópias superficiais de objetos, passando um objeto vazio como o primeiro argumento seguido pelo objeto (s) que você deseja copiar. Aqui está um exemplo: <code>const newObject = Object.assign({}, obj1, obj2);</code> Isto cria <code>newObject</code> como um novo <code>object</code> , que contém as propriedades que existem actualmente no <code>obj1</code> e <code>obj2</code> . </section>

## Instructions
<section id="instructions"> O estado e as ações do Redux foram modificados para manipular um <code>object</code> para o <code>state</code> . Edite o código para retornar um novo objeto de <code>state</code> para ações com o tipo <code>ONLINE</code> , que define a propriedade <code>status</code> como <code>online</code> . Tente usar <code>Object.assign()</code> para completar o desafio. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O armazenamento do Redux deve existir e inicializar com um estado equivalente ao objeto <code>defaultState</code> declarado na linha 1.
    testString: 'assert((function() { const expectedState = { user: "CamperBot", status: "offline", friends: "732,982", community: "freeCodeCamp" }; const initialState = store.getState(); return DeepEqual(expectedState, initialState); })(), "The Redux store should exist and initialize with a state that is equivalent to the <code>defaultState</code> object declared on line 1.");'
  - text: <code>wakeUp</code> e <code>immutableReducer</code> ambos devem ser funções.
    testString: 'assert(typeof wakeUp === "function" && typeof immutableReducer === "function", "<code>wakeUp</code> and <code>immutableReducer</code> both should be functions.");'
  - text: Despachar uma ação do tipo <code>ONLINE</code> deve atualizar o <code>status</code> da propriedade no estado para <code>online</code> - <code>online</code> e NÃO deve alterar o estado.
    testString: 'assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch({type: "ONLINE"}); const finalState = store.getState(); const expectedState = { user: "CamperBot", status: "online", friends: "732,982", community: "freeCodeCamp" }; return isFrozen && DeepEqual(finalState, expectedState); })(), "Dispatching an action of type <code>ONLINE</code> should update the property <code>status</code> in state to <code>online</code> and should NOT mutate state.");'
  - text: <code>Object.assign</code> deve ser usado para retornar o novo estado.
    testString: 'getUserInput => assert(getUserInput("index").includes("Object.assign"), "<code>Object.assign</code> should be used to return new state.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

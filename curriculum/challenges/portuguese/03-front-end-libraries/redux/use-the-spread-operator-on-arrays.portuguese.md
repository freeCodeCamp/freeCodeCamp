---
id: 5a24c314108439a4d4036159
title: Use the Spread Operator on Arrays
challengeType: 6
videoUrl: ''
localeTitle: Use o operador de propagação em matrizes
---

## Description
<section id="description"> Uma solução do ES6 para ajudar a impor a imutabilidade do estado no Redux é o operador de spread: <code>...</code> O operador de spread tem uma variedade de aplicações, uma das quais é adequada ao desafio anterior de produzir um novo array a partir de um array existente. Essa é uma sintaxe relativamente nova, mas comumente usada. Por exemplo, se você tem um array <code>myArray</code> e escreve: <code>let newArray = [...myArray];</code> <code>newArray</code> é agora um clone de <code>myArray</code> . Ambas as matrizes ainda existem separadamente na memória. Se você executar uma mutação como <code>newArray.push(5)</code> , <code>myArray</code> não será alterado. O <code>...</code> efetivamente <i>distribui</i> os valores em <code>myArray</code> em uma nova matriz. Para clonar uma matriz, mas adicionar valores adicionais na nova matriz, você poderia escrever <code>[...myArray, &#39;new value&#39;]</code> . Isso retornaria uma nova matriz composta dos valores em <code>myArray</code> e a string <code>&#39;new value&#39;</code> como o último valor. A sintaxe de propagação pode ser usada várias vezes na composição da matriz como essa, mas é importante observar que ela faz apenas uma cópia superficial da matriz. Ou seja, apenas fornece operações de matriz imutável para matrizes unidimensionais. </section>

## Instructions
<section id="instructions"> Use o operador de propagação para retornar uma nova cópia de estado quando uma tarefa for adicionada. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O repositório Redux deve existir e inicializar com um estado igual a <code>[Do not mutate state!]</code> .'
    testString: 'assert((function() { const initialState = store.getState(); return ( Array.isArray(initialState) === true && initialState[0] === "Do not mutate state!"); })(), "The Redux store should exist and initialize with a state equal to <code>[Do not mutate state!]</code>.");'
  - text: <code>addToDo</code> e <code>immutableReducer</code> ambos devem ser funções.
    testString: 'assert(typeof addToDo === "function" && typeof immutableReducer === "function", "<code>addToDo</code> and <code>immutableReducer</code> both should be functions.");'
  - text: Despachar uma ação do tipo <code>ADD_TO_DO</code> no repositório Redux deve adicionar um item <code>todo</code> e NÃO deve sofrer mutação.
    testString: 'assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch(addToDo("__TEST__TO__DO__")); const finalState = store.getState(); const expectedState = [ "Do not mutate state!", "__TEST__TO__DO__" ]; return( isFrozen && DeepEqual(finalState, expectedState)); })(), "Dispatching an action of type <code>ADD_TO_DO</code> on the Redux store should add a <code>todo</code> item and should NOT mutate state.");'
  - text: O operador de propagação deve ser usado para retornar o novo estado.
    testString: 'getUserInput => assert(getUserInput("index").includes("...state"), "The spread operator should be used to return new state.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

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

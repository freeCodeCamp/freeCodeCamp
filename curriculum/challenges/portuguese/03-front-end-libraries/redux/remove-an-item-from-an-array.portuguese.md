---
id: 5a24c314108439a4d403615a
title: Remove an Item from an Array
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Remover um item de uma matriz
---

## Description
<section id="description"> Hora de praticar a remoção de itens de uma matriz. O operador de spread também pode ser usado aqui. Outros métodos JavaScript úteis incluem <code>slice()</code> e <code>concat()</code> . </section>

## Instructions
<section id="instructions"> O redutor e o criador de ações foram modificados para remover um item de uma matriz com base no índice do item. Termine de gravar o redutor para que uma nova matriz de estado seja retornada com o item no índice específico removido. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O repositório Redux deve existir e inicializar com um estado igual a <code>[0,1,2,3,4,5]</code>'
    testString: 'assert((function() { const initialState = store.getState(); return (Array.isArray(initialState) === true && DeepEqual(initialState, [0, 1, 2, 3, 4, 5])); })(), "The Redux store should exist and initialize with a state equal to <code>[0,1,2,3,4,5]</code>");'
  - text: <code>removeItem</code> e <code>immutableReducer</code> ambos devem ser funções.
    testString: 'assert(typeof removeItem === "function" && typeof immutableReducer === "function", "<code>removeItem</code> and <code>immutableReducer</code> both should be functions.");'
  - text: Despachar o criador da ação <code>removeItem</code> deve remover itens do estado e NÃO deve alterar o estado.
    testString: 'assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch(removeItem(3)); const state_1 = store.getState(); store.dispatch(removeItem(2)); const state_2 = store.getState(); store.dispatch(removeItem(0)); store.dispatch(removeItem(0)); store.dispatch(removeItem(0)); const state_3 = store.getState(); return isFrozen && DeepEqual(state_1, [0, 1, 2, 4, 5]) && DeepEqual(state_2, [0, 1, 4, 5]) && DeepEqual(state_3, [5]); })(), "Dispatching the <code>removeItem</code> action creator should remove items from the state and should NOT mutate state.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
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

---
id: 5a24c314108439a4d403615a
title: Remove an Item from an Array
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Eliminar un artículo de una matriz
---

## Description
<section id="description"> Es hora de practicar la eliminación de elementos de una matriz. El operador de propagación se puede utilizar aquí también. Otros métodos útiles de JavaScript incluyen <code>slice()</code> y <code>concat()</code> . </section>

## Instructions
<section id="instructions"> El reductor y el creador de acciones se modificaron para eliminar un elemento de una matriz según el índice del elemento. Termine de escribir el reductor para que se devuelva una nueva matriz de estado con el elemento en el índice específico eliminado. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'La tienda Redux debería existir e inicializarse con un estado igual a <code>[0,1,2,3,4,5]</code>'
    testString: 'assert((function() { const initialState = store.getState(); return (Array.isArray(initialState) === true && DeepEqual(initialState, [0, 1, 2, 3, 4, 5])); })(), "The Redux store should exist and initialize with a state equal to <code>[0,1,2,3,4,5]</code>");'
  - text: <code>removeItem</code> y <code>immutableReducer</code> deben ser funciones.
    testString: 'assert(typeof removeItem === "function" && typeof immutableReducer === "function", "<code>removeItem</code> and <code>immutableReducer</code> both should be functions.");'
  - text: El envío del creador de acciones <code>removeItem</code> debe eliminar elementos del estado y NO debe mutar el estado.
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

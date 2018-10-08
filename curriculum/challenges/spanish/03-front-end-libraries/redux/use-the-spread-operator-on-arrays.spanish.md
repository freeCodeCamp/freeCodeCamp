---
id: 5a24c314108439a4d4036159
title: Use the Spread Operator on Arrays
localeTitle: Utilice el operador de propagación en matrices
challengeType: 6
isRequired: false
---

## Description
<section id='description'> 
Una solución de ES6 para ayudar a imponer la inmutabilidad del estado en Redux es el operador de propagación: <code>...</code> El operador de difusión tiene una variedad de aplicaciones, una de las cuales está bien adaptada al desafío anterior de producir una nueva matriz a partir de una matriz existente. Esta es una sintaxis relativamente nueva, pero comúnmente utilizada. Por ejemplo, si tiene una matriz <code>myArray</code> y escribe: 
<code>let newArray = [...myArray];</code> 
<code>newArray</code> ahora es un clon de <code>myArray</code> . Ambas matrices todavía existen por separado en la memoria. Si realiza una mutación como <code>newArray.push(5)</code> , <code>myArray</code> no cambia. El <code>...</code> <i>propaga</i> eficazmente los valores en <code>myArray</code> en una nueva matriz. Para clonar una matriz pero agregar valores adicionales en la nueva matriz, puede escribir <code>[...myArray, &#39;new value&#39;]</code> . Esto devolvería una nueva matriz compuesta por los valores en <code>myArray</code> y la cadena <code>&#39;new value&#39;</code> como el último valor. La sintaxis de propagación se puede utilizar varias veces en una composición de matriz como esta, pero es importante tener en cuenta que solo hace una copia superficial de la matriz. Es decir, solo proporciona operaciones de matriz inmutables para matrices unidimensionales. 
</section>

## Instructions
<section id='instructions'> 
Utilice el operador de propagación para devolver una nueva copia del estado cuando se agrega una tarea pendiente. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39;El almacén Redux debería existir e inicializarse con un estado igual a <code>[Do not mutate state!]</code> .&#39;
    testString: 'assert((function() { const initialState = store.getState(); return ( Array.isArray(initialState) === true && initialState[0] === "Do not mutate state!"); })(), "The Redux store should exist and initialize with a state equal to <code>[Do not mutate state!]</code>.");'
  - text: <code>addToDo</code> y <code>immutableReducer</code> deben ser funciones.
    testString: 'assert(typeof addToDo === "function" && typeof immutableReducer === "function", "<code>addToDo</code> and <code>immutableReducer</code> both should be functions.");'
  - text: El envío de una acción del tipo <code>ADD_TO_DO</code> en el almacén de Redux debe agregar un elemento de <code>ADD_TO_DO</code> <code>todo</code> y NO debe mutar el estado.
    testString: 'assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch(addToDo("__TEST__TO__DO__")); const finalState = store.getState(); const expectedState = [ "Do not mutate state!", "__TEST__TO__DO__" ]; return( isFrozen && DeepEqual(finalState, expectedState)); })(), "Dispatching an action of type <code>ADD_TO_DO</code> on the Redux store should add a <code>todo</code> item and should NOT mutate state.");'
  - text: El operador de propagación se debe utilizar para devolver un nuevo estado.
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
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      return [
        ...state,
        action.todo
      ];
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

</section>

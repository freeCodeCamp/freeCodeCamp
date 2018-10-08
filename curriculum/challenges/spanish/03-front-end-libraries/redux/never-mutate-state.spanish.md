---
id: 5a24c314108439a4d4036158
title: Never Mutate State
localeTitle: Nunca mutar estado
challengeType: 6
isRequired: false
---

## Description
<section id='description'> 
Estos desafíos finales describen varios métodos para aplicar el principio clave de la inmutabilidad del estado en Redux. Estado inmutable significa que nunca modificas el estado directamente, sino que devuelves una nueva copia del estado. 
Si tomara una instantánea del estado de una aplicación Redux a lo largo del tiempo, vería algo como el <code>state 1</code> , el <code>state 2</code> , el <code>state 3</code> , el <code>state 4</code> , <code>...</code> y etc., donde cada estado puede ser similar al anterior, pero Cada uno es un dato distinto. Esta inmutabilidad, de hecho, es lo que proporciona características tales como la depuración de viajes en el tiempo que puede haber escuchado. 
Redux no hace cumplir activamente la inmutabilidad del estado en su tienda o reductores, esa responsabilidad recae en el programador. Afortunadamente, JavaScript (especialmente ES6) proporciona varias herramientas útiles que puede utilizar para imponer la inmutabilidad de su estado, ya sea una <code>string</code> , un <code>number</code> , una <code>array</code> u un <code>object</code> . Tenga en cuenta que las cadenas y los números son valores primitivos y son inmutables por naturaleza. En otras palabras, 3 siempre es 3. No puede cambiar el valor del número 3. Sin embargo, una <code>array</code> u <code>object</code> es mutable. En la práctica, su estado probablemente consistirá en una <code>array</code> u <code>object</code> , ya que son estructuras de datos útiles para representar muchos tipos de información. 
</section>

## Instructions
<section id='instructions'> 
Hay una <code>store</code> y un <code>reducer</code> en el editor de código para administrar los elementos de tareas pendientes. Termine de escribir el caso <code>ADD_TO_DO</code> en el reductor para agregar una nueva <code>ADD_TO_DO</code> al estado. Hay algunas maneras de lograr esto con JavaScript estándar o ES6. Vea si puede encontrar una manera de devolver una nueva matriz con el elemento de <code>action.todo</code> adjunto al final. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El almacén de Redux debería existir e inicializarse con un estado igual a la matriz de <code>todos</code> en el editor de código.
    testString: 'assert((function() { const todos = [ "Go to the store", "Clean the house", "Cook dinner", "Learn to code" ]; const initialState = store.getState(); return Array.isArray(initialState) && initialState.join(",") === todos.join(","); })(), "The Redux store should exist and initialize with a state equal to the <code>todos</code> array in the code editor.");'
  - text: <code>addToDo</code> y <code>immutableReducer</code> deben ser funciones.
    testString: 'assert(typeof addToDo === "function" && typeof immutableReducer === "function", "<code>addToDo</code> and <code>immutableReducer</code> both should be functions.");'
  - text: El envío de una acción del tipo <code>ADD_TO_DO</code> en el almacén de Redux debe agregar un elemento de <code>ADD_TO_DO</code> <code>todo</code> y NO debe mutar el estado.
    testString: 'assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch(addToDo("__TEST__TO__DO__")); const finalState = store.getState(); const expectedState = [ "Go to the store", "Clean the house", "Cook dinner", "Learn to code", "__TEST__TO__DO__" ]; return( isFrozen && DeepEqual(finalState, expectedState)); })(), "Dispatching an action of type <code>ADD_TO_DO</code> on the Redux store should add a <code>todo</code> item and should NOT mutate state.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

// an example todo argument would be 'Learn React',
const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
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
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      return state.concat(action.todo);
    default:
      return state;
  }
};

// an example todo argument would be 'Learn React',
const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```

</section>

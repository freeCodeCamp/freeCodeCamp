---
id: 5a24c314108439a4d4036153
title: Register a Store Listener
challengeType: 6
videoUrl: ''
localeTitle: Registrar un Oyente de Tienda
---

## Description
<section id="description"> Otro método al que tiene acceso en el objeto de <code>store</code> Redux es <code>store.subscribe()</code> . Esto le permite suscribir funciones de escucha a la tienda, a las que se llama cada vez que se envía una acción contra la tienda. Un uso simple para este método es suscribir una función a su tienda que simplemente registra un mensaje cada vez que se recibe una acción y se actualiza la tienda. </section>

## Instructions
<section id="instructions"> Escriba una función de devolución de llamada que incremente el <code>count</code> global de variables cada vez que la tienda reciba una acción, y pase esta función al método <code>store.subscribe()</code> . Verá que se llama a <code>store.dispatch()</code> tres veces seguidas, cada vez que pasa directamente un objeto de acción. Mire la salida de la consola entre los despachos de acción para ver cómo tienen lugar las actualizaciones. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El envío de la acción <code>ADD</code> en la tienda debe incrementar el estado en <code>1</code> .
    testString: 'assert((function() { const initialState = store.getState(); store.dispatch({ type: "ADD" }); const newState = store.getState(); return newState === (initialState + 1); })(), "Dispatching the <code>ADD</code> action on the store should increment the state by <code>1</code>.");'
  - text: Debe haber una función de escucha suscrita a la tienda usando <code>store.subscribe</code> .
    testString: 'getUserInput => assert(getUserInput("index").includes("store.subscribe("), "There should be a listener function subscribed to the store using <code>store.subscribe</code>.");'
  - text: La devolución de llamada a <code>store.subscribe</code> también debe incrementar la variable de <code>count</code> global a medida que se actualiza el almacén.
    testString: 'assert(store.getState() === count, "The callback to <code>store.subscribe</code> should also increment the global <code>count</code> variable as the store is updated.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// global count variable:
let count = 0;

// change code below this line

// change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);

```

</div>

### Before Test
<div id='jsx-setup'>

```jsx
count = 0;

```

</div>


</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: 5a24c314108439a4d4036143
title: Extract State Logic to Redux
challengeType: 6
videoUrl: ''
localeTitle: Extraer la lógica de estado para redux
---

## Description
<section id="description"> Ahora que terminó el componente React, necesita mover la lógica que está ejecutando localmente en su <code>state</code> a Redux. Este es el primer paso para conectar la aplicación React simple a Redux. La única funcionalidad que tiene su aplicación es agregar nuevos mensajes del usuario a una lista desordenada. El ejemplo es simple para demostrar cómo React y Redux trabajan juntos. </section>

## Instructions
<section id="instructions"> Primero, defina un tipo de acción &#39;AGREGAR&#39; y ajústelo a una constante <code>ADD</code> . A continuación, defina un creador de acción <code>addMessage()</code> que crea la acción para agregar un mensaje. Deberá pasar un <code>message</code> a este creador de acción e incluir el mensaje en la <code>action</code> devuelta. Luego cree un reductor llamado <code>messageReducer()</code> que maneje el estado de los mensajes. El estado inicial debe ser igual a una matriz vacía. Este reductor debe agregar un mensaje a la matriz de mensajes retenidos o devolver el estado actual. Finalmente, crea tu tienda Redux y pásale el reductor. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La constante <code>ADD</code> debe existir y mantener un valor igual a la cadena <code>ADD</code>
    testString: 'assert(ADD === "ADD", "The const <code>ADD</code> should exist and hold a value equal to the string <code>ADD</code>");'
  - text: El creador de la acción <code>addMessage</code> debería devolver un objeto con un <code>type</code> igual a <code>ADD</code> y un mensaje igual al mensaje que se pasa.
    testString: 'assert((function() { const addAction = addMessage("__TEST__MESSAGE__"); return addAction.type === ADD && addAction.message === "__TEST__MESSAGE__"; })(), "The action creator <code>addMessage</code> should return an object with <code>type</code> equal to <code>ADD</code> and message equal to the message that is passed in.");'
  - text: <code>messageReducer</code> debería ser una función.
    testString: 'assert(typeof messageReducer === "function", "<code>messageReducer</code> should be a function.");'
  - text: El almacén debe existir y tener un estado inicial establecido en una matriz vacía.
    testString: 'assert((function() { const initialState = store.getState(); return typeof store === "object" && initialState.length === 0; })(), "The store should exist and have an initial state set to an empty array.");'
  - text: El envío de <code>addMessage</code> contra la tienda debe agregar de manera inmutable un nuevo mensaje a la matriz de mensajes mantenidos en estado.
    testString: 'assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch(addMessage("__A__TEST__MESSAGE")); const addState = store.getState(); return (isFrozen && addState[0] === "__A__TEST__MESSAGE"); })(), "Dispatching <code>addMessage</code> against the store should immutably add a new message to the array of messages held in state.");'
  - text: El <code>messageReducer</code> debería devolver el estado actual si se llama con cualquier otra acción.
    testString: 'assert((function() { const addState = store.getState(); store.dispatch({type: "FAKE_ACTION"}); const testState = store.getState(); return (addState === testState); })(), "The <code>messageReducer</code> should return the current state if called with any other actions.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// define ADD, addMessage(), messageReducer(), and store here:

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

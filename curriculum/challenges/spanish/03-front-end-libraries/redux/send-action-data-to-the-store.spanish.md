---
id: 5a24c314108439a4d4036155
title: Send Action Data to the Store
challengeType: 6
videoUrl: ''
localeTitle: Enviar datos de acción a la tienda
---

## Description
<section id="description"> Ya ha aprendido cómo enviar acciones a la tienda de Redux, pero hasta ahora estas acciones no han contenido ninguna información que no sea un <code>type</code> . También puede enviar datos específicos junto con sus acciones. De hecho, esto es muy común porque las acciones generalmente se originan en la interacción del usuario y tienden a llevar algunos datos con ellas. La tienda Redux a menudo necesita saber acerca de estos datos. </section>

## Instructions
<section id="instructions"> Hay un <code>notesReducer()</code> básico y un creador de acción <code>addNoteText()</code> definido en el editor de código. <code>addNoteText()</code> el cuerpo de la función <code>addNoteText()</code> para que devuelva un objeto de <code>action</code> . El objeto debe incluir una propiedad de <code>type</code> con un valor de <code>ADD_NOTE</code> , y también una propiedad de <code>text</code> establecida en los datos de <code>note</code> que se pasan al creador de la acción. Cuando llame al creador de acciones, pasará la información de una nota específica a la que puede acceder para el objeto. A continuación, termine de escribir la instrucción de <code>switch</code> en el <code>notesReducer()</code> . <code>addNoteText()</code> agregar un caso que maneje las acciones <code>addNoteText()</code> . Este caso debe <code>ADD_NOTE</code> siempre que haya una acción de tipo <code>ADD_NOTE</code> y debe devolver la propiedad de <code>text</code> en la <code>action</code> entrante como el nuevo <code>state</code> . La acción se envía en la parte inferior del código. Una vez que hayas terminado, ejecuta el código y mira la consola. Eso es todo lo que se necesita para enviar datos específicos de la acción a la tienda y usarlos cuando actualiza el <code>state</code> tienda. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El creador de la acción <code>addNoteText</code> debe devolver un objeto con el <code>type</code> teclas y el <code>text</code> .
    testString: 'assert((function() { const addNoteFn = addNoteText("__TEST__NOTE"); return addNoteFn.type === ADD_NOTE && addNoteFn.text === "__TEST__NOTE" })(), "The action creator <code>addNoteText</code> should return an object with keys <code>type</code> and <code>text</code>.");'
  - text: El envío de una acción de tipo <code>ADD_NOTE</code> con el creador de la acción <code>addNoteText</code> debería actualizar el <code>state</code> de la cadena que se pasa al creador de la acción.
    testString: 'assert((function() { const initialState = store.getState(); store.dispatch(addNoteText("__TEST__NOTE")); const newState = store.getState(); return initialState !== newState && newState === "__TEST__NOTE" })(), "Dispatching an action of type <code>ADD_NOTE</code> with the <code>addNoteText</code> action creator should update the <code>state</code> to the string passed to the action creator.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // change code below this line

    // change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // change code below this line

  // change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

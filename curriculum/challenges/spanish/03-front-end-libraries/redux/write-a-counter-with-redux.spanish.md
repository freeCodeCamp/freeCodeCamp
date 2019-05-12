---
id: 5a24c314108439a4d4036157
title: Write a Counter with Redux
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Escribir un contador con redux
---

## Description
<section id="description"> ¡Ahora has aprendido todos los principios básicos de Redux! Ha visto cómo crear acciones y creadores de acciones, crear una tienda Redux, enviar sus acciones contra la tienda y diseñar actualizaciones de estado con reductores puros. Incluso ha visto cómo administrar el estado complejo con una composición de reductor y manejar acciones asíncronas. Estos ejemplos son simplistas, pero estos conceptos son los principios básicos de Redux. Si los entiende bien, está listo para comenzar a crear su propia aplicación Redux. Los siguientes desafíos cubren algunos de los detalles relacionados con <code>state</code> inmutabilidad del <code>state</code> , pero primero, aquí hay una revisión de todo lo que has aprendido hasta ahora. </section>

## Instructions
<section id="instructions"> En esta lección, implementará un contador simple con Redux desde cero. Los conceptos básicos se proporcionan en el editor de código, ¡pero tendrás que completar los detalles! Utilice los nombres que se proporcionan y defina los action creators <code>incAction</code> y <code>decAction</code> , los <code>decAction</code> acción <code>counterReducer()</code> , <code>INCREMENT</code> y <code>DECREMENT</code> , y finalmente la <code>store</code> Redux. Una vez que hayas terminado, deberías poder enviar acciones de <code>INCREMENT</code> o <code>DECREMENT</code> para incrementar o disminuir el estado que se tiene en la <code>store</code> . Buena suerte construyendo tu primera aplicación con Redux! </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La acción creador <code>incAction</code> debe devolver un objeto acción con <code>type</code> igual al valor de <code>INCREMENT</code>
    testString: 'assert(incAction().type ===INCREMENT, "The action creator <code>incAction</code> should return an action object with <code>type</code> equal to the value of <code>INCREMENT</code>");'
  - text: La acción creadora <code>decAction</code> debe devolver un objeto de acción con un <code>type</code> igual al valor de <code>DECREMENT</code>
    testString: 'assert(decAction().type === DECREMENT, "The action creator <code>decAction</code> should return an action object with <code>type</code> equal to the value of <code>DECREMENT</code>");'
  - text: La tienda Redux debería inicializarse con un <code>state</code> de 0.
    testString: 'assert(store.getState() === 0, "The Redux store should initialize with a <code>state</code> of 0.");'
  - text: El envío de <code>incAction</code> en el almacén de Redux debería incrementar el <code>state</code> en 1.
    testString: 'assert((function() { const initialState = store.getState(); store.dispatch(incAction()); const incState = store.getState(); return initialState + 1 === incState })(), "Dispatching <code>incAction</code> on the Redux store should increment the <code>state</code> by 1.");'
  - text: El envío de la <code>decAction</code> en el almacén de Redux debería disminuir el <code>state</code> en 1.
    testString: 'assert((function() { const initialState = store.getState(); store.dispatch(decAction()); const decState = store.getState(); return initialState - 1 === decState })(), "Dispatching <code>decAction</code> on the Redux store should decrement the <code>state</code> by 1.");'
  - text: <code>counterReducer</code> debe ser una función
    testString: 'assert(typeof counterReducer === "function", "<code>counterReducer</code> should be a function");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const INCREMENT = null; // define a constant for increment action types
const DECREMENT = null; // define a constant for decrement action types

const counterReducer = null; // define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = null; // define an action creator for incrementing

const decAction = null; // define an action creator for decrementing

const store = null; // define the Redux store here, passing in your reducers

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

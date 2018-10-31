---
id: 5a24c314108439a4d403614c
title: Get State from the Redux Store
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Obtener el estado de la tienda redux
---

## Description
<section id="description"> El objeto de tienda Redux proporciona varios métodos que le permiten interactuar con él. Por ejemplo, puede recuperar el <code>state</code> actual mantenido en el objeto de almacenamiento de Redux con el método <code>getState()</code> . </section>

## Instructions
<section id="instructions"> El código del desafío anterior se reescribe más concisamente en el editor de código. Utilice <code>store.getState()</code> para recuperar el <code>state</code> de la <code>store</code> y asigne esto a una nueva variable <code>currentState</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El almacén de redux debe tener un valor de 5 para el estado inicial.
    testString: 'assert(store.getState()===5, "The redux store should have a value of 5 for the initial state.");'
  - text: Debe existir una variable <code>currentState</code> y se le debe asignar el estado actual del almacén de Redux.
    testString: 'getUserInput => assert(currentState === 5 && getUserInput("index").includes("store.getState()"), "A variable <code>currentState</code> should exist and should be assigned the current state of the Redux store.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const store = Redux.createStore(
  (state = 5) => state
);

// change code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

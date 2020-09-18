---
id: 5a24c314108439a4d403614e
title: Define an Action Creator
challengeType: 6
videoUrl: ''
localeTitle: Definir un creador de acción
---

## Description
<section id="description"> Después de crear una acción, el siguiente paso es enviar la acción al almacén de Redux para que pueda actualizar su estado. En Redux, se definen creadores de acciones para lograr esto. Un creador de acciones es simplemente una función de JavaScript que devuelve una acción. En otras palabras, los creadores de acciones crean objetos que representan eventos de acción. </section>

## Instructions
<section id="instructions"> Defina una función llamada <code>actionCreator()</code> que devuelve el objeto de <code>action</code> cuando se le llama. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La función <code>actionCreator</code> debería existir.
    testString: 'assert(typeof actionCreator === "function", "The function <code>actionCreator</code> should exist.");'
  - text: Ejecutar la función <code>actionCreator</code> debe devolver el objeto de acción.
    testString: 'assert(typeof action === "object", "Running the <code>actionCreator</code> function should return the action object.");'
  - text: La acción devuelta debe tener un tipo de propiedad clave con el valor <code>LOGIN</code> .
    testString: 'assert(action.type === "LOGIN", "The returned action should have a key property type with value <code>LOGIN</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const action = {
  type: 'LOGIN'
}
// Define an action creator here:

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

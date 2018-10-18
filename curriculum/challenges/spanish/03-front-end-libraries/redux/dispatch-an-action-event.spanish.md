---
id: 5a24c314108439a4d403614f
title: Dispatch an Action Event
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Enviar un evento de acción
---

## Description
<section id="description"> El método de <code>dispatch</code> es lo que utiliza para enviar acciones al almacén de Redux. Al llamar a <code>store.dispatch()</code> y pasar el valor devuelto por un creador de acciones, se envía una acción a la tienda. Recuerde que los creadores de acciones devuelven un objeto con una propiedad de tipo que especifica la acción que se ha producido. Luego, el método envía un objeto de acción al almacén de Redux. Basado en el ejemplo del desafío anterior, las siguientes líneas son equivalentes, y ambas envían la acción del tipo <code>LOGIN</code> : <blockquote> store.dispatch (actionCreator ()); <br> store.dispatch ({type: &#39;LOGIN&#39;}); </blockquote></section>

## Instructions
<section id="instructions"> El almacén Redux en el editor de código tiene un estado inicializado que es un objeto que contiene una propiedad de <code>login</code> configurada actualmente como <code>false</code> . También hay un creador de acción llamado <code>loginAction()</code> que devuelve una acción de tipo <code>LOGIN</code> . Envíe la acción de <code>LOGIN</code> al almacén de Redux llamando al método de <code>dispatch</code> , y pase la acción creada por <code>loginAction()</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Llamar a la función <code>loginAction</code> debe devolver un objeto con la propiedad <code>type</code> establecida en la cadena <code>LOGIN</code> .
    testString: 'assert(loginAction().type === "LOGIN", "Calling the function <code>loginAction</code> should return an object with <code>type</code> property set to the string <code>LOGIN</code>.");'
  - text: La tienda debe inicializarse con un objeto con el <code>login</code> propiedad establecido en <code>false</code> .
    testString: 'assert(store.getState().login === false, "The store should be initialized with an object with property <code>login</code> set to <code>false</code>.");'
  - text: El método <code>store.dispatch()</code> se debe usar para enviar una acción de tipo <code>LOGIN</code> .
    testString: 'getUserInput => assert((function() {  let noWhiteSpace = getUserInput("index").replace(/\s/g,""); return noWhiteSpace.includes("store.dispatch(loginAction())") || noWhiteSpace.includes("store.dispatch({type: \"LOGIN\"})") === true })(), "The <code>store.dispatch()</code> method should be used to dispatch an action of type <code>LOGIN</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

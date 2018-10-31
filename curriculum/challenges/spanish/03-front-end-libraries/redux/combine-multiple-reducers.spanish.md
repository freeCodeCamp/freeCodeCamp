---
id: 5a24c314108439a4d4036154
title: Combine Multiple Reducers
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Combinar reductores múltiples
---

## Description
<section id="description"> Cuando el estado de su aplicación comienza a hacerse más complejo, puede ser tentador dividir el estado en varias partes. En su lugar, recuerde el primer principio de Redux: todo el estado de la aplicación se mantiene en un objeto de un solo estado en la tienda. Por lo tanto, Redux proporciona la composición del reductor como una solución para un modelo de estado complejo. Usted define múltiples reductores para manejar diferentes partes del estado de su aplicación, luego componga estos reductores juntos en un reductor de raíz. El reductor de raíz se pasa luego al método <code>createStore()</code> Redux. Para permitirnos combinar varios reductores juntos, Redux proporciona el método <code>combineReducers()</code> . Este método acepta un objeto como un argumento en el que define propiedades que asocian claves a funciones reductoras específicas. Redux usará el nombre que le dé a las teclas como el nombre para el estado asociado. Normalmente, es una buena práctica crear un reductor para cada parte del estado de la aplicación cuando son distintos o únicos de alguna manera. Por ejemplo, en una aplicación para tomar notas con autenticación de usuario, un reductor podría manejar la autenticación, mientras que otro maneja el texto y observa que el usuario está enviando. Para una aplicación de este tipo, podríamos escribir el método <code>combineReducers()</code> siguiente manera: <blockquote> const rootReducer = Redux.combineReducers ({ <br> auth: authenticationReducer, <br> notas: notas reductor <br> }); </blockquote> Ahora, las <code>notes</code> clave contendrán todo el estado asociado con nuestras notas y manejado por nuestro <code>notesReducer</code> . Así es como se pueden componer varios reductores para administrar un estado de aplicación más complejo. En este ejemplo, el estado mantenido en el almacén de Redux sería entonces un único objeto que contiene las propiedades <code>auth</code> y <code>notes</code> . </section>

## Instructions
<section id="instructions"> Hay <code>counterReducer()</code> y <code>authReducer()</code> proporcionadas en el editor de código, junto con una tienda Redux. Termine de escribir la función <code>rootReducer()</code> utilizando el método <code>Redux.combineReducers()</code> . Asigne <code>counterReducer</code> a una clave llamada <code>count</code> y <code>authReducer</code> a una clave llamada <code>auth</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El <code>counterReducer</code> debe <code>counterReducer</code> y disminuir el <code>state</code> .
    testString: 'assert((function() { const initalState = store.getState().count; store.dispatch({type: INCREMENT}); store.dispatch({type: INCREMENT}); const firstState = store.getState().count; store.dispatch({type: DECREMENT}); const secondState = store.getState().count; return firstState === initalState + 2 && secondState === firstState - 1  })(), "The <code>counterReducer</code> should increment and decrement the <code>state</code>.");'
  - text: El <code>authReducer</code> debe cambiar el <code>state</code> de <code>authenticated</code> entre <code>true</code> y <code>false</code> .
    testString: 'assert((function() {  store.dispatch({type: LOGIN}); const loggedIn = store.getState().auth.authenticated; store.dispatch({type: LOGOUT}); const loggedOut = store.getState().auth.authenticated; return loggedIn === true && loggedOut === false  })(), "The <code>authReducer</code> should toggle the <code>state</code> of <code>authenticated</code> between <code>true</code> and <code>false</code>.");'
  - text: 'El <code>state</code> tienda debe tener dos claves: <code>count</code> , que contiene un número, y <code>auth</code> , que contiene un objeto. El objeto <code>auth</code> debe tener una propiedad de <code>authenticated</code> , que contiene un valor booleano.'
    testString: 'assert((function() { const state = store.getState(); return typeof state.auth === "object" && typeof state.auth.authenticated === "boolean" && typeof state.count === "number" })(), "The store <code>state</code> should have two keys: <code>count</code>, which holds a number, and <code>auth</code>, which holds an object. The <code>auth</code> object should have a property of <code>authenticated</code>, which holds a boolean.");'
  - text: El <code>rootReducer</code> debe ser una función que combine el <code>counterReducer</code> y el <code>authReducer</code> .
    testString: 'getUserInput => assert((function() {  const noWhiteSpace = getUserInput("index").replace(/\s/g,""); return typeof rootReducer === "function" && noWhiteSpace.includes("Redux.combineReducers")  })(), "The <code>rootReducer</code> should be a function that combines the <code>counterReducer</code> and the <code>authReducer</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = // define the root reducer here

const store = Redux.createStore(rootReducer);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

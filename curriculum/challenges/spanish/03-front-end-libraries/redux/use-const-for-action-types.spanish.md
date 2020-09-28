---
id: 5a24c314108439a4d4036152
title: Use const for Action Types
challengeType: 6
videoUrl: ''
localeTitle: Utilice const para tipos de acción
---

## Description
<section id="description"> Una práctica común cuando se trabaja con Redux es asignar tipos de acción como constantes de solo lectura, luego hacer referencia a estas constantes donde sea que se usen. Puede refactorizar el código con el que está trabajando para escribir los tipos de acción como <code>const</code> . </section>

## Instructions
<section id="instructions"> Declare <code>LOGIN</code> y <code>LOGOUT</code> como valores <code>const</code> y asígnelos a las cadenas <code>&#39;LOGIN&#39;</code> y <code>&#39;LOGOUT&#39;</code> , respectivamente. Luego, edite el <code>authReducer()</code> y los creadores de acciones para hacer referencia a estas constantes en lugar de valores de cadena. <strong>Nota:</strong> generalmente es una convención para escribir constantes en mayúsculas, y esto también es una práctica estándar en Redux. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Al llamar a la función <code>loginUser</code> debe devolver un objeto con la propiedad <code>type</code> establecida en la cadena <code>LOGIN</code> .
    testString: 'assert(loginUser().type === "LOGIN", "Calling the function <code>loginUser</code> should return an object with <code>type</code> property set to the string <code>LOGIN</code>.");'
  - text: Llamar a la función <code>logoutUser</code> debe devolver un objeto con la propiedad <code>type</code> establecida en la cadena <code>LOGOUT</code> .
    testString: 'assert(logoutUser().type === "LOGOUT", "Calling the function <code>logoutUser</code> should return an object with <code>type</code> property set to the string <code>LOGOUT</code>.");'
  - text: La tienda debe inicializarse con un objeto con el <code>login</code> propiedad establecido en <code>false</code> .
    testString: 'assert(store.getState().authenticated === false, "The store should be initialized with an object with property <code>login</code> set to <code>false</code>.");'
  - text: El envío de <code>loginUser</code> debe actualizar la propiedad de <code>login</code> en el estado de almacenamiento a <code>true</code> .
    testString: 'assert((function() {  const initialState = store.getState(); store.dispatch(loginUser()); const afterLogin = store.getState(); return initialState.authenticated === false && afterLogin.authenticated === true })(), "Dispatching <code>loginUser</code> should update the <code>login</code> property in the store state to <code>true</code>.");'
  - text: Despachar <code>logoutUser</code> debe actualizar la propiedad de <code>login</code> en el estado de almacenamiento a <code>false</code> .
    testString: 'assert((function() {  store.dispatch(loginUser()); const loggedIn = store.getState(); store.dispatch(logoutUser()); const afterLogout = store.getState(); return loggedIn.authenticated === true && afterLogout.authenticated === false })(), "Dispatching <code>logoutUser</code> should update the <code>login</code> property in the store state to <code>false</code>.");'
  - text: La función <code>authReducer</code> debe manejar múltiples tipos de acciones con una declaración de cambio.
    testString: 'getUserInput => assert((function() { return typeof authReducer === "function" && getUserInput("index").toString().includes("switch") && getUserInput("index").toString().includes("case") && getUserInput("index").toString().includes("default") })(), "The <code>authReducer</code> function should handle multiple action types with a switch statement.");'
  - text: <code>LOGIN</code> y <code>LOGOUT</code> deben declararse como valores <code>const</code> y deben asignarse cadenas de <code>LOGIN</code> y <code>LOGOUT</code> .
    testString: 'getUserInput => assert((function() {  const noWhiteSpace = getUserInput("index").toString().replace(/\s/g,""); return (noWhiteSpace.includes("constLOGIN=\"LOGIN\"") || noWhiteSpace.includes("constLOGIN="LOGIN"")) && (noWhiteSpace.includes("constLOGOUT=\"LOGOUT\"") || noWhiteSpace.includes("constLOGOUT="LOGOUT"")) })(), "<code>LOGIN</code> and <code>LOGOUT</code> should be declared as <code>const</code> values and should be assigned strings of <code>LOGIN</code>and <code>LOGOUT</code>.");'
  - text: Los creadores de acciones y el reductor deben hacer referencia a las constantes <code>LOGIN</code> y <code>LOGOUT</code> .
    testString: 'getUserInput => assert((function() { const noWhiteSpace = getUserInput("index").toString().replace(/\s/g,""); return noWhiteSpace.includes("caseLOGIN:") && noWhiteSpace.includes("caseLOGOUT:") && noWhiteSpace.includes("type:LOGIN") && noWhiteSpace.includes("type:LOGOUT") })(), "The action creators and the reducer should reference the <code>LOGIN</code> and <code>LOGOUT</code> constants.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// change code below this line

// change code above this line

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case 'LOGIN':
      return {
        authenticated: true
      }

    case 'LOGOUT':
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

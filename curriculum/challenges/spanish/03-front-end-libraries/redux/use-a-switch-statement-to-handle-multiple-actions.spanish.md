---
id: 5a24c314108439a4d4036151
title: Use a Switch Statement to Handle Multiple Actions
challengeType: 6
videoUrl: ''
localeTitle: Use una declaración de cambio para manejar múltiples acciones
---

## Description
<section id="description"> Puede decirle a la tienda Redux cómo manejar múltiples tipos de acciones. Digamos que está administrando la autenticación de usuarios en su tienda Redux. Desea tener una representación de estado para cuando los usuarios inician sesión y cuando se desconectan. Usted representa esto con un solo objeto de estado con la propiedad <code>authenticated</code> . También necesita creadores de acciones que creen acciones correspondientes al inicio de sesión del usuario y al cierre de sesión del usuario, junto con los propios objetos de acción. </section>

## Instructions
<section id="instructions"> El editor de código tiene una tienda, acciones y creadores de acción configurados para usted. Complete la función del <code>reducer</code> para manejar múltiples acciones de autenticación. Use una declaración de <code>switch</code> JavaScript en el <code>reducer</code> para responder a diferentes eventos de acción. Este es un patrón estándar en la escritura de reductores de Redux. La instrucción de cambio debe cambiar sobre <code>action.type</code> y devolver el estado de autenticación apropiado. <strong>Nota:</strong> En este punto, no se preocupe por la inmutabilidad del estado, ya que es pequeño y simple en este ejemplo. Para cada acción, puede devolver un nuevo objeto, por ejemplo, <code>{authenticated: true}</code> . Además, no olvide escribir un caso <code>default</code> en su declaración de cambio que devuelva el <code>state</code> actual. Esto es importante porque una vez que su aplicación tiene varios reductores, todos se ejecutan cada vez que se realiza un envío de acción, incluso cuando la acción no está relacionada con ese reductor. En tal caso, desea asegurarse de que devuelve el <code>state</code> actual. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Al llamar a la función <code>loginUser</code> debe devolver un objeto con la propiedad type establecida en la cadena <code>LOGIN</code> .
    testString: 'assert(loginUser().type === "LOGIN", "Calling the function <code>loginUser</code> should return an object with type property set to the string <code>LOGIN</code>.");'
  - text: Llamar a la función <code>logoutUser</code> debe devolver un objeto con la propiedad type establecida en la cadena <code>LOGOUT</code> .
    testString: 'assert(logoutUser().type === "LOGOUT", "Calling the function <code>logoutUser</code> should return an object with type property set to the string <code>LOGOUT</code>.");'
  - text: La tienda debe inicializarse con un objeto con una propiedad <code>authenticated</code> establecida en <code>false</code> .
    testString: 'assert(store.getState().authenticated === false, "The store should be initialized with an object with an <code>authenticated</code> property set to <code>false</code>.");'
  - text: El envío de <code>loginUser</code> debe actualizar la propiedad <code>authenticated</code> en el estado de almacenamiento a <code>true</code> .
    testString: 'assert((function() {  const initialState = store.getState(); store.dispatch(loginUser()); const afterLogin = store.getState(); return initialState.authenticated === false && afterLogin.authenticated === true })(), "Dispatching <code>loginUser</code> should update the <code>authenticated</code> property in the store state to <code>true</code>.");'
  - text: Dispatching <code>logoutUser</code> debe actualizar la propiedad <code>authenticated</code> en el estado de almacenamiento a <code>false</code> .
    testString: 'assert((function() {  store.dispatch(loginUser()); const loggedIn = store.getState(); store.dispatch(logoutUser()); const afterLogout = store.getState(); return loggedIn.authenticated === true && afterLogout.authenticated === false  })(), "Dispatching <code>logoutUser</code> should update the <code>authenticated</code> property in the store state to <code>false</code>.");'
  - text: La función <code>authReducer</code> debe manejar múltiples tipos de acciones con una declaración de <code>switch</code> .
    testString: 'getUserInput => assert( getUserInput("index").toString().includes("switch") && getUserInput("index").toString().includes("case") && getUserInput("index").toString().includes("default"), "The <code>authReducer</code> function should handle multiple action types with a <code>switch</code> statement.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // change code below this line

  // change code above this line
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

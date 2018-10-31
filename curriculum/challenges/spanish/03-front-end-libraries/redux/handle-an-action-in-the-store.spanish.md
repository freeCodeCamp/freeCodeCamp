---
id: 5a24c314108439a4d4036150
title: Handle an Action in the Store
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Manejar una acción en la tienda
---

## Description
<section id="description"> Después de crear y enviar una acción, la tienda Redux debe saber cómo responder a esa acción. Este es el trabajo de una función <code>reducer</code> . Los reductores en Redux son responsables de las modificaciones de estado que tienen lugar en respuesta a las acciones. Un <code>reducer</code> toma el <code>state</code> y la <code>action</code> como argumentos, y siempre devuelve un nuevo <code>state</code> . Es importante ver que este es el <strong>único</strong> papel del reductor. No tiene efectos secundarios: nunca llama a un punto final de la API y nunca tiene sorpresas ocultas. El reductor es simplemente una función pura que toma estado y acción, luego devuelve un nuevo estado. Otro principio clave en Redux es que el <code>state</code> es de solo lectura. En otras palabras, la función <code>reducer</code> <strong>siempre</strong> debe devolver una nueva copia del <code>state</code> y nunca modificar el estado directamente. Redux no impone la inmutabilidad del estado, sin embargo, usted es responsable de hacerlo cumplir en el código de sus funciones de reductor. Practicarás esto en desafíos posteriores. </section>

## Instructions
<section id="instructions"> El editor de código tiene el ejemplo anterior, así como el inicio de una función de <code>reducer</code> para usted. Complete el cuerpo de la función del <code>reducer</code> modo que si recibe una acción del tipo <code>&#39;LOGIN&#39;</code> , devuelva un objeto de estado con el <code>login</code> establecido en <code>true</code> . De lo contrario, devuelve el <code>state</code> actual. Tenga en cuenta que el <code>state</code> actual y la <code>action</code> distribuida se pasan al reductor, por lo que puede acceder al tipo de acción directamente con <code>action.type</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Llamar a la función <code>loginAction</code> debe devolver un objeto con la propiedad type establecida en la cadena <code>LOGIN</code> .
    testString: 'assert(loginAction().type === "LOGIN", "Calling the function <code>loginAction</code> should return an object with type property set to the string <code>LOGIN</code>.");'
  - text: La tienda debe inicializarse con un objeto con el <code>login</code> propiedad establecido en <code>false</code> .
    testString: 'assert(store.getState().login === false, "The store should be initialized with an object with property <code>login</code> set to <code>false</code>.");'
  - text: Despachando <code>loginAction</code> debe actualizar la propiedad de <code>login</code> en el estado de la tienda a <code>true</code> .
    testString: 'assert((function() {  const initialState = store.getState(); store.dispatch(loginAction()); const afterState = store.getState(); return initialState.login === false && afterState.login === true })(), "Dispatching <code>loginAction</code> should update the <code>login</code> property in the store state to <code>true</code>.");'
  - text: 'Si la acción no es de tipo <code>LOGIN</code> , la tienda debería devolver el estado actual.'
    testString: 'assert((function() { store.dispatch({type: "__TEST__ACTION__"}); let afterTest = store.getState(); return typeof afterTest === "object" && afterTest.hasOwnProperty("login") })(), "If the action is not of type <code>LOGIN</code>, the store should return the current state.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // change code below this line

  // change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
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

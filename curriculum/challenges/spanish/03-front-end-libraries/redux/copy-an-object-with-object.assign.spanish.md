---
id: 5a24c314108439a4d403615b
title: Copy an Object with Object.assign
localeTitle: Copiar un objeto con Object.assign
challengeType: 6
isRequired: false
---

## Description
<section id='description'> 
Los últimos varios desafíos funcionaron con arrays, pero hay formas de ayudar a imponer la inmutabilidad del estado cuando el estado también es un <code>object</code> . Una herramienta útil para manejar objetos es la utilidad <code>Object.assign()</code> . <code>Object.assign()</code> toma un objeto de destino y objetos de origen y asigna propiedades de los objetos de origen al objeto de destino. Cualquier propiedad coincidente se sobrescribe con las propiedades en los objetos de origen. Este comportamiento se usa comúnmente para hacer copias superficiales de objetos al pasar un objeto vacío como el primer argumento seguido por los objetos que desea copiar. Aquí hay un ejemplo: 
<code>const newObject = Object.assign({}, obj1, obj2);</code> 
Esto crea <code>newObject</code> como un nuevo <code>object</code> , que contiene las propiedades que existen actualmente en <code>obj1</code> y <code>obj2</code> . 
</section>

## Instructions
<section id='instructions'> 
El estado y las acciones de Redux se modificaron para manejar un <code>object</code> para el <code>state</code> . Edite el código para devolver un nuevo objeto de <code>state</code> para acciones con el tipo <code>ONLINE</code> , que establece la propiedad de <code>status</code> en la cadena en <code>online</code> . Intenta usar <code>Object.assign()</code> para completar el desafío. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El almacén Redux debería existir e inicializarse con un estado que sea equivalente al objeto <code>defaultState</code> declarado en la línea 1.
    testString: 'assert((function() { const expectedState = { user: "CamperBot", status: "offline", friends: "732,982", community: "freeCodeCamp" }; const initialState = store.getState(); return DeepEqual(expectedState, initialState); })(), "The Redux store should exist and initialize with a state that is equivalent to the <code>defaultState</code> object declared on line 1.");'
  - text: <code>wakeUp</code> y <code>immutableReducer</code> deben ser funciones.
    testString: 'assert(typeof wakeUp === "function" && typeof immutableReducer === "function", "<code>wakeUp</code> and <code>immutableReducer</code> both should be functions.");'
  - text: El envío de una acción de tipo <code>ONLINE</code> debe actualizar el <code>status</code> la propiedad en estado a en <code>online</code> y NO debe mutar el estado.
    testString: 'assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch({type: "ONLINE"}); const finalState = store.getState(); const expectedState = { user: "CamperBot", status: "online", friends: "732,982", community: "freeCodeCamp" }; return isFrozen && DeepEqual(finalState, expectedState); })(), "Dispatching an action of type <code>ONLINE</code> should update the property <code>status</code> in state to <code>online</code> and should NOT mutate state.");'
  - text: <code>Object.assign</code> debe utilizar para devolver un nuevo estado.
    testString: 'getUserInput => assert(getUserInput("index").includes("Object.assign"), "<code>Object.assign</code> should be used to return new state.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
```

</div>



</section>

## Solution
<section id='solution'>


```js
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      return Object.assign({}, state, {
        status: 'online'
      });
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
```

</section>

---
id: 5a24c314108439a4d4036156
title: Use Middleware to Handle Asynchronous Actions
localeTitle: Use Middleware para manejar acciones asíncronas
challengeType: 6
isRequired: false
---

## Description
<section id='description'> 
Hasta ahora, estos retos han evitado discutir sobre las acciones asíncronos, pero son una parte inevitable del desarrollo web. En algún momento, deberá llamar a puntos finales asíncronos en su aplicación Redux, así que, ¿cómo maneja este tipo de solicitudes? Redux proporciona middleware diseñado específicamente para este propósito, llamado middleware Thux de Redux. Aquí hay una breve descripción de cómo usar esto con Redux. 
Para incluir el middleware de Redux Thunk, se lo pasa como un argumento a <code>Redux.applyMiddleware()</code> . Esta declaración se proporciona luego como un segundo parámetro opcional para la función <code>createStore()</code> . Echa un vistazo al código en la parte inferior del editor para ver esto. Luego, para crear una acción asíncrona, devuelve una función en el creador de la acción que toma el <code>dispatch</code> como un argumento. Dentro de esta función, puede enviar acciones y realizar solicitudes asíncronas. 
En este ejemplo, se simula una solicitud asíncrona con una llamada <code>setTimeout()</code> . Es común enviar una acción antes de iniciar cualquier comportamiento asíncrono para que el estado de su aplicación sepa que se están solicitando algunos datos (este estado podría mostrar un icono de carga, por ejemplo). Luego, una vez que recibe los datos, envía otra acción que lleva los datos como una carga útil junto con la información de que la acción se ha completado. 
Recuerde que está pasando el <code>dispatch</code> como un parámetro a este creador de acción especial. Esto es lo que utilizará para despachar sus acciones, simplemente pase la acción directamente al despacho y el middleware se encarga del resto. 
</section>

## Instructions
<section id='instructions'> 
Escriba ambos despachos en el creador de acción <code>handleAsync()</code> . Envíe <code>setTimeout()</code> <code>requestingData()</code> antes de <code>setTimeout()</code> (la llamada de API simulada). Luego, después de recibir los datos (simulados), despache la acción <code>receivedData()</code> , pasando estos datos. Ahora ya sabe cómo manejar acciones asíncronas en Redux. Todo lo demás sigue comportándose como antes. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El <code>requestingData</code> creador de acción debería devolver un objeto de tipo igual al valor de <code>REQUESTING_DATA</code> .
    testString: 'assert(requestingData().type === REQUESTING_DATA, "The <code>requestingData</code> action creator should return an object of type equal to the value of <code>REQUESTING_DATA</code>.");'
  - text: El <code>receivedData</code> creador de acción debería devolver un objeto de tipo igual al valor de <code>RECEIVED_DATA</code> .
    testString: 'assert(receivedData("data").type === RECEIVED_DATA, "The <code>receivedData</code> action creator should return an object of type equal to the value of <code>RECEIVED_DATA</code>.");'
  - text: <code>asyncDataReducer</code> debería ser una función.
    testString: 'assert(typeof asyncDataReducer === "function", "<code>asyncDataReducer</code> should be a function.");'
  - text: El envío del creador de la acción requestingData debe actualizar la propiedad de <code>state</code> almacenamiento de fetching a <code>true</code> .
    testString: 'assert((function() { const initialState = store.getState(); store.dispatch(requestingData()); const reqState = store.getState(); return initialState.fetching === false && reqState.fetching === true })(), "Dispatching the requestingData action creator should update the store <code>state</code> property of fetching to <code>true</code>.");'
  - text: Despachando <code>handleAsync</code> debe despachar la acción de solicitud de datos y luego despachar la acción de datos recibida después de un retraso.
    testString: 'assert((function() { const noWhiteSpace = handleAsync.toString().replace(/\s/g,""); return noWhiteSpace.includes("dispatch(requestingData())") === true && noWhiteSpace.includes("dispatch(receivedData(data))") === true })(), "Dispatching <code>handleAsync</code> should dispatch the data request action and then dispatch the received data action after a delay.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // dispatch request action here

    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // dispatch received data action here

    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
```

</div>



</section>

## Solution
<section id='solution'>


```js
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    dispatch(requestingData());
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      dispatch(receivedData(data));
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
```

</section>

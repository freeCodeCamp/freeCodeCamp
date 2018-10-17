---
title: Redux Thunk
localeTitle: Redux Thunk
---
## Redux Thunk

Redux Thunk es un software intermedio que le permite devolver funciones, en lugar de solo acciones, dentro de Redux 1 . Esto permite acciones retrasadas, incluso trabajar con promesas.

La razón por la que usamos este middleware es porque no todas las acciones que realizamos serán sincrónicas y algunas no están sincronizadas, como el uso de axios para enviar una solicitud de obtención. Esto tomará un poco de tiempo y el simple redux no tiene en cuenta este comportamiento. Entonces, Redux-thunk viene al rescate al permitirnos enviar acciones de forma asíncrona, de modo que podamos permitir que estas promesas se resuelvan.

Ejemplo 1:

```javascript
const INCREMENT_COUNTER = 'INCREMENT_COUNTER'; 
 
 function increment() { 
  return { 
    type: INCREMENT_COUNTER 
  }; 
 } 
 
 function incrementAsync() { 
  return dispatch => { 
    setTimeout(() => { 
      // Yay! Can invoke sync or async actions with `dispatch` 
      dispatch(increment()); 
    }, 1000); 
  }; 
 } 
```

Ejemplo 2:

```javascript
const GET_CURRENT_USER = 'GET_CURRENT_USER'; 
 const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS'; 
 const GET_CURRENT_USER_FAILURE = 'GET_CURRENT_USER_FAILURE'; 
 
 const getUser = () => { 
  return (dispatch) => {     //nameless functions 
    // Initial action dispatched 
    dispatch({ type: GET_CURRENT_USER }); 
    // Return promise with success and failure actions 
    return axios.get('/api/auth/user').then( 
      user => dispatch({ type: GET_CURRENT_USER_SUCCESS, user }), 
      err => dispatch({ type: GET_CURRENT_USER_FAILURE, err }) 
    ); 
  }; 
 }; 
```

### Instalación y configuración

Redux Thunk se puede instalar usando `npm install redux-thunk --save` o `yarn add redux-thunk` con la línea de comandos. Debido a que es una herramienta de Redux, también necesitará tener configurado Redux. Una vez instalado, se habilita utilizando `applyMiddleware()` :

```javascript
import { createStore, applyMiddleware } from 'redux'; 
 import thunk from 'redux-thunk'; 
 import rootReducer from './reducers/index'; 
 
 const store = createStore( 
  rootReducer, 
  applyMiddleware(thunk) 
 ); 
```

### Referencias

*   [Redux Thunk Github Repo](https://github.com/reduxjs/redux-thunk)
*   [Redux Middleware](https://redux.js.org/advanced/middleware)

### Fuentes

1.  [Ejemplo de contador de incremento citado de Redux Thunk Documentation, 02/10/2018](#https://github.com/reduxjs/redux-thunk)
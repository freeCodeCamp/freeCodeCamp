---
title: Redux Thunk
localeTitle: Thunk Redux
---
## Thunk Redux

O Redux Thunk é um middleware que permite retornar funções, ao invés de apenas ações, dentro do Redux 1 . Isso permite ações atrasadas, incluindo o trabalho com promessas.

O motivo pelo qual usamos este middleware é que nem todas as ações que executamos serão sincronizadas e algumas não são síncronas, como o uso de axios para enviar uma solicitação get. Isso levará um pouco de tempo e o simples redux não leva em conta esse comportamento. Então, o Redux-thunk vem para o resgate, permitindo-nos despachar ações de forma assíncrona, para que possamos permitir que essas promessas sejam resolvidas.

Exemplo 1:

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

Exemplo 2:

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

### Instalação e Configuração

O Redux Thunk pode ser instalado usando `npm install redux-thunk --save` ou `yarn add redux-thunk` com a linha de comando. Por ser uma ferramenta do Redux, você também precisará configurar o Redux. Uma vez instalado, é ativado usando `applyMiddleware()` :

```javascript
import { createStore, applyMiddleware } from 'redux'; 
 import thunk from 'redux-thunk'; 
 import rootReducer from './reducers/index'; 
 
 const store = createStore( 
  rootReducer, 
  applyMiddleware(thunk) 
 ); 
```

### Referências

*   [Redux Thunk Github Repo](https://github.com/reduxjs/redux-thunk)
*   [Middleware Redux](https://redux.js.org/advanced/middleware)

### Fontes

1.  [Exemplo de Contador de Incrementos citado na Documentação do Redux Thunk, 10/02/2018](#https://github.com/reduxjs/redux-thunk)
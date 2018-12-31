---
title: Redux Thunk
localeTitle: Thunk Redux
---
## Thunk Redux

O Redux Thunk é um middleware que permite retornar funções, ao invés de ações, dentro do Redux <sup>1</sup> . Isso permite ações atrasadas, incluindo o uso de [promessas](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise).

O motivo pelo qual este middleware é usado, consiste no facto que nem todas as ações que executamos serão síncronas, tal como acontece quando é usado [axios](https://github.com/axios/axios) para enviar um pedido HTTP get. Isso irá levar algum tempo e o redux nativamente não tem forma de lidar com este comportamento. Logo, é aí que entra o Redux Thunk, permitindo que as ações possam ser despoletadas de forma assíncrona e possamos lidar com o resultado sob a forma de promessas.

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
  return (dispatch) => {     //funções anónimas
    //Ação inicial despoletada 
    dispatch({ type: GET_CURRENT_USER }); 
    //Retorna uma promessa/promise com sucesso ou falha 
    return axios.get('/api/auth/user').then( 
      user => dispatch({ type: GET_CURRENT_USER_SUCCESS, user }), 
      err => dispatch({ type: GET_CURRENT_USER_FAILURE, err }) 
    ); 
  }; 
 }; 
```

### Instalação e Configuração

O Redux Thunk pode ser instalado usando `npm install redux-thunk --save` ou `yarn add redux-thunk` na linha de comando. Por ser uma ferramenta do Redux, irá ser necessário configurar o Redux. Uma vez instalado, é ativado através da função `applyMiddleware()`  com o argumento, neste caso thunk, ou seja o import que foi definido:

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

1.  [Exemplo de Contador citado na Documentação do Redux Thunk, 10/02/2018](#https://github.com/reduxjs/redux-thunk)
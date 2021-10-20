---
id: 5a24c314108439a4d4036156
title: Usar o middleware para lidar com ações assíncronas
challengeType: 6
forumTopicId: 301451
dashedName: use-middleware-to-handle-asynchronous-actions
---

# --description--

Até agora, estes desafios têm evitado discutir ações assíncronas, mas elas constituem uma parte inevitável do desenvolvimento web. Em algum momento, você precisará chamar rotas assíncronas no seu aplicativo Redux, então como você lida com esses tipos de pedidos? Redux fornece o middleware desenhado especificamente para esse propósito, chamado midleware Redux Thunk. Aqui está uma breve descrição sobre como usar isso com o Redux.

Para incluir o middleware Redux Thunk, você o passa como um argumento para `Redux.applyMiddleware()`. Esta declaração é então fornecida como o segundo parâmetro opcional para a função `createStore()`. Dê uma olhada no código na parte inferior do editor para ver isso. Então, para criar uma ação assíncrona, você retorna uma função no criador de ação que recebe `dispatch` como argumento. Dentro dessa função, você pode despachar ações e executar requisições assíncronas.

Neste exemplo, uma requisição assíncrona é simulada com uma chamada a `setTimeout()`. É comum despachar uma ação antes de iniciar qualquer comportamento assíncrono para que o estado do seu aplicativo saiba que alguns dados estão sendo requisitados (este estado pode exibir um ícone de carregamento, por exemplo). Em seguida, ao receber os dados, você envia outra ação que carrega os dados como um payload junto com informações de que a ação foi concluída.

Lembre-se de que você está passando o `dispatch` como um parâmetro para este criador de ação especial. Isso é o que você vai usar para despachar suas ações, você simplesmente passa a ação diretamente para despachar e o middleware cuida do resto.

# --instructions--

Escreva os dois dispatches no criador de ação `handleAsync()`. Despache `requestingData()` antes do `setTimeout()` (a chamada de API simulada). Então, depois de receber os dados (simulados), despache a ação `receivedData()`, passando estes dados. Agora você sabe como lidar com ações assíncronas no Redux. Todo o resto continua a se comportar como antes.

# --hints--

O criador de ação `requestingData` deve retornar um objeto de tipo igual ao valor de `REQUESTING_DATA`.

```js
assert(requestingData().type === REQUESTING_DATA);
```

O criador de ação `receivedData` deve retornar um objeto de tipo igual ao valor de `RECEIVED_DATA`.

```js
assert(receivedData('data').type === RECEIVED_DATA);
```

`asyncDataReducer` deve ser uma função.

```js
assert(typeof asyncDataReducer === 'function');
```

Despachar o criador de ação `requestingData` deve atualizar a propriedade `state` da store de buscar para `true`.

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch(requestingData());
    const reqState = store.getState();
    return initialState.fetching === false && reqState.fetching === true;
  })()
);
```

Despachar `handleAsync` deve enviar a ação de requisição de dados e, em seguida, enviar a ação de dados recebidos após um atraso.

```js
assert(
  (function () {
    const noWhiteSpace = __helpers.removeWhiteSpace(handleAsync.toString());
    return (
      noWhiteSpace.includes('dispatch(requestingData())') === true &&
      noWhiteSpace.includes('dispatch(receivedData(data))') === true
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here

    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here

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

# --solutions--

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

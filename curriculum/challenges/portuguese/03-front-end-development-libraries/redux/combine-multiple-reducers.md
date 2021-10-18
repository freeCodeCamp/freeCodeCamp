---
id: 5a24c314108439a4d4036154
title: Combinar múltiplos reducers
challengeType: 6
forumTopicId: 301436
dashedName: combine-multiple-reducers
---

# --description--

Quando o estado do seu app começa a se tornar mais complexo, pode ser tentador dividir o estado em várias partes. Em vez disso, lembre-se do primeiro princípio do Redux: todos os estados do aplicativo são mantidos em um único objeto de estado na store. Portanto, Redux fornece a composição do redutor como solução para um modelo de estado complexo. Você define vários reducers para lidar com diferentes partes do estado da sua aplicação, e então compõe estes reducers em um único reducer raiz. O reducer raiz é então passado para o método Redux `createStore()`.

Para que possamos combinar múltiplos reducers juntos, o Redux fornece o método `combineReducers()`. Este método aceita um objeto como argumento no qual você define propriedades que associam chaves a funções específicas de reducer. Os nomes que você der às chaves serão usados pelo Redux para pedaço do nome associado do state.

Normalmente, é uma boa prática criar um reducer para cada peça do estado da aplicação quando eles são distintos ou únicos de alguma forma. Por exemplo, em um aplicativo de anotações com autenticação de usuário, um reducer poderia lidar com a autenticação enquanto outro manipula o texto e notas que o usuário está enviando. Para tal aplicação, podemos escrever o método `combineReducers()` assim:

```js
const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
});
```

Agora, as chaves `notes` conterão todo o estado associado às nossas notas e serão tratadas pelo nosso `notesReducer`. É assim que múltiplos reducers podem ser compostos para gerenciar um estado mais complexo da aplicação. Neste exemplo, o estado mantido no armazenamento do Redux seria, em seguida, um único objeto contendo as propriedades `auth` e `notes`.

# --instructions--

Existem as funções `counterReducer()` e `authReducer()` fornecidas no editor de código, junto com uma store do Redux. Termine de escrever a função `rootReducer()` usando o método `Redux.combineReducers()`. Atribua `counterReducer` a uma chave chamada `count` e `authReducer` a uma chave chamada `auth`.

# --hints--

O `counterReducer` deve incrementar e decrementar o `state`.

```js
assert(
  (function () {
    const initialState = store.getState().count;
    store.dispatch({ type: INCREMENT });
    store.dispatch({ type: INCREMENT });
    const firstState = store.getState().count;
    store.dispatch({ type: DECREMENT });
    const secondState = store.getState().count;
    return firstState === initialState + 2 && secondState === firstState - 1;
  })()
);
```

O `authReducer` deve alternar o `state` de `authenticated` entre `true` e `false`.

```js
assert(
  (function () {
    store.dispatch({ type: LOGIN });
    const loggedIn = store.getState().auth.authenticated;
    store.dispatch({ type: LOGOUT });
    const loggedOut = store.getState().auth.authenticated;
    return loggedIn === true && loggedOut === false;
  })()
);
```

O `state` armazenado deve ter duas chaves: `count`, que contém um número e um `auth`, que contém um objeto. O objeto `auth` deve ter a propriedade `authenticated`, a qual possui um booleano.

```js
assert(
  (function () {
    const state = store.getState();
    return (
      typeof state.auth === 'object' &&
      typeof state.auth.authenticated === 'boolean' &&
      typeof state.count === 'number'
    );
  })()
);
```

`rootReducer` deve ser uma função que combina o `counterReducer` e o `authReducer`.

```js
(getUserInput) =>
  assert(
    (function () {
      const noWhiteSpace = __helpers.removeWhiteSpace(getUserInput('index'));
      return (
        typeof rootReducer === 'function' &&
        noWhiteSpace.includes('Redux.combineReducers')
      );
    })()
  );
```

# --seed--

## --seed-contents--

```js
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

const rootReducer = // Define the root reducer here

const store = Redux.createStore(rootReducer);
```

# --solutions--

```js
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

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
});

const store = Redux.createStore(rootReducer);
```

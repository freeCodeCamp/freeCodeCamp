---
id: 5a24c314108439a4d4036152
title: Usar const para action types
challengeType: 6
forumTopicId: 301450
dashedName: use-const-for-action-types
---

# --description--

Uma prática comum ao trabalhar com Redux é atribuir tipos de ação como constantes somente de leitura, fazendo referência a essas constantes onde quer que elas sejam usadas. Você pode refatorar o código com o qual você estava trabalhando para escrever os tipos de ação com declarações `const`.

# --instructions--

Declare `LOGIN` e `LOGOUT` como valores `const` e os atribua às strings `'LOGIN'` e `'LOGOUT'`, respectivamente. Então, edite o `authReducer()` e os criadores de ação para fazer referência a essas constantes ao invés de valores string.

**Observação:** é uma convenção escrever constantes com todas as letras maiúsculas, e essa prática também é padrão no Redux.

# --hints--

Chamar a função `loginUser` deve retornar um objeto com a propriedade `type` definida para a string `LOGIN`.

```js
assert(loginUser().type === 'LOGIN');
```

Chamar a função `logoutUser` deve retornar um objeto com a propriedade `type` definida para a string `LOGOUT`.

```js
assert(logoutUser().type === 'LOGOUT');
```

A store deve ser inicializada com um objeto com a propriedade `login` definida como `false`.

```js
assert(store.getState().authenticated === false);
```

Despachar `loginUser` deve atualizar a propriedade `login` no state da store para `true`.

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch(loginUser());
    const afterLogin = store.getState();
    return (
      initialState.authenticated === false && afterLogin.authenticated === true
    );
  })()
);
```

Despachar `logoutUser` deve atualizar a propriedade `login` no state da store para `false`.

```js
assert(
  (function () {
    store.dispatch(loginUser());
    const loggedIn = store.getState();
    store.dispatch(logoutUser());
    const afterLogout = store.getState();
    return (
      loggedIn.authenticated === true && afterLogout.authenticated === false
    );
  })()
);
```

A função `authReducer` deve lidar com vários tipos de ação com um comando switch.

```js
(getUserInput) =>
  assert(
    (function () {
      return (
        typeof authReducer === 'function' &&
        getUserInput('index').toString().includes('switch') &&
        getUserInput('index').toString().includes('case') &&
        getUserInput('index').toString().includes('default')
      );
    })()
  );
```

`LOGIN` e `LOGOUT` devem ser declarados como valores `const` e devem ser atribuídos às strings `LOGIN`e `LOGOUT`.

```js
const noWhiteSpace = __helpers.removeWhiteSpace(code);
assert(LOGIN === 'LOGIN' && LOGOUT === 'LOGOUT')
assert(noWhiteSpace.includes('const'))
```

Os criadores de ação e o reducer devem fazer referência às constantes `LOGIN` e `LOGOUT`.

```js
(getUserInput) =>
  assert(
    (function () {
      const noWhiteSpace = __helpers.removeWhiteSpace(
        getUserInput('index').toString()
      );
      return (
        noWhiteSpace.includes('caseLOGIN:') &&
        noWhiteSpace.includes('caseLOGOUT:') &&
        noWhiteSpace.includes('type:LOGIN') &&
        noWhiteSpace.includes('type:LOGOUT')
      );
    })()
  );
```

# --seed--

## --seed-contents--

```js


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

# --solutions--

```js
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

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

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};
```

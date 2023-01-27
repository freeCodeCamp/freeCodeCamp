---
id: 5a24c314108439a4d4036152
title: Використання const для типів дій
challengeType: 6
forumTopicId: 301450
dashedName: use-const-for-action-types
---

# --description--

Поширена практика при роботі з Redux – призначати типи дій як константи тільки для читання, а потім посилатися на ці константи в місцях, де вони використовуються. Ви можете повернути код, з яким ви працюєте, щоб записати типи дій як `const` декларації.

# --instructions--

Оголосіть `LOGIN` і `LOGOUT` як значення `const` і призначте їх рядкам `'LOGIN'` і `'LOGOUT'` відповідно. Потім відредагуйте `authReducer()` та генераторів дії на посилання на ці константи замість значень у рядку.

**Примітка:** Зазвичай константи пишуться великими літерами, це стандартна практика у Redux.

# --hints--

Виклик функції `loginUser` повинен повернути об'єкт з набором параметрів `type` до рядку `LOGIN`.

```js
assert(loginUser().type === 'LOGIN');
```

Виклик функції `loginUser` повинен повернути об'єкт з набором параметрів `type` до рядку `LOGOUT`.

```js
assert(logoutUser().type === 'LOGOUT');
```

Сховище має бути ініціалізованим з об'єктом, що має параметр `login`, встановлений на `false`.

```js
assert(store.getState().authenticated === false);
```

Викликання `loginUser` мусить оновити параметр `login` у сховищі на `true`.

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

Викликання `logoutUser` мусить оновити параметр `login` у сховищі на `false`.

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

Функція `authReducer` повинна обробляти кілька типів дій за допомогою switch конструкції.

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

`LOGIN` та `LOGOUT` повинні бути оголошені як `const` значення і повинні бути призначені рядки `LOGIN` та `LOGOUT`.

```js
const noWhiteSpace = __helpers.removeWhiteSpace(code);
assert(LOGIN === 'LOGIN' && LOGOUT === 'LOGOUT')
assert(noWhiteSpace.includes('const'))
```

Генератори дій та редюсер мають посилатися на `LOGIN` та `LOGOUT` константи.

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

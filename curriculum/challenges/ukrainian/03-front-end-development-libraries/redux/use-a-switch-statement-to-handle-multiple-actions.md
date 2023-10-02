---
id: 5a24c314108439a4d4036151
title: Використайте інструкцію switch, щоб обробити декілька дій
challengeType: 6
forumTopicId: 301449
dashedName: use-a-switch-statement-to-handle-multiple-actions
---

# --description--

Ви можете повідомити сховищу Redux, як обробляти декілька типів дій. Припустимо, ви керуєте автентифікацією користувача у своєму сховищі Redux. Вам потрібно мати чітке уявлення, коли користувачі входять у систему та коли вони виходять. Ви представляєте це єдиним об’єктом стану з властивістю `authenticated`. Вам також потрібні автори дій, які створюють дії відповідно до входу та виходу користувача, разом з самими об’єктами дій.

# --instructions--

У редакторі коду існують сховище, дії та автори дій. Заповніть функцію `reducer` для обробки кількох дій автентифікації. Використайте інструкцію `switch` від JavaScript у функції `reducer`, щоб відповідати на різні події. Це стандартний шаблон для написання редюсерів Redux. Інструкція switch має перемикати `action.type` та повертати відповідний стан автентифікації.

**Примітка:** не турбуйтеся про незмінність стану, оскільки в цьому прикладі він невеликий і простий. Для кожної дії можна повернути новий об’єкт; наприклад, `{authenticated: true}`. Не забудьте написати випадок `default` в інструкції switch, що повертає поточний `state`. Це важливо, оскільки якщо в застосунку наявні декілька редюсерів, всі вони запускаються щоразу, коли надсилається дія, навіть якщо дія не пов’язана з редюсером. У такому випадку варто переконатися, що ви повертаєте поточний `state`.

# --hints--

Виклик функції `loginUser` має повернути об’єкт з властивістю типу зі значенням рядка `LOGIN`.

```js
assert(loginUser().type === 'LOGIN');
```

Виклик функції `logoutUser` має повернути об’єкт з властивістю типу зі значенням рядка `LOGOUT`.

```js
assert(logoutUser().type === 'LOGOUT');
```

Сховище має бути ініціалізованим об’єктом, що має властивість `authenticated` зі значенням `false`.

```js
assert(store.getState().authenticated === false);
```

Відправлення `loginUser` має оновити значення властивості `authenticated` у стані сховища на `true`.

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

Відправлення `logoutUser` має оновити значення властивості `authenticated` у стані сховища на `false`.

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

Функція `authReducer` має обробити декілька типів дій за допомогою інструкції `switch`.

```js
(getUserInput) =>
  assert(
    getUserInput('index').toString().includes('switch') &&
      getUserInput('index').toString().includes('case') &&
      getUserInput('index').toString().includes('default')
  );
```

# --seed--

## --seed-contents--

```js
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line

  // Change code above this line
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

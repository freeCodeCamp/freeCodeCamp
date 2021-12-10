---
id: 5a24c314108439a4d4036151
title: Використовуйте команду Switch для виконання декількох дій
challengeType: 6
forumTopicId: 301449
dashedName: use-a-switch-statement-to-handle-multiple-actions
---

# --description--

Ви можете вказати в сховищі Redux, як обробляти кілька типів дій. Припустимо, ви керуєте автентифікацією користувача у вашому сховищі Redux. Ви хочете мати чітке уявлення, коли користувачі входять у систему та коли вони виходять. Ви передаєте це єдиним чітким об’єктом із властивістю `authenticated`. Вам також потрібні творці дій, які створюють дії, що відповідають призначеним для входу користувача та виходу користувача, разом з самими об'єктами.

# --instructions--

У редакторі коду є сховище, дії та виконавці створені для вас. Заповніть функцію `reducer` для обробки кількох дій автентифікації. Використовуйте команду JavaScript `switch` у `reducer`, щоб відповідати на різні події дій. Це стандартний шаблон для написання Redux reducers. Команда switch повинна перемикати `action.type` і повертати відповідний стан автентифікації.

**Note:**Наразі не турбуйтеся про незмінність стану, оскільки в цьому прикладі він невеликий і простий. Для кожної дії, можна повернути новий об'єкт - наприклад, `{authenticated: true}`. Також не забудьте написати `default` випадок у вашій команді switch, яка повертає поточний`state`. Це важливо, оскільки, коли у вашому додатку є кілька reducers, усі вони запускаються щоразу, коли надсилається дія, навіть якщо ця дія не пов’язана з цим reducer. У такому випадку варто переконатися, що ви повертаєте поточний `state`.

# --hints--

Виклик функції `loginUser` має повернути об’єкт із властивістю типу рядок `LOGIN`.

```js
assert(loginUser().type === 'LOGIN');
```

Виклик функції `logoutUser` має повернути об’єкт із властивістю типу рядок `LOGOUT`.

```js
assert(logoutUser().type === 'LOGOUT');
```

Зберігання має бути ініціалізовано об'єктом із властивістю `authenticated`, встановленою на `false`.

```js
assert(store.getState().authenticated === false);
```

Відправлення `loginUser` має оновити властивість `authenticated` у стані сховища до `true`.

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

Відправлення `logoutUser` має оновити властивість `authenticated` у стані сховища до `false`.

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

Функція `authReducer` повинна обробляти кілька типів дій за допомогою команди `switch`.

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

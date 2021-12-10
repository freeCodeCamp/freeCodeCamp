---
id: 5a24c314108439a4d4036154
title: Об'єднати множинні зменшувачі
challengeType: 6
forumTopicId: 301436
dashedName: combine-multiple-reducers
---

# --description--

Коли стан вашого додатку стає більш складним, спокусливіше було б розділити стан на кілька частин. Замість цього запам'ятайте перший принцип Redux: весь стан програми відбувається в одному об'єкті стану, в сховищі. Тому, Redux забезпечує зменшення поєднання як рішення складного стану моделі. Ви визначаєте декілька знижень, щоб працювати з різними частинами вашого стану програм, і потім складаєте ці зменшувачі разом в одному кореневому варіанті. Кореневий варіант передається в Rudex за допомогою `createStore()`  методу.

Для того, щоб дозволити нам комбінувати декілька скорочень разом, Redux надає `combineReducers()` метод. Цей метод приймає об'єкт як аргумент, в якому ви зазначаєте властивості, які пов'язують ключі з конкретними зменшувальними функціями. Назва, яку ви даєте ключам, буде використовуватися Redux як назва для відповідного фрагменту стану.

Як правило, для кожної частини програми корисно створити скорочення якщо вони різні або унікальні. Наприклад, у сповіщенні за допомогою автентифікації користувачів, один лічильник може обробляти автентифікацію, поки інший обробляє текст і замітки, які користувач надсилає. Для такої програми ми могли б написати метод `combineReducers()` на зразок цього:

```js
const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
});
```

Тепер для доступу `notes`  буде встановлено весь режим, пов'язаний з нашими нотатками та оброблено нашими `notesReducer`. Ось так можна скласти кілька скорочень для керування більш складним станом програми. У цьому прикладі, стан, утриманий у сховищі Redux, буде єдиним об'єктом, що містить `auth` і `notes` властивостей.

# --instructions--

Існує `counterReducer()` і `authReducer()` функції, які надані в текстовому редакторі, а також Redux сховищі. Завершіть запис функції `rootReducer()` за допомогою методу `Redux.combineReducers()`. Призначте `counterReducer` під назвою `count` і `authReducer` до ключа під назвою `auth`.

# --hints--

Код `counterReducer` повинен збільшити а `state` зменшити.

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

Код `authReducer` повинен переключити `state` `authenticated` між `true` і `false`.

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

У сховищі `state` має бути два ключі: `count` який містить номер і `auth`, який містить об'єкт. `auth` повинен мати властивість `authenticated`, який містить логічне значення.

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

`rootReducer` повинен бути функцією, що поєднує `counterReducer` і `authReducer`.

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

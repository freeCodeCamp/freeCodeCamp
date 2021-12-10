---
id: 5a24c314108439a4d4036156
title: Використання Middleware для опрацювання асинхронних дій
challengeType: 6
forumTopicId: 301451
dashedName: use-middleware-to-handle-asynchronous-actions
---

# --description--

До цього моменту в завданнях ми уникали обговорення асинхронних дій, хоча вони є обов'язковою частиною веб-розробки. У певний момент вам прийдеться викликати асинхронні кінцеві точки у вашому додатку Redux. Отже, як опрацьовувати ці всі типи запитів? Задля цього Redux було спеціально розроблено проміжне програмне забезпечення Redux Thunk. Нижче наведено як використовувати цей додаток з Redux.

Для використання проміжного програмного забезпечення Redux Thunk, передайте його як аргумент до `Redux.applyMiddleware()`. Ця команда передається далі, як другий вибірковий параметр для функції `createStore()`. Щоб побачити це, подивіться на код, розміщений внизу редактора. Таким чином для створення асинхронної дії ви повертаєте функцію в генераторі дії, яка отримує `dispatch`, як аргумент. У межах цієї функції ви можете відправляти дії та виконувати асинхронні запити.

У цьому прикладі асинхронний запит моделюється за допомогою команди `setTimeout()`. Загальноприйнято надсилати дію перед початком будь-якої асинхронної поведінки, щоб стан вашої програми знав про те, що запитуються деякі дані (наприклад, у цьому стані може показуватися значок завантаження). Як тільки ви отримуєте дані, ви відправляєте іншу дію, яка переносить дані, як інформаційне наповнення разом з інформацією про завершену дію.

Пам'ятайте, що ви передаєте `dispatch`, як параметр для цього спеціального генератора дії. Це те, що ви будете використовувати для відправлення ваших дій. Ви просто передасте дію безпосередньо для відправлення, а проміжне програмне забезпечення потурбується про все інше.

# --instructions--

Пропишіть обидві команди відправлення у створювачі дії `handleAsync()`. Відправте `requestingData()` перед `setTimeout()`(модельований АРІ запит). Після того, як ви отримаєте (pretend) дані, відправте дію `receivedData()`, у якій передасте ці дані. Тепер ви знаєте, як опрацьовувати асинхронні дії у Redux. Все інше продовжує поводитися як і раніше.

# --hints--

Генератор дії `requestingData` має повернути об'єкт типу, що дорівнює значенню `REQUESTING_DATA`.

```js
assert(requestingData().type === REQUESTING_DATA);
```

Генератор дії `receivedData` має повернути об'єкт типу, що дорівнює значенню `RECEIVED_DATA`.

```js
assert(receivedData('data').type === RECEIVED_DATA);
```

`asyncDataReducer` має бути функцією.

```js
assert(typeof asyncDataReducer === 'function');
```

Відправлення генератора дії `requestingData` має оновити зберігання властивості `state` для отримання `true`.

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

Посилання `handleAsync` має спочатку відправити дію про запит даних, а потім, після затримки, відправити отримані дані.

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

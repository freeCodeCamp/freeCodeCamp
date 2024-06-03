---
id: 5a24c314108439a4d4036156
title: Використайте ППЗ, щоб обробити асинхронні дії
challengeType: 6
forumTopicId: 301451
dashedName: use-middleware-to-handle-asynchronous-actions
---

# --description--

До цього моменту ми уникали обговорення асинхронних дій, хоча вони є обов’язковою частиною веброзробки. Рано чи пізно вам прийдеться викликати асинхронні кінцеві точки в застосунку Redux, але як опрацювати всі типи запитів? Redux надає проміжне програмне забезпечення під назвою Redux Thunk. Коротко розглянемо, як використовувати його з Redux.

Щоб використати Redux Thunk, передайте його як аргумент до `Redux.applyMiddleware()`. Потім цю інструкцію надано як другий додатковий параметр до функції `createStore()`. Погляньте на код внизу редактора, щоб побачити це. Потім, щоб створити асинхронну дію, поверніть функцію в авторі дії, яка приймає `dispatch` як аргумент. У межах цієї функції ви можете відправляти дії та виконувати асинхронні запити.

У цьому прикладі асинхронний запит моделюється за допомогою виклику `setTimeout()`. Перед початком будь-якої асинхронної поведінки зазвичай відправляють дію, щоб стан застосунку знав, що запитуються деякі дані (цей стан може відтворювати, наприклад, значок завантаження). Як тільки ви отримуєте дані, ви відправляєте іншу дію, яка містить дані як корисне навантаження, а також інформацію про завершення дії.

Пам’ятайте, що ви передаєте `dispatch` як параметр до певного автора дії. Це те, що ви будете використовувати для відправлення дій. Ви просто передаєте дію прямо для відправлення, а проміжне програмне забезпечення турбується про все інше.

# --instructions--

Напишіть обидва відправлення в авторі дії `handleAsync()`. Відправте `requestingData()` перед `setTimeout()` (змодельований запит АРІ). Як тільки ви отримаєте (змодельовані) дані, відправте дію `receivedData()`, передаючи ці дані. Тепер ви знаєте, як опрацьовувати асинхронні дії у Redux. Все інше поводиться, як і раніше.

# --hints--

Автор дії `requestingData` має повернути об’єкт типу зі значенням `REQUESTING_DATA`.

```js
assert(requestingData().type === REQUESTING_DATA);
```

Автор дії `receivedData` має повернути об’єкт типу зі значенням `RECEIVED_DATA`.

```js
assert(receivedData('data').type === RECEIVED_DATA);
```

`asyncDataReducer` має бути функцією.

```js
assert(typeof asyncDataReducer === 'function');
```

Відправлення автора дії `requestingData` має оновити властивість `fetching` стану сховища на `true`.

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

Відправлення `handleAsync` має відправити дію запиту даних, а потім відправити дію отриманих даних після затримки.

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

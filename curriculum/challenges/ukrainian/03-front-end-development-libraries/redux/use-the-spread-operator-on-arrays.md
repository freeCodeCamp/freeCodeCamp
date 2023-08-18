---
id: 5a24c314108439a4d4036159
title: Використайте оператор розширення до масиву
challengeType: 6
forumTopicId: 301452
dashedName: use-the-spread-operator-on-arrays
---

# --description--

Одним із розв’язків від ES6, щоб забезпечити незмінність стану в Redux, є оператор розширення: `...`. Оператор розширення має велику кількість застосувань, одне з яких добре підходить для попереднього завдання, яке полягає в тому, щоб створити новий масив із наявного масиву. Цей синтаксис відносно новий, але його часто використовують. Наприклад, якщо ви маєте масив `myArray` і напишете:

```js
let newArray = [...myArray];
```

То `newArray` стане клоном `myArray`. Обидва масиви існують в пам’яті окремо. Якщо ви виконуєте зміну, наприклад, `newArray.push(5)`, то `myArray` не зміниться. `...` ефективно *розширює* значення `myArray` в новий масив. Щоб клонувати масив, а також додати додаткові значення до нового масиву, напишіть написати `[...myArray, 'new value']`. Це поверне новий масив, який містить значення масиву `myArray` і рядок `new value` як останнє значення. Синтаксис розширення можна використати декілька разів в масиву, але важливо звернути увагу на те, що він робить мілку копію масиву. Тобто він надає лише незмінні операції для одновимірних масивів.

# --instructions--

Використайте оператор розширення, щоб повернути нову копію стану, коли додано список справ.

# --hints--

Сховище Redux має існувати й ініціалізуватися станом, який дорівнює `["Do not mutate state!"]`.

```js
assert(
  (function () {
    const initialState = store.getState();
    return (
      Array.isArray(initialState) === true &&
      initialState[0] === 'Do not mutate state!'
    );
  })()
);
```

`addToDo` та `immutableReducer` мають бути функціями.

```js
assert(typeof addToDo === 'function' && typeof immutableReducer === 'function');
```

Відправлення дії типу `ADD_TO_DO` до сховища Redux має додати елемент `todo` та НЕ змінювати стан.

```js
assert(
  (function () {
    const initialState = store.getState();
    const isFrozen = DeepFreeze(initialState);
    store.dispatch(addToDo('__TEST__TO__DO__'));
    const finalState = store.getState();
    const expectedState = ['Do not mutate state!', '__TEST__TO__DO__'];
    return isFrozen && DeepEqual(finalState, expectedState);
  })()
);
```

Використайте оператор розширення, щоб повернути новий стан.

```js
(getUserInput) => assert(getUserInput('index').includes('...state'));
```

# --seed--

## --seed-contents--

```js
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```

# --solutions--

```js
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      return [
        ...state,
        action.todo
      ];
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```

---
id: 5a24c314108439a4d4036159
title: Використання оператора розширення в масивах
challengeType: 6
forumTopicId: 301452
dashedName: use-the-spread-operator-on-arrays
---

# --description--

Одним із рішень від ES6, щоб забезпечити стан незмінності в Redux, є оператор розширення: `...`. Оператор розширення має велику кількість додатків, один з яких добре підходить для попереднього завдання, яке полягає в тому, щоб створити новий масив із масиву, який вже існує. Цей синтаксис є відносно новий, але його часто використовують. На приклад, якщо ви маєте масив `myArray` і записано:

```js
let newArray = [...myArray];
```

`newArray` - це тепер копія для `myArray`. Обидва масиви залишаються окремо існувати в пам'яті. Якщо ви виконуєте зміну, наприклад, `newArray.push(5)`, то `myArray` не зміниться. `...` ефективно *spreads* значення `myArray` в новому масиві. Щоб скопіювати масив, але і ще додати додаткове значення в цей новий масив, ви маєте написати `[...myArray, 'new value']`. Це буде повертати новий масив, який складений із значень в `myArray` і рядок `new value` як останнє значення. Синтаксис розширення може використовуватися декілька разів в складі такого масиву, але важливо звернути увагу на те, що він робить лише неглибоку копію масиву. Інакше кажучи, він лише забезпечує незмінні операції з масивом для одновимірного масиву.

# --instructions--

Оператор розширення використовується для того, щоб повернути нову копію тоді, коли додається запис.

# --hints--

Сховище Redux повинне існувати і ініціалізуватися із станом, який дорівнює `["Do not mutate state!"]`.

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

Обидві `addToDo` і `immutableReducer` мають бути функціями.

```js
assert(typeof addToDo === 'function' && typeof immutableReducer === 'function');
```

Коли у Redux сховище відправляєте дію типу `ADD_TO_DO`, ви повинні додати `todo` і не можете змінювати стан.

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

Оператор розповсюдження має використовуватися для повернення нового стану.

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

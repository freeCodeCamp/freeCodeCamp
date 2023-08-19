---
id: 5a24c314108439a4d4036158
title: Ніколи не змінюйте стан
challengeType: 6
forumTopicId: 301445
dashedName: never-mutate-state
---

# --description--

Останні завдання описують декілька методів ключового принципу незмінності стану в Redux. Незмінний стан означає, що ви ніколи не змінюєте стан напряму, а повертаєте нову копію стану.

Якби ви фіксували стан застосунку Redux через певний час, ви б бачили `state 1`, `state 2`, `state 3`,`state 4`, `...` і так далі, де кожен стан був би схожим до попереднього, але був би окремою частиною даних. Насправді ця незмінність надає різні функціональності, серед яких налагодження в часі, про яку ви могли чути.

Redux неактивно використовує незмінність стану в сховищі чи редюсерах, тому ця відповідальність лягає на програміста. На щастя, JavaScript (особливо ES6) надає декілька корисних інструментів, які ви можете використати для забезпечення незмінності стану, незалежно від того, чи це рядок, число, масив або об’єкт. Зверніть увагу, що рядки і числа є незмінними примітивними значеннями. Іншими словами, 3 завжди означає 3. Ми не можемо змінити значення числа 3. Однак масиви та об’єкти є змінними. Ймовірно, що на практиці стан складатиметься з масиву чи об‘єкту, оскільки це корисні структури даних для представлення багатьох типів інформації.

# --instructions--

В редакторі коду наявні сховище та редюсер для керування елементами списку справ. Допишіть випадок `ADD_TO_DO` в редюсері, щоб додати нові справи до стану. Існує кілька способів досягти цього зі стандартним JavaScript або ES6. Дізнаємось, чи ви зможете знайти спосіб повернути новий масив з елементом від `action.todo`, доданим до кінця.

# --hints--

Сховище Redux має існувати й ініціалізуватися станом, який дорівнює масиву `todos` в редакторі коду.

```js
assert(
  (function () {
    const todos = [
      'Go to the store',
      'Clean the house',
      'Cook dinner',
      'Learn to code'
    ];
    const initialState = store.getState();
    return (
      Array.isArray(initialState) && initialState.join(',') === todos.join(',')
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
    const expectedState = [
      'Go to the store',
      'Clean the house',
      'Cook dinner',
      'Learn to code',
      '__TEST__TO__DO__'
    ];
    return isFrozen && DeepEqual(finalState, expectedState);
  })()
);
```

# --seed--

## --seed-contents--

```js
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```

# --solutions--

```js
const ADD_TO_DO = 'ADD_TO_DO';

const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      return state.concat(action.todo);
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```

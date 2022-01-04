---
id: 5a24c314108439a4d4036158
title: Незмінний стан
challengeType: 6
forumTopicId: 301445
dashedName: never-mutate-state
---

# --description--

Ці останні завдання описують кілька методів забезпечення ключового принципу незмінності стану в Redux. Незмінний стан означає, що ви ніколи безпосередньо не змінюєте стан, натомість ви повертаєте нову копію стану.

Якби ви сфотографували стан додатку Redux через деякий час, ви б побачите щось на зразок `state 1`, `state 2`, `state 3`, `state 4`, `...` і так далі, де кожен стан може бути подібним до останнього, але кожен - це окрема частина даних. Ця незмінність, насправді, є тим, що створює такі функції як налагодження подорожі у часі, про яку ви, можливо, чули.

Redux не активно застосовує незмінність стану у своєму сховищі чи редукторах, ця відповідальність лягає на програміста. На щастя, JavaScript (особливо ES6) надає кілька корисних інструментів, які ви можете використати для забезпечення незмінності вашого стану, чи це `string`, `number`, `array`, чи `object`. Зверніть увагу, що рядки і цифри є простими значеннями і є незмінними за своїми властивостями. Іншими словами, 3 завжди є 3. Ми не можемо змінити значення числа 3. Однак `array` або `object`, є незмінними. На практиці, ваш стан, ймовірно, складатиметься з `array` або `object`, оскільки це корисні структури даних для представлення багатьох типів інформації.

# --instructions--

В редакторі коду є `store` і `reducer` для керування елементами списку справ. Завершіть написання випадку `ADD_TO_DO` в редукторі, щоб додати новий список справ у стан. Існує кілька способів досягти цього з стандартним JavaScript або ES6. Подивіться, чи ви зможете знайти спосіб повернути новий масив з елементом `action.todo`, доданим до кінця.

# --hints--

Сховище Redux повинне існувати й ініціалізуватися зі станом, який дорівнює масиву `todos` в редакторі коду.

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

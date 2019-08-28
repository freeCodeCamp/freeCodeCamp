---
id: 5a24c314108439a4d4036158
title: Never Mutate State
challengeType: 6
isRequired: false
forumTopicId: 301445
localeTitle: Никогда не мутируйте государство
---

## Description
<section id='description'>
Эти заключительные проблемы описывают несколько способов обеспечения ключевого принципа неизменности состояния в Redux. Неизменяемое состояние означает, что вы никогда не изменяете состояние напрямую, вместо этого вы возвращаете новую копию состояния. Если вы взяли снимок состояния Redux приложения с течением времени, вы увидите что - то вроде <code>state 1</code> , <code>state 2</code> , <code>state 3</code> , <code>state 4</code> , <code>...</code> и так далее , где каждое состояние может быть аналогично последним, но каждый представляет собой отдельную часть данных. Эта непреложность, по сути, является тем, что обеспечивает такие функции, как отладка во время путешествия, о которой вы, возможно, слышали. Redux не активно применяет неизменность государства в своем магазине или редукторах, эта ответственность ложится на программиста. К счастью, JavaScript (особенно ES6) предоставляет несколько полезных инструментов, которые можно использовать для обеспечения неизменности вашего состояния, будь то <code>string</code> , <code>number</code> , <code>array</code> или <code>object</code> . Обратите внимание, что строки и числа являются примитивными значениями и неизменны по своей природе. Другими словами, 3 всегда 3. Вы не можете изменить значение числа 3. <code>array</code> или <code>object</code> , однако, являются изменяемыми. На практике ваше состояние, вероятно, будет состоять из <code>array</code> или <code>object</code> , поскольку они являются полезными структурами данных для представления многих типов информации.
</section>

## Instructions
<section id='instructions'>
В редакторе кода есть <code>store</code> и <code>reducer</code> для управления предметами. Завершите запись случая <code>ADD_TO_DO</code> в редукторе, чтобы добавить новое дело в состояние. Есть несколько способов сделать это со стандартным JavaScript или ES6. Посмотрите, можете ли вы найти способ возврата нового массива с элементом из <code>action.todo</code> добавленным в конец.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The Redux store should exist and initialize with a state equal to the <code>todos</code> array in the code editor.
    testString: assert((function() { const todos = [ 'Go to the store', 'Clean the house', 'Cook dinner', 'Learn to code' ]; const initialState = store.getState(); return Array.isArray(initialState) && initialState.join(',') === todos.join(','); })());
  - text: <code>addToDo</code> and <code>immutableReducer</code> both should be functions.
    testString: assert(typeof addToDo === 'function' && typeof immutableReducer === 'function');
  - text: Dispatching an action of type <code>ADD_TO_DO</code> on the Redux store should add a <code>todo</code> item and should NOT mutate state.
    testString: assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch(addToDo('__TEST__TO__DO__')); const finalState = store.getState(); const expectedState = [ 'Go to the store', 'Clean the house', 'Cook dinner', 'Learn to code', '__TEST__TO__DO__' ]; return( isFrozen && DeepEqual(finalState, expectedState)); })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
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
      // don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

// an example todo argument would be 'Learn React',
const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
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
      return state.concat(action.todo);
    default:
      return state;
  }
};

// an example todo argument would be 'Learn React',
const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```

</section>

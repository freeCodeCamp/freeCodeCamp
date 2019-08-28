---
id: 5a24c314108439a4d4036143
title: Extract State Logic to Redux
challengeType: 6
isRequired: false
forumTopicId: 301429
localeTitle: Извлечь логику состояния в Redux
---

## Description
<section id='description'>
Теперь, когда вы закончили компонент React, вам нужно переместить логику, которую она выполняет локально в своем <code>state</code> в Redux. Это первый шаг для подключения простого приложения React к Redux. Единственная функциональность вашего приложения - это добавить новые сообщения от пользователя в неупорядоченный список. Пример прост, чтобы продемонстрировать, как React и Redux работают вместе.
</section>

## Instructions
<section id='instructions'>
Сначала определите тип действия «ADD» и установите его в <code>ADD</code> const. Затем определите создателя действия <code>addMessage()</code> который создает действие для добавления сообщения. Вам нужно передать <code>message</code> этому создателю действия и включить сообщение в возвращаемое <code>action</code> . Затем создайте редуктор, называемый <code>messageReducer()</code> который обрабатывает состояние для сообщений. Начальное состояние должно равняться пустующему массиву. Этот редуктор должен добавить сообщение в массив сообщений, находящихся в состоянии, или вернуть текущее состояние. Наконец, создайте свой магазин Redux и передайте ему редуктор.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The const <code>ADD</code> should exist and hold a value equal to the string <code>ADD</code>
    testString: assert(ADD === 'ADD');
  - text: The action creator <code>addMessage</code> should return an object with <code>type</code> equal to <code>ADD</code> and <code>message</code> equal to the message that is passed in.
    testString: assert((function() { const addAction = addMessage('__TEST__MESSAGE__'); return addAction.type === ADD && addAction.message === '__TEST__MESSAGE__'; })());
  - text: <code>messageReducer</code> should be a function.
    testString: assert(typeof messageReducer === 'function');
  - text: The store should exist and have an initial state set to an empty array.
    testString: assert((function() { const initialState = store.getState(); return typeof store === 'object' && initialState.length === 0; })());
  - text: Dispatching <code>addMessage</code> against the store should immutably add a new message to the array of messages held in state.
    testString: assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch(addMessage('__A__TEST__MESSAGE')); const addState = store.getState(); return (isFrozen && addState[0] === '__A__TEST__MESSAGE'); })());
  - text: The <code>messageReducer</code> should return the current state if called with any other actions.
    testString: 'assert((function() { const addState = store.getState(); store.dispatch({type: ''FAKE_ACTION''}); const testState = store.getState(); return (addState === testState); })());'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// define ADD, addMessage(), messageReducer(), and store here:

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);
```

</section>

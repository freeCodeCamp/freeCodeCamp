---
id: 5a24c314108439a4d4036157
title: Write a Counter with Redux
challengeType: 6
isRequired: false
forumTopicId: 301453
localeTitle: Написание счетчика с помощью Redux
---

## Description
<section id='description'>
Теперь вы узнали все основные принципы Redux! Вы видели, как создавать действия и создателей действия, создавать хранилище Redux, отправлять ваши действия в хранилище и разрабатывать обновления состояния с помощью чистых редукторов. Вы даже видели, как управлять сложным состоянием с композицией редукторов и обрабатывать асинхронные действия. Эти примеры упрощены, но эти концепции являются основными принципами Redux. Если вы их хорошо понимаете, вы готовы приступить к созданию своего собственного приложения Redux. Следующие упражнения охватывают некоторые детали, касающиеся неизменности <code>state</code> , но сначала рассмотрим все, что вы изучили до сих пор.
</section>

## Instructions
<section id='instructions'>
В этом уроке вы будете реализовывать простой счетчик с помощью Redux с нуля. Основы представлены в редакторе кода, но вам нужно будет заполнить детали! Используйте имена, которые предоставлены и опишите создателей действий <code>incAction</code> и <code>decAction</code> , редуктор <code>counterReducer()</code> , типы действий <code>INCREMENT</code> и <code>DECREMENT</code> , и, наконец, Redux хранилище <code>store</code> . После того, как вы закончите , вы должны смочь отправить действия <code>INCREMENT</code> или <code>DECREMENT</code> для увеличения или уменьшения состояния в хранилище  <code>store</code> . Удачи в создании вашего первого приложения Redux!
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The action creator <code>incAction</code> should return an action object with <code>type</code> equal to the value of <code>INCREMENT</code>
    testString: assert(incAction().type ===INCREMENT);
  - text: The action creator <code>decAction</code> should return an action object with <code>type</code> equal to the value of <code>DECREMENT</code>
    testString: assert(decAction().type === DECREMENT);
  - text: The Redux store should initialize with a <code>state</code> of 0.
    testString: assert(store.getState() === 0);
  - text: Dispatching <code>incAction</code> on the Redux store should increment the <code>state</code> by 1.
    testString: assert((function() { const initialState = store.getState(); store.dispatch(incAction()); const incState = store.getState(); return initialState + 1 === incState })());
  - text: Dispatching <code>decAction</code> on the Redux store should decrement the <code>state</code> by 1.
    testString: assert((function() { const initialState = store.getState(); store.dispatch(decAction()); const decState = store.getState(); return initialState - 1 === decState })());
  - text: <code>counterReducer</code> should be a function
    testString: assert(typeof counterReducer === 'function');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const INCREMENT = null; // define a constant for increment action types
const DECREMENT = null; // define a constant for decrement action types

const counterReducer = null; // define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = null; // define an action creator for incrementing

const decAction = null; // define an action creator for decrementing

const store = null; // define the Redux store here, passing in your reducers

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
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

const incAction = () => {
  return {
    type: INCREMENT
  }
};

const decAction = () => {
  return {
    type: DECREMENT
  }
};

const store = Redux.createStore(counterReducer);
```

</section>

---
id: 5a24c314108439a4d4036157
title: Write a Counter with Redux
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Напишите счетчик с Redux
---

## Description
<section id="description"> Теперь вы узнали все основные принципы Redux! Вы видели, как создавать действия и создавать действия, создавать хранилище Redux, отправлять ваши действия против магазина и разрабатывать обновления состояния с помощью чистых редукторов. Вы даже видели, как управлять сложным состоянием с композицией редуктора и обрабатывать асинхронные действия. Эти примеры упрощены, но эти концепции являются основными принципами Redux. Если вы их хорошо понимаете, вы готовы приступить к созданию своего собственного приложения Redux. Следующие проблемы охватывают некоторые детали, касающиеся неизменности <code>state</code> , но сначала рассмотрим все, что вы изучили до сих пор. </section>

## Instructions
<section id="instructions"> В этом уроке вы будете использовать простой счетчик с Redux с нуля. Основы представлены в редакторе кода, но вам нужно будет заполнить детали! Используйте имена, которые предоставляются и определяют <code>incAction</code> и <code>decAction</code> создателей действий, в <code>counterReducer()</code> , <code>INCREMENT</code> и <code>DECREMENT</code> типы действий, и , наконец, Redux <code>store</code> . После того, как вы закончите , вы должны быть в состоянии направить <code>INCREMENT</code> или <code>DECREMENT</code> действия для увеличения или уменьшения состояния проводится в <code>store</code> . Удачи в создании вашего первого приложения Redux! </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Создатель действия <code>incAction</code> должен возвращать объект действия с <code>type</code> равным значению <code>INCREMENT</code>
    testString: 'assert(incAction().type ===INCREMENT, "The action creator <code>incAction</code> should return an action object with <code>type</code> equal to the value of <code>INCREMENT</code>");'
  - text: Создатель действия <code>decAction</code> должен возвращать объект действия с <code>type</code> равным значению <code>DECREMENT</code>
    testString: 'assert(decAction().type === DECREMENT, "The action creator <code>decAction</code> should return an action object with <code>type</code> equal to the value of <code>DECREMENT</code>");'
  - text: Магазин Redux должен инициализировать с <code>state</code> 0.
    testString: 'assert(store.getState() === 0, "The Redux store should initialize with a <code>state</code> of 0.");'
  - text: Dispatching <code>incAction</code> в магазине Redux должен увеличивать <code>state</code> на 1.
    testString: 'assert((function() { const initialState = store.getState(); store.dispatch(incAction()); const incState = store.getState(); return initialState + 1 === incState })(), "Dispatching <code>incAction</code> on the Redux store should increment the <code>state</code> by 1.");'
  - text: Отправка <code>decAction</code> в хранилище Redux должна <code>decAction</code> <code>state</code> на 1.
    testString: 'assert((function() { const initialState = store.getState(); store.dispatch(decAction()); const decState = store.getState(); return initialState - 1 === decState })(), "Dispatching <code>decAction</code> on the Redux store should decrement the <code>state</code> by 1.");'
  - text: <code>counterReducer</code> должен быть функцией
    testString: 'assert(typeof counterReducer === "function", "<code>counterReducer</code> should be a function");'

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

```js
// solution required
```
</section>
